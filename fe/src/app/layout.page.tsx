import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { StyledRoot } from "./ui/StyledRoot";

export const metadata: Metadata = {
  title: "Random Picker",
  description: "Random picker with multiple types",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* add multiple class, options */}
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      {/* <body className={clsx(geistSans.variable, geistMono.variable)}> */}
      <body>
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
