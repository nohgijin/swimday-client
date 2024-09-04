import "./layout.scss";
import localFont from "next/font/local";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ReactQueryProviders from "@/hooks/useReactQuery";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import React from "react";

dayjs.locale("ko");

const font = localFont({
  src: "../fonts/Pretendard-Regular.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </head>
      <body style={{ touchAction: "none" }}>
        <ReactQueryProviders>
          <MantineProvider>{children}</MantineProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
