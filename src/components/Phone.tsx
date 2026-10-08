import { cn } from '@/lib/utils';

type PhoneProps = {
  src: string;
  alt: string;
  className?: string;
  shadow?: string;
  loading?: 'eager' | 'lazy';
};

// A 280×580 phone frame: 9px black bezel, 44px outer and 35px screen corners, scaled to whatever width it is given.
// The rounded-device, p-bezel and rounded-screen tokens are shares of the phone's width, so they need the @container
export default function Phone({ src, alt, className, shadow = 'shadow-phone', loading = 'lazy' }: PhoneProps) {
  return (
    <div className={cn('@container aspect-280/580', className)}>
      <div className={cn('size-full rounded-device bg-bezel p-bezel', shadow)}>
        <img src={src} alt={alt} loading={loading} decoding="async" className="size-full rounded-screen object-cover" />
      </div>
    </div>
  );
}
