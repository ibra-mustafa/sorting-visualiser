import { SortingAlgoProvider } from "@/context/Visualiser";
import "@/global.css";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sorting Algorthms Visualiser</title>
      </head>
      <body>
        <SortingAlgoProvider>{children}</SortingAlgoProvider>
      </body>
    </html>
  );
}
