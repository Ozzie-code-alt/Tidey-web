export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "tidey-cookie-consent";

export function getCookieConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setCookieConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // private mode / storage disabled — choice simply won't persist
  }
}

export function hasGlobalPrivacyControl(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "globalPrivacyControl" in window.navigator &&
    (window.navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl === true
  );
}

export type VisitorGeo = {
  country: string | null;
  region: string | null;
};

type ConsentTarget = {
  country: string;
  regions?: string[];
};

// Who sees the cookie consent banner. Change to e.g.
//   [{ country: "US", regions: ["CA"] }]  -> California only
//   []                                     -> nowhere
//   undefined semantics: an entry without `regions` matches the whole country.
const CONSENT_TARGETS: ConsentTarget[] = [{ country: "US", regions: ["CA"] }];

export function shouldShowConsentBanner(geo: VisitorGeo): boolean {
  if (!geo.country) return false;
  return CONSENT_TARGETS.some(
    (t) =>
      t.country === geo.country &&
      (!t.regions || (geo.region != null && t.regions.includes(geo.region)))
  );
}
