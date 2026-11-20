import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const plusJakartaSansExtraBold = await readFile(
  join(process.cwd(), "src/fonts/PlusJakartaSans-ExtraBold.ttf"),
);

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3157F6",
          borderRadius: 8,
          color: "#FFFFFF",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 800,
          fontSize: 24,
        }}
      >
        l
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
