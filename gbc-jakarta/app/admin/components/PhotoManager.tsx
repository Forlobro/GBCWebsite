"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { GbcCompanyPhoto } from "../../lib/supabase";

interface PhotoManagerProps {
  companyId: number;
  photos: GbcCompanyPhoto[];
  onPhotosChange: () => void;
}

export default function PhotoManager({
  companyId,
  photos,
  onPhotosChange,
}: PhotoManagerProps) {
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);

    // Generate previews
    const previewUrls = files.map((f) => URL.createObjectURL(f));
    setPreviews(previewUrls);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    setUploading(true);

    const formData = new FormData();
    selectedFiles.forEach((f) => formData.append("photos", f));

    try {
      const res = await fetch(`/api/admin/companies/${companyId}/photos`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        alert(`Upload failed: ${err.error}`);
        return;
      }

      // Clear selection
      setSelectedFiles([]);
      setPreviews([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      onPhotosChange();
    } catch {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (photoId: number) => {
    if (!confirm("Delete this photo?")) return;
    setDeletingId(photoId);

    try {
      const res = await fetch(
        `/api/admin/companies/${companyId}/photos?photoId=${photoId}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        const err = await res.json();
        alert(`Delete failed: ${err.error}`);
        return;
      }

      onPhotosChange();
    } catch {
      alert("Delete failed. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const cancelSelection = () => {
    setSelectedFiles([]);
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <i className="fas fa-images text-[#00c2cb]" /> Photos
        <span className="text-slate-500 text-sm font-normal ml-1">
          ({photos.length})
        </span>
      </h3>

      {/* Existing Photos */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700"
            >
              {photo.photo_url && (
                <Image
                  src={photo.photo_url}
                  alt="Company photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )}
              {/* Delete overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button
                  onClick={() => handleDelete(photo.id)}
                  disabled={deletingId === photo.id}
                  className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {deletingId === photo.id ? (
                    <i className="fas fa-spinner fa-spin" />
                  ) : (
                    <i className="fas fa-trash-alt" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {photos.length === 0 && previews.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-slate-700 rounded-2xl">
          <i className="fas fa-camera text-4xl text-slate-600 mb-3" />
          <p className="text-slate-500 text-sm">No photos yet</p>
        </div>
      )}

      {/* Upload Area */}
      <div className="border border-slate-700 rounded-2xl p-6 bg-slate-800/30">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-700 text-white rounded-xl text-sm font-medium hover:bg-slate-600 transition-colors cursor-pointer"
          >
            <i className="fas fa-plus" />
            Select Photos
          </button>
          <span className="text-slate-500 text-sm">
            JPG, PNG, WebP — max 5MB per file
          </span>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Previews */}
        {previews.length > 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-slate-800 border border-slate-600"
                >
                  <img
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00c2cb] to-[#00a8b0] text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-[#00c2cb]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {uploading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Uploading{" "}
                    {selectedFiles.length} photo(s)...
                  </>
                ) : (
                  <>
                    <i className="fas fa-cloud-upload-alt" /> Upload{" "}
                    {selectedFiles.length} photo(s)
                  </>
                )}
              </button>
              <button
                onClick={cancelSelection}
                className="px-4 py-2.5 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
