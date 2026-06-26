import { X } from 'lucide-react';

export function Lightbox({
  image,
  caption,
  onClose
}: {
  image: string | null;
  caption: string;
  onClose: () => void;
}) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 p-4" role="dialog" aria-modal="true" aria-label={caption}>
      <button
        className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={onClose}
        aria-label="Close image preview"
        type="button"
      >
        <X aria-hidden />
      </button>
      <figure className="max-w-5xl">
        <img className="max-h-[80vh] w-full rounded-lg object-contain" src={image} alt={caption} />
        <figcaption className="mt-4 text-center text-sm text-white">{caption}</figcaption>
      </figure>
    </div>
  );
}
