import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "../../../../../lib/supabase";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// POST /api/admin/companies/[id]/photos — upload photo(s)
export async function POST(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const supabase = createServerClient();
  const companyId = parseInt(id);

  const formData = await request.formData();
  const files = formData.getAll("photos") as File[];

  if (!files || files.length === 0) {
    return NextResponse.json(
      { error: "No files provided" },
      { status: 400 }
    );
  }

  const uploadedPhotos = [];

  for (const file of files) {
    // Create unique filename
    const ext = file.name.split(".").pop();
    const fileName = `${companyId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("company-photos")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: `Upload failed: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("company-photos")
      .getPublicUrl(fileName);

    // Save to database
    const { data: photo, error: dbError } = await supabase
      .from("gbc_companies_photos")
      .insert({
        company_id: companyId,
        photo_url: urlData.publicUrl,
      })
      .select()
      .single();

    if (dbError) {
      return NextResponse.json(
        { error: `DB save failed: ${dbError.message}` },
        { status: 500 }
      );
    }

    uploadedPhotos.push(photo);
  }

  return NextResponse.json(uploadedPhotos, { status: 201 });
}

// DELETE /api/admin/companies/[id]/photos — delete a specific photo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const supabase = createServerClient();

  const { searchParams } = new URL(request.url);
  const photoId = searchParams.get("photoId");

  if (!photoId) {
    return NextResponse.json(
      { error: "photoId is required" },
      { status: 400 }
    );
  }

  // Get photo URL first
  const { data: photo } = await supabase
    .from("gbc_companies_photos")
    .select("photo_url")
    .eq("id", parseInt(photoId))
    .eq("company_id", parseInt(id))
    .single();

  if (photo?.photo_url) {
    // Extract path from URL
    try {
      const url = new URL(photo.photo_url);
      const path = url.pathname.split(
        "/storage/v1/object/public/company-photos/"
      )[1];
      if (path) {
        await supabase.storage.from("company-photos").remove([path]);
      }
    } catch {
      // If URL parsing fails, still delete from DB
    }
  }

  // Delete from DB
  const { error } = await supabase
    .from("gbc_companies_photos")
    .delete()
    .eq("id", parseInt(photoId));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
