import type { Metadata } from "next";
import "./../globals.css";
import Providers from "@/providers";
import Modals from "@/app/components/modules/Modals";

export type tParams = Promise<{ lang: string }>;

export const metadata: Metadata = {
  title: "The Manufactory",
  metadataBase: new URL("https://themanufactory.xyz"),
  description:
    "The Manufactory is a no-nonsense operational hub that puts the power of autonomous markets back into the hands of independent creators.",
  twitter: {
    creator: "@digitalax_",
    site: "@digitalax_",
    card: "summary_large_image",
    title: "digitalax_",
    description:
      "The Manufactory is a no-nonsense operational hub that puts the power of autonomous markets back into the hands of independent creators.",
  },
  openGraph: {
    title: "The Manufactory",
    description:
      "The Manufactory is a no-nonsense operational hub that puts the power of autonomous markets back into the hands of independent creators.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "www.digitalax.xyz",
    "www.f3manifesto.xyz",
    "Women",
    "Life",
    "Freedom",
  ],
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return (
    <html>
      <body>
        <Providers>
          <div className="relative w-full h-full antes:h-screen flex flex-col antes:flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-start">
            {children}
          </div>
          <Modals />
        </Providers>
      </body>
    </html>
  );
}
