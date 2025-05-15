"use client";

//mantine
import {
  ColorSchemeScript,
  Container,
  createTheme,
  MantineProvider,
  useMantineColorScheme,
} from "@mantine/core";
//@mantine-styles
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
//props
import "@/public/global.css";

//clsx
import cx from "clsx";
//styles
import classes from "./AppWrapper.module.css";
import { PropsWithChildren } from "react";
import imgLogo from "@/assets/slf.jpg";

export function AppWrapper({ children }: PropsWithChildren) {
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

        {/* Primary Meta Tags */}
        <meta name="title" content="Shivata Love Foundation" />
        <meta
          name="description"
          content="Empowering communities through art, education, disaster relief, and cultural exchange. Join us in creating meaningful impact from Kathmandu to the world."
        />
        <meta
          name="keywords"
          content="Shivata Love Foundation, Nepal NGO, art education, disaster relief, children empowerment, scholarships Nepal, Mithila art, Bhaktapur, cultural programs"
        />
        <meta name="author" content="Shivata Love Foundation" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shivata-love.org/" />
        <meta property="og:title" content="Shivata Love Foundation" />
        <meta
          property="og:description"
          content="Empowering communities through art, education, disaster relief, and cultural exchange."
        />
        <meta property="og:image" content={imgLogo.src} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://shivata-love.org/" />
        <meta name="twitter:title" content="Shivata Love Foundation" />
        <meta
          name="twitter:description"
          content="Empowering communities through art, education, disaster relief, and cultural exchange."
        />
        <meta name="twitter:image" content={imgLogo.src} />
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
