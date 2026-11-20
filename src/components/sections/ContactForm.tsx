"use client";

import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type FormEvent,
} from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import type { ContactContent, FormFieldConfig } from "@/types/content";

interface ContactFormProps {
  content: ContactContent["form"];
}

type Status = "idle" | "sending" | "success";
type Errors = Record<string, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Mock submit: no backend, just a short delay. */
const MOCK_SEND_MS = 800;

function validate(field: FormFieldConfig, rawValue: string): string {
  const value = rawValue.trim();
  if (field.required && value === "") return field.requiredMessage;
  if (field.type === "email" && value !== "" && !EMAIL_PATTERN.test(value)) {
    return field.invalidMessage ?? "";
  }
  return "";
}

/**
 * The only client component of the Contact section. Validates on blur and on submit with
 * its own messages (`noValidate` turns the browser bubbles off), moves focus to the first
 * invalid field, and fakes the submit.
 */
export function ContactForm({ content }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function setFieldError(field: FormFieldConfig, value: string) {
    const message = validate(field, value);
    setErrors((current) => {
      if ((current[field.name] ?? "") === message) return current;
      const next = { ...current };
      if (message) next[field.name] = message;
      else delete next[field.name];
      return next;
    });
  }

  function findField(name: string) {
    return content.fields.find((field) => field.name === name);
  }

  function handleBlur(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = findField(event.currentTarget.name);
    if (field) setFieldError(field, event.currentTarget.value);
  }

  function handleInput(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (status === "success") setStatus("idle");
    const { name, value } = event.currentTarget;
    const field = findField(name);
    // Re-check only fields that already show an error, so it disappears as soon as it is fixed.
    if (field && errors[name]) setFieldError(field, value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    for (const field of content.fields) {
      const message = validate(field, String(data.get(field.name) ?? ""));
      if (message) nextErrors[field.name] = message;
    }
    setErrors(nextErrors);

    const firstInvalid = content.fields.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      const element = formRef.current?.elements.namedItem(firstInvalid.name);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    setStatus("sending");
    timerRef.current = setTimeout(() => {
      formRef.current?.reset();
      setStatus("success");
    }, MOCK_SEND_MS);
  }

  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      noValidate
      aria-busy={sending}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-card border border-border bg-white px-5 py-6 shadow-form lg:p-10"
    >
      <div className="flex flex-col gap-2">
        {/* 20/32 on every breakpoint, unlike the other h5 titles. */}
        <h3 className="font-heading text-xl leading-8 font-bold text-ink">
          {content.title}
        </h3>
        <p className="type-body text-text">{content.description}</p>
      </div>

      <div className="flex flex-col gap-5">
        {content.fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            error={errors[field.name]}
            onBlur={handleBlur}
            onInput={handleInput}
          />
        ))}
      </div>

      <div>
        <Button type="submit" disabled={sending} className="w-full">
          {sending ? content.sendingLabel : content.submitLabel}
        </Button>
        {/* Always rendered so the success message is announced when it appears. */}
        <div role="status" aria-live="polite">
          {status === "success" && (
            <p className="type-body mt-4 rounded-control bg-primary-soft px-4 py-3 text-ink">
              {content.successMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
