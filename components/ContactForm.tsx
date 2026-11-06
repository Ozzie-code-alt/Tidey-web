"use client";

import { useState } from "react";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const CONTACT_EMAIL = "hello@gettidey.com";

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
    "w-full rounded-[20px] border bg-white px-5 py-3.5 text-[16px] font-normal text-[#232323] outline-none transition placeholder:font-normal placeholder:text-[#878787] focus:ring-4";
  const tone = error
    ? "border-[#E24B4A] focus:border-[#E24B4A] focus:ring-[rgba(226,75,74,0.15)]"
    : "border-[#D9EFFD] focus:border-[#00BAFA] focus:ring-[rgba(0,186,250,0.18)]";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-[#232323]">
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
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-[#E24B4A]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = `Tidey support — ${fields.name.trim()}`;
    const body = `Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n\n${fields.message.trim()}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setFields(empty);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-5 py-2 text-center">
        <div>
          <p className="text-[24px] font-bold leading-[32px] text-[#232323] lg:text-[clamp(22px,1.68vw,32px)] lg:leading-[125%]">
            Almost there!
          </p>
          <p className="mx-auto mt-2 max-w-[420px] text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[18px]">
            Your email app just opened with your message pre-filled — hit send to
            deliver it.
          </p>
        </div>

        <p className="text-[14px] font-normal leading-[160%] text-[#878787] lg:text-[16px]">
          Nothing opened? Email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-[#0088FA] underline underline-offset-2 transition hover:text-[#00BAFA]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[16px] font-semibold text-[#0088FA] underline underline-offset-4 transition hover:text-[#00BAFA]"
        >
          Write another message
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
        className="inline-flex w-full items-center justify-center gap-[14px] rounded-[60px] bg-[#0088FA] px-8 py-5 text-white shadow-[inset_0px_0px_20px_#FFFFFF] transition hover:brightness-105 active:scale-[0.97] md:min-w-79 lg:w-auto lg:px-[clamp(25px,2.42vw,46px)] lg:py-[clamp(14px,1.37vw,26px)]"
      >
        <span className="text-center text-[18px] font-semibold leading-none lg:text-[clamp(16px,calc(0.57vw+9.14px),20px)]">
          Send message
        </span>
      </button>
    </form>
  );
}