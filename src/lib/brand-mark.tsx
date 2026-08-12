import { ImageResponse } from "next/og";

const FRAUNCES_SEMIBOLD =
  "https://fonts.gstatic.com/s/fraunces/v38/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIcaRyjDg.ttf";

const PLAYFAIR_DISPLAY_ITALIC_BOLD =
  "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_k-UbtY.ttf";

const INK = "#0b0b0b";
const PAPER = "#f2f2f0";
const WHITE = "#ffffff";

let frauncesFontPromise: Promise<ArrayBuffer> | null = null;
let faviconFontPromise: Promise<ArrayBuffer> | null = null;

function getFrauncesFont() {
  if (!frauncesFontPromise) {
    frauncesFontPromise = fetch(FRAUNCES_SEMIBOLD).then((response) =>
      response.arrayBuffer()
    );
  }
  return frauncesFontPromise;
}

function getFaviconFont() {
  if (!faviconFontPromise) {
    faviconFontPromise = fetch(PLAYFAIR_DISPLAY_ITALIC_BOLD).then((response) =>
      response.arrayBuffer()
    );
  }
  return faviconFontPromise;
}

export async function renderBrandMark(size: number) {
  const fontData = await getFaviconFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <span
          style={{
            fontFamily: "Playfair Display",
            fontSize: Math.round(size * 0.94),
            fontWeight: 700,
            fontStyle: "italic",
            color: WHITE,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          F
        </span>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [
        {
          name: "Playfair Display",
          data: fontData,
          style: "italic",
          weight: 700,
        },
      ],
    }
  );
}

export async function renderOpenGraphImage({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  const fontData = await getFrauncesFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            background: INK,
            borderRadius: 20,
          }}
        >
          <span
            style={{
              fontFamily: "Fraunces",
              fontSize: 56,
              fontWeight: 600,
              color: PAPER,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            F
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontFamily: "Fraunces",
              fontSize: 72,
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "Fraunces",
              fontSize: 34,
              fontWeight: 500,
              color: "#7a7a7a",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {role}
          </p>
          <p
            style={{
              fontFamily: "Fraunces",
              fontSize: 26,
              fontWeight: 400,
              color: "#7a7a7a",
              letterSpacing: "-0.01em",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: 920,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Fraunces",
          data: fontData,
          style: "normal",
          weight: 600,
        },
        {
          name: "Fraunces",
          data: fontData,
          style: "normal",
          weight: 500,
        },
        {
          name: "Fraunces",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
