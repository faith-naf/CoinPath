import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { ClerkProvider,} from "@clerk/nextjs";


const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoinPath",
  description: "Clear paths to bigger savings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
 
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        figtree.variable,
      )}
    > 
  
      <body className="min-h-full flex flex-col">
         <ClerkProvider> 
        {/* Header */}
      <Header />
        <main className="min-h-screen flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ❤️ by Jo-Lynn Faith</p>
          </div>
        </footer>  
        </ClerkProvider>
      </body>
    </html>

  );
}