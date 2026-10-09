import { useId } from "react";
import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
}

const control =
  "w-full rounded-input bg-surface px-5 py-4 text-base placeholder:text-placeholder focus-ring";

const Field = ({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  multiline = false,
}: FieldProps) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required
          className={cn(control, "h-42 resize-none")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          className={cn(control, "h-14")}
        />
      )}
    </div>
  );
};

export default Field;
