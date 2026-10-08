import { cn } from '@/lib/utils';

type PhoneProps = {
  src: string;
  alt: string;
  className?: string;
  shadow?: string;
  loading?: 'eager' | 'lazy';
};

// A 280×580 phone frame: 9px black bezel, 44px outer and 35px screen corners, scaled to whatever width it is given
export default function Phone({
  src,
  alt,
  className,
  shadow = 'shadow-[0_30px_60px_#00000022]',
  loading = 'lazy',
}: PhoneProps) {
  return (
    <div className={cn('@container aspect-[280/580]', className)}>
      <div className={cn('size-full rounded-[15.714cqw] bg-bezel p-[3.214cqw]', shadow)}>
        <img src={src} alt={alt} loading={loading} decoding="async" className="size-full rounded-[12.5cqw] object-cover" />
      </div>
    </div>
  );
}
