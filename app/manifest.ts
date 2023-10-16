import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "sai-portfolio",
    short_name: "sai",
    description: "This is Kolli Sai portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#16a34a",
    theme_color: "#000",
    icons: [
      {
        src: "/icons/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }, {
        src: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }, {
        src: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
