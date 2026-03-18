"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { buildWhatsAppLinkTo } from "@/lib/links";

type FormState = {
  name: string;
  phone: string;
  requirement: string;
};

const initialState: FormState = { name: "", phone: "", requirement: "" };

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = useMemo(() => digitsOnly(state.phone), [state.phone]);
  const canSubmit = useMemo(() => {
    return Boolean(state.name.trim() && phoneDigits.length >= 10 && state.requirement.trim());
  }, [phoneDigits.length, state.name, state.requirement]);

  const whatsappLink = useMemo(() => {
    const msg = `Hello, I need help with: ${state.requirement}\nName: ${state.name}\nPhone: ${state.phone}\nPlease share price and installation details.`;
    return {
      akhil: buildWhatsAppLinkTo(site.whatsappDigits, msg),
      anuj: buildWhatsAppLinkTo(site.secondaryWhatsappDigits, msg)
    };
  }, [state.name, state.phone, state.requirement]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    if (!canSubmit) {
      setError("Please enter Name, valid Phone number, and Requirement.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card"
      aria-label="Contact form"
    >
      <h2 className="text-lg font-bold text-energy-ink">Contact Form</h2>
      <p className="mt-2 text-sm text-slate-700">
        Fill details and we’ll respond quickly. For instant price, WhatsApp is fastest.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name *</span>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Phone *</span>
          <input
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
            placeholder="Mobile number"
            autoComplete="tel"
            inputMode="tel"
            required
          />
          <p className="mt-2 text-xs text-slate-500">We will call you back on this number.</p>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Requirement *</span>
          <textarea
            value={state.requirement}
            onChange={(e) => setState((s) => ({ ...s, requirement: e.target.value }))}
            className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-energy-ink outline-none transition focus:border-energy-blue focus:ring-4 focus:ring-energy-blue/10"
            placeholder="Example: 3kW solar on-grid, 150Ah battery replacement, inverter setup for 2BHK..."
            required
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thanks! For fastest response, please call or WhatsApp us.
        </div>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex w-full items-center justify-center rounded-xl bg-energy-blue px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#0A4CC0] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Submit
        </button>
        <div className="grid gap-3">
          <a
            href={whatsappLink.akhil}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
          >
            WhatsApp Akhil
          </a>
          <a
            href={whatsappLink.anuj}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-95"
          >
            WhatsApp Anuj
          </a>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Or call:
        <br />
        <a className="font-semibold text-energy-blue hover:underline" href={`tel:${site.primaryPhoneE164}`}>
          {site.primaryContact.name} ({site.primaryContact.phone})
        </a>
        <br />
        <a
          className="font-semibold text-energy-blue hover:underline"
          href={`tel:+${site.phoneCountryCode}${site.secondaryContact.phone}`}
        >
          {site.secondaryContact.name} ({site.secondaryContact.phone})
        </a>
      </p>
    </form>
  );
}
