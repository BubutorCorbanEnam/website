import { Copy, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

export function ShareButtons({ title }: { title: string }) {
  const shareUrl = typeof window === 'undefined' ? '' : window.location.href;

  const copy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    window.dispatchEvent(new CustomEvent('toast', { detail: 'Link copied to clipboard.' }));
  };

  return (
    <div className="flex flex-wrap gap-3" aria-label="Share page">
      <Button variant="secondary" href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`} icon={<Mail size={16} />}>
        Email
      </Button>
      <Button variant="secondary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} icon={<Linkedin size={16} />}>
        LinkedIn
      </Button>
      <Button variant="ghost" onClick={copy} icon={<Copy size={16} />}>
        Copy link
      </Button>
    </div>
  );
}
