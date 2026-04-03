import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";

export const metadata: Metadata = {
  title: "Noir — Find movies with AI",
  description:
    "A personal movie recommendation app that learns your taste and helps you decide what to watch tonight.",

  metadataBase: new URL("https://jasperdevs.github.io/Noir-Site"),

  openGraph: {
    title: "Noir — Find movies with AI",
    description:
      "A personal movie recommendation app that learns your taste and helps you decide what to watch tonight.",
    url: "https://jasperdevs.github.io/Noir-Site",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "Noir app",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir — Find movies with AI",
    description:
      "A personal movie recommendation app that learns your taste and helps you decide what to watch tonight.",
    images: ["/og-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          <Navbar
            icon={<AppIcon src="/noir-icon.svg" />}
            appName="Noir"
            links={[
              { label: "Features", href: "#features" },
              { label: "Contact", href: "mailto:jasper@jasperdev.com" },
            ]}
            action={<DownloadActionButton />}
          />

          {children}

          <CompactFooter
            appIcon={<AppIcon src="/noir-icon.svg" filter="grayscale" />}
            links={[
              { label: "Privacy", href: "/privacy" },
              {
                label: "Terms of Use",
                href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                external: true,
              },
            ]}
            footnoteLeading={`© ${new Date().getFullYear()} Noir. All rights reserved.`}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
