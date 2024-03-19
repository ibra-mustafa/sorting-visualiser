"use client";
import { SortingAlgoProvider } from "@/context/Visualiser";
import "@/global.css";
import { useContext } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <SortingAlgoProvider>{children}</SortingAlgoProvider>
      </body>
    </html>
  );
}
