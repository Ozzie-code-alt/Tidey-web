'use client';

import { useEffect, useState } from 'react';

const APP_STORE = 'https://apps.apple.com/app/id6819833203';
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.gettidey.app';
const ANDROID_PACKAGE = 'com.gettidey.app';

type Platform = 'ios' | 'android' | 'other';

function detectPlatform(): Platform {
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) return 'android';
  if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) {
    return 'ios';
  }
  return 'other';
}

/**
 * Parent-invite bridge. When the app is installed and the universal link
 * fires, iOS opens Tidey before this page renders at all — reaching here
 * means the app is missing or the link opened inside a browser, so we try
 * the custom scheme (best effort) and offer store links. Android Chrome
 * resolves the intent:// URL natively (app if installed, Play Store if not).
 */
export default function JoinParentBridge() {
  const [code, setCode] = useState<string | null>(null);
  const [platform, setPlatform] = useState<Platform>('other');
  const [showTapHint, setShowTapHint] = useState(false);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get('code') ?? '';
    const normalized = raw.trim().toUpperCase();
    setCode(normalized);

    const detected = detectPlatform();
    setPlatform(detected);

    if (!/^[A-Z0-9]{5}$/.test(normalized)) return;

    const encoded = encodeURIComponent(normalized);
    if (detected === 'android') {
      window.location.replace(
        `intent://join-parent?code=${encoded}#Intent;scheme=tidey;package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`,
      );
    } else if (detected === 'ios') {
      // Safari shows an "Open in Tidey?" prompt; in-app browsers may block
      // this silently — then the button below does the job.
      window.location.replace(`tidey://join-parent?code=${encoded}`);
      // Don't auto-forward to the App Store: the app may be TestFlight-only,
      // and a store redirect strands people who already have it installed.
      const timer = setTimeout(() => setShowTapHint(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const valid = code !== null && /^[A-Z0-9]{5}$/.test(code);
  const encoded = encodeURIComponent(code ?? '');
  const deepLink = `tidey://join-parent?code=${encoded}`;
  const intentLink = `intent://join-parent?code=${encoded}#Intent;scheme=tidey;package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`;

  const openHref =
    platform === 'android'
      ? intentLink
      : platform === 'ios'
        ? deepLink
        : APP_STORE;
  const openLabel = platform === 'other' ? 'Get Tidey on the App Store' : 'Open in Tidey';

  const hint = showTapHint
    ? 'Nothing happened? Tap Open in Tidey above.'
    : 'Just installed? Come back to the invite email and tap Join Household again.';

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
          background: '#FFFFFF',
          padding: '32px 24px',
          borderRadius: 24,
          border: '1px solid #EAEAEA',
        }}
      >
        {code === null || valid ? (
          <>
            <h1 style={{ fontSize: 24, margin: '0 0 12px' }}>
              Join your household on Tidey
            </h1>
            <p style={{ color: '#6B7280', fontSize: 15, margin: '0 0 24px' }}>
              Opening Tidey… If the app doesn&apos;t open automatically, tap the
              button below.
            </p>
            <a
              href={openHref}
              style={{
                display: 'inline-block',
                background: '#0088FA',
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
                padding: '14px 28px',
                borderRadius: 28,
              }}
            >
              {openLabel}
            </a>
            <p style={{ color: '#6B7280', fontSize: 14, margin: '24px 0 8px' }}>
              Don&apos;t have Tidey yet?{' '}
              <a
                href={APP_STORE}
                style={{ color: '#0088FA', textDecoration: 'none', fontWeight: 600 }}
              >
                Get it on the App Store
              </a>{' '}
              <span style={{ color: '#9CA3AF' }}>·</span>{' '}
              <a
                href={PLAY_STORE}
                style={{ color: '#9CA3AF', textDecoration: 'none' }}
              >
                Google Play
              </a>
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 12, margin: 0 }}>{hint}</p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 24, margin: '0 0 12px' }}>
              This invite link is no longer valid
            </h1>
            <p style={{ color: '#6B7280', fontSize: 15, margin: 0 }}>
              Ask the parent who invited you to send a fresh invite.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
