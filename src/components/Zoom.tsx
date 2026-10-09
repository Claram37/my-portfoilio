import { cn } from "@/lib/utils";

interface ZoomProps {
  src: string;
  alt: string;
  className?: string;
  shadow?: string;
  loading?: "eager" | "lazy";
}

const Zoom = ({ src, alt, className, shadow, loading = "lazy" }: ZoomProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn("rounded-card", shadow, className)}
    />
  );
};

export default Zoom;
