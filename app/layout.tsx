"use client";

//mantine
import {
  ColorSchemeScript,
  Container,
  createTheme,
  MantineProvider,
} from "@mantine/core";
//@mantine-styles
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
//props
import "@/public/global.css";

import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  // * Color Scheme

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme={"light"}
        />
        <title>Shivata Love Foundation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background: "#F7EDED",
        }}
      >
        <MantineProvider
          theme={createTheme({
            colors: {
              brand: [
                "#fdf3f3",
                "#fce4e4",
                "#fbcdcd",
                "#f7aaaa",
                "#ef7a7a",
                "#e55454",
                "#d13131",
                "#af2626",
                "#912323",
                "#792323",
              ],
            },
            primaryColor: "brand",
            primaryShade: {
              light: 6,
              dark: 2,
            },
            fontFamily: `"Host Grotesk", serif`,
            components: {
              Container: Container.extend({
                defaultProps: {
                  size: 1440,
                },
              }),
            },
          })}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
