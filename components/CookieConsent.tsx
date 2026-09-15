"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getCookieConsent,
  setCookieConsent,
  hasGlobalPrivacyControl,
  shouldShowConsentBanner,
  type VisitorGeo,
} from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      const force = window.location.search.includes("consent=1");
      if (force) {
        setVisible(true);
        return;
      }

      if (getCookieConsent()) return;

      if (hasGlobalPrivacyControl()) {
        setCookieConsent("rejected");
        return;
      }

      try {
        const res = await fetch("/api/region", { cache: "no-store" });
        if (!res.ok) return;
        const geo = (await res.json()) as VisitorGeo;
        if (!cancelled && shouldShowConsentBanner(geo)) setVisible(true);
      } catch {
        // region check failed — fail closed, never nag non-target visitors
      }
    }

    check();
    return () => {
      cancelled = true;
    };
  }, []);

  function decide(choice: "accepted" | "rejected") {
    setCookieConsent(choice);
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed bottom-5 left-5 z-[70] w-[min(360px,calc(100vw-40px))] rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(0,70,128,0.22)] lg:min-w-[500px] transition-all duration-300 lg:rounded-[40px] ${
        leaving ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <h2 className="text-[16px] lg:text-[18px] font-bold leading-[130%] text-[#232323]">
        We value your privacy
      </h2>
      <p className="mt-2 text-[12px] lg:text-[14px] font-normal leading-[160%] text-[#878787]">
        We use essential cookies to make Tidey work. Optional features will
        always be your choice, and we never sell or share personal information.
        Details in our{" "}
        <Link
          href="/privacy"
          className="font-semibold text-[#0088FA] underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-[10px] lg:flex-row">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="h-[30px] w-full lg:h-[52px] lg:flex-1 cursor-pointer rounded-full bg-[linear-gradient(180deg,#0088FA_0%,#00CCFA_100%)] px-6 text-[14px] lg:text-[16px] font-semibold text-white shadow-[inset_0px_0px_20px_#FFFFFF] transition hover:brightness-105 active:scale-[0.98]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="h-[30px] w-full lg:h-[52px] lg:flex-1 cursor-pointer rounded-full border border-[#D9EFFD] bg-white px-6 text-[14px] lg:text-[16px] font-semibold text-[#232323] transition hover:border-[#00BAFA] active:scale-[0.98]"
        >
          Reject non-essential
        </button>
      </div>
    </div>
  );
}
