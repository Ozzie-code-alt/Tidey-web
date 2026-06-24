"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  // Reveal feature cards on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("in"), i * 110);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll(".feat").forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailRef.current?.value.trim()) return;
    setSubmitted(true);
  }

  return (
    <>
      <section className="hero">
        {/* bubbles */}
        <div
          className="bubble"
          style={{
            width: 120,
            height: 120,
            left: "6%",
            top: "22%",
            animationDelay: "0s",
          }}
        />
        <div
          className="bubble"
          style={{
            width: 70,
            height: 70,
            left: "88%",
            top: "16%",
            animationDelay: "1.4s",
          }}
        />
        <div
          className="bubble"
          style={{
            width: 46,
            height: 46,
            left: "78%",
            top: "42%",
            animationDelay: ".6s",
          }}
        />
        <div
          className="bubble"
          style={{
            width: 90,
            height: 90,
            left: "14%",
            top: "60%",
            animationDelay: "2.1s",
          }}
        />
        {/* drifting coins */}
        <div
          className="coin"
          style={{
            left: "20%",
            top: "46%",
            animationDuration: "6.5s",
            animationDelay: ".3s",
          }}
        >
          t
        </div>
        <div
          className="coin"
          style={{
            left: "72%",
            top: "50%",
            animationDuration: "7.5s",
            animationDelay: "2s",
          }}
        >
          t
        </div>
        <div
          className="coin"
          style={{
            left: "50%",
            top: "40%",
            animationDuration: "8s",
            animationDelay: "3.4s",
          }}
        >
          t
        </div>

        <nav className="nav">
          <img
            className="logo"
            src="/assets/illustrations/wordmark-white.png"
            alt="tidey"
          />
          <div className="navlink">
            <span className="pill-glass">📨 hello@tidey.app</span>
          </div>
        </nav>

        <div className="hero-inner">
          <span className="eyebrow pill-glass">
            <span className="dot" />
            Launching Spring 2026
          </span>
          <h1 className="hero-title">
            Chores just got a <span className="nudge">glow-up.</span>
          </h1>
          <p className="hero-sub">
            Tidey turns everyday chores into fun little missions — kids earn
            coins, build streaks, and grow into capable humans. Be first through
            the door.
          </p>

          <div className="mascot-wrap">
            <div className="mascot-glow" />
            <img
              className="mascot"
              src="/assets/illustrations/mascot-blob.png"
              alt="Tidey mascot"
            />
          </div>

          <div className="waitlist">
            {!submitted && (
              <form className="form" onSubmit={handleSubmit}>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="you@family.com"
                  aria-label="Email"
                  required
                />
                <button className="btn-cta" type="submit">
                  Get early access
                </button>
              </form>
            )}
            <div className={"success" + (submitted ? " show" : "")}>
              🎉 You’re on the list! We’ll be in touch soon.
            </div>
            {!submitted && (
              <p className="form-note">
                <span className="avatars">
                  <span>G</span>
                  <span>J</span>
                  <span>R</span>
                  <span>+</span>
                </span>
                Join 3,200+ families on the waitlist
              </p>
            )}
          </div>
        </div>

        <div className="phones">
          <div
            className="phone left floaty-soft"
            style={{ animationDelay: ".4s" }}
          >
            <img
              src="/assets/screens/onboarding-missions.png"
              alt="Tidey onboarding"
            />
          </div>
          <div className="phone center floaty-soft">
            <img
              src="/assets/screens/junior-dashboard.png"
              alt="Tidey kid dashboard"
            />
          </div>
          <div
            className="phone right floaty-soft"
            style={{ animationDelay: ".9s" }}
          >
            <img
              src="/assets/screens/pilot-dashboard.png"
              alt="Tidey daily chores"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feat-head">
          <h2>A tidier home, the fun way</h2>
          <p>
            Everything kids need to build great habits — and actually enjoy it.
          </p>
        </div>
        <div className="feat-grid">
          <div className="feat">
            <div className="art">
              <img
                src="/assets/illustrations/kids-highfive.png"
                alt="Kids high-fiving"
              />
            </div>
            <div className="body">
              <h3>Turn chores into missions</h3>
              <p>
                Daily tasks become playful missions your little helpers look
                forward to.
              </p>
            </div>
          </div>
          <div className="feat">
            <div className="art jar">
              <img
                src="/assets/illustrations/coin-jar.png"
                alt="Jar of Tidey coins"
              />
            </div>
            <div className="body">
              <h3>Earn, save &amp; get</h3>
              <p>
                Kids earn Tidey Coins for every job done — then trade them for
                rewards you pick together.
              </p>
            </div>
          </div>
          <div className="feat">
            <div className="art">
              <img
                src="/assets/illustrations/kids-leaders.png"
                alt="Confident kids"
              />
            </div>
            <div className="body">
              <h3>Raise future leaders</h3>
              <p>
                Teach financial literacy and a strong work ethic, starting from
                age 4.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <img
          className="logo"
          src="/assets/illustrations/wordmark-white.png"
          alt="tidey"
        />
        <div className="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@tidey.app">Contact</a>
        </div>
        <div className="copy">© 2026 Tidey. Made for families. 💙</div>
      </footer>
    </>
  );
}
