import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hundherum Nürnberg | Impressum",
  description: "Das Impressum für Hundherum Nürnberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`font-urbanist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
