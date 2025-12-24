import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-white text-zinc-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}