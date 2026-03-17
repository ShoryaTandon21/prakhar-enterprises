"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/Icon";

type FormState = {
  contactPerson: "Akhil Kumar" | "Anuj Tandon";
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  contactPerson: "Akhil Kumar",
  name: "",
  phone: "",
  email: "",
  message: ""
};

function isValidEmail(value: string) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    const hasRequired = state.name.trim() && state.phone.trim() && state.message.trim();
    return Boolean(hasRequired && isValidEmail(state.email));
  }, [state.email, state.message, state.name, state.phone]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    if (!canSubmit) {
      setError("Please fill Name, Phone, Message (and a valid Email if provided).");
      return;
    }

    setSubmitted(true);
    setState(initialState);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card"
      aria-label="Contact form"
    >
      <h2 className="font-[var(--font-manrope)] text-lg font-semibold text-energy-ink">
        Request a Quote
      </h2>
      <p className="mt-2 text-sm text-slate-700">
        Share your requirements. We’ll get back with the best option for your budget and usage.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Contact Person</span>
          <select
            value={state.contactPerson}
            onChange={(e) => onChange("contactPerson", e.target.value as FormState["contactPerson"])}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
          >
            <option value="Akhil Kumar">Akhil Kumar</option>
            <option value="Anuj Tandon">Anuj Tandon</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Phone *</span>
          <input
            value={state.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
            placeholder="Mobile number"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Name *</span>
          <input
            value={state.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-700">Email</span>
        <input
          value={state.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
          placeholder="Optional"
          autoComplete="email"
          inputMode="email"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-700">Message *</span>
        <textarea
          value={state.message}
          onChange={(e) => onChange("message", e.target.value)}
          className="mt-2 min-h-[130px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
          placeholder="What do you need? (Inverter/Battery/Solar, load details, location, etc.)"
          required
        />
      </label>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <div className="flex items-start gap-2">
            <Icon name="badge-check" className="mt-0.5 h-5 w-5" />
            <p>Thanks! Your request is noted. Please call us for the fastest response.</p>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-energy-blue px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#0A4CC0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        Submit
      </button>
    </form>
  );
}
