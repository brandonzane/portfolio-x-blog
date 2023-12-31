import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-8 my-6 rounded-md">
        <Image
          src="/mt-fuji-sakura.png"
          width={140}
          height={140}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Brandon's Blog</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my Developer Blog 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-600 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Brandon Mushori (Brandon.tsx)</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
