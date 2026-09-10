import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGLINE = "Everyday chores made fun";
const SUB = "Earn coins · Build streaks · Grow into capable humans";

export default function OpengraphImage() {
  const logoSvg = fs.readFileSync(
    path.join(process.cwd(), "public/assets/illustrations/tidey-logo-white.svg")
  );
  const logo = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #01AEFA 0%, #48D4FB 100%)",
        }}
      >
        <img src={logo} width={156} height={96} alt="Tidey" />
        <div
          style={{
            marginTop: 56,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: "#ffffff",
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          {SUB}
        </div>
        <div
          style={{
            marginTop: 64,
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
            padding: "14px 36px",
            borderRadius: 999,
            border: "3px solid rgba(255,255,255,0.65)",
          }}
        >
          www.gettidey.com
        </div>
      </div>
    ),
    size
  );
}
