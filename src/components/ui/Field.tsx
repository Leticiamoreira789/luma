import clsx from "clsx";
import type { FormFieldConfig } from "@/types/content";

interface FieldProps {
  field: FormFieldConfig;
}

const control =
  "type-body w-full rounded-control border border-border bg-cream px-4 text-ink placeholder:text-text-muted";

/** Label + input/textarea. Native `required` and `type="email"` for now; JS validation comes in Phase 4. */
export function Field({ field }: FieldProps) {
  const { id, name, label, type, placeholder, autoComplete, required } = field;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="type-body font-bold text-ink">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className={clsx(control, "h-[100px] resize-y py-3.5 lg:h-[120px]")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className={clsx(control, "h-12 py-3")}
        />
      )}
    </div>
  );
}
