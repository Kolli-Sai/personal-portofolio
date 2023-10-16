import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Home Page";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw=" text-green-600 text-3xl font-bold">
          Kolli Sai - Portofolio
        </div>
        <div tw="my-4 text-indigo-600 font-bold text-xl">Home Page</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
