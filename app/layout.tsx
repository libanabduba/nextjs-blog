import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
  <header>
    <div className="text-center bg-slate-900 p-8 mt-4 rounded-md">
      <Link href ="/">
        <h1 className="text-3xl bg text-white font-bold p-2">Liban's Blog</h1>
        </Link>
      <p className="text-slate-300">Welcome to My Blog. </p>
    </div>
  </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-600">
        <p>Created by Liban </p>
      </div>
    </footer>
    );
  return (
    <html>
      <head />
      <body className="mx-auto max-w-2xl px-6">
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
