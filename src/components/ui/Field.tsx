import clsx from "clsx";
import type { FocusEventHandler, FormEventHandler } from "react";
import type { FormFieldConfig } from "@/types/content";

interface FieldProps {
  field: FormFieldConfig;
  /** Error message. Sets aria-invalid and links the message with aria-describedby. */
  error?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onInput?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const control =
  "type-body w-full rounded-control border bg-cream px-4 text-ink placeholder:text-text-muted";

/**
 * Label + input/textarea + error message. The error paragraph is always rendered (empty
 * and 0px tall when there is no error) so screen readers announce it when it appears.
 */
export function Field({ field, error, onBlur, onInput }: FieldProps) {
  const { id, name, label, type, placeholder, autoComplete, required } = field;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    placeholder,
    required,
    onBlur,
    onInput,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  } as const;
  const borderClass = error ? "border-error" : "border-border";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="type-body font-bold text-ink">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          {...shared}
          className={clsx(
            control,
            borderClass,
            "mt-2 h-[100px] resize-y py-3.5 lg:h-[120px]",
          )}
        />
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          className={clsx(control, borderClass, "mt-2 h-12 py-3")}
        />
      )}
      <p
        id={errorId}
        aria-live="polite"
        className={clsx("type-body text-error", error && "mt-2")}
      >
        {error}
      </p>
    </div>
  );
}
