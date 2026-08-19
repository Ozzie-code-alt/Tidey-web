"use client";

import { useState } from "react";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", message: "" };

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
};

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  textarea,
}: FieldProps) {
  const base =
    "w-full rounded-[var(--radius-md)] border bg-white px-4 py-3 font-semibold text-ink outline-none transition placeholder:font-medium placeholder:text-[var(--ink-400)] focus:ring-4";
  const tone = error
    ? "border-[#E24B4A] focus:border-[#E24B4A] focus:ring-[rgba(226,75,74,0.15)]"
    : "border-hairline focus:border-[var(--blue-400)] focus:ring-[rgba(79,182,255,0.2)]";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-extrabold text-ink">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} ${tone} resize-y`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} ${tone}`}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-bold text-[#E24B4A]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Tell us your name";
    if (!fields.email.trim()) {
      next.email = "We need an email to reply";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "That doesn't look like an email address";
    }
    if (fields.message.trim().length < 10) {
      next.message = "A little more detail, please";
    }
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setFields(empty);
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-[var(--blue-200)] bg-[var(--surface-blue)] p-8 text-center">
        <p className="font-display text-2xl font-extrabold text-[var(--blue-700)]">
          Message sent
        </p>
        <p className="mt-2 font-semibold text-ink-soft">
          We read everything and usually reply within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 font-bold text-[var(--blue-600)] underline decoration-[var(--blue-200)] underline-offset-4 hover:decoration-[var(--blue-500)]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field
        label="Your name"
        id="name"
        value={fields.name}
        error={errors.name}
        onChange={(v) => update("name", v)}
        placeholder="Alex Rivera"
      />

      <Field
        label="Email"
        id="email"
        type="email"
        value={fields.email}
        error={errors.email}
        onChange={(v) => update("email", v)}
        placeholder="alex@family.com"
      />

      <Field
        label="Message"
        id="message"
        textarea
        value={fields.message}
        error={errors.message}
        onChange={(v) => update("message", v)}
        placeholder="What's on your mind?"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-cta mt-1 self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}