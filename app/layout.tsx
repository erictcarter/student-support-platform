import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International Student Support Platform",
  description: "Culturally-sensitive mental health support for international students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">
                  International Student Support
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
                <Link href="/content" className="hover:text-blue-200">
                  Resources
                </Link>
                <Link href="/survey" className="hover:text-blue-200">
                  Survey
                </Link>
                <Link href="/privacy" className="hover:text-blue-200">
                  Privacy
                </Link>
                <Link href="/admin" className="hover:text-blue-200">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-16 py-8 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>&copy; 2024 International Student Support Platform. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
