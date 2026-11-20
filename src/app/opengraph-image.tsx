import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "luma. | Practical learning for curious people";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse needs the font file itself (ttf/otf/woff); next/font's output can't be reused here.
const plusJakartaSansExtraBold = await readFile(
  join(process.cwd(), "src/fonts/PlusJakartaSans-ExtraBold.ttf"),
);

const PRIMARY = "#3157F6";
const INK = "#171B2C";
const CREAM = "#F9F8F3";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          padding: "72px 80px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 800,
          color: INK,
        }}
      >
        <div style={{ display: "flex", fontSize: 56, letterSpacing: -1.4 }}>
          luma.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: "90px",
            letterSpacing: -2.1,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 96,
              height: 12,
              background: PRIMARY,
              borderRadius: 6,
              marginBottom: 32,
            }}
          />
          <div style={{ display: "flex" }}>Build skills that</div>
          <div style={{ display: "flex" }}>actually move you</div>
          <div style={{ display: "flex" }}>
            forward<span style={{ color: PRIMARY }}>.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: plusJakartaSansExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
