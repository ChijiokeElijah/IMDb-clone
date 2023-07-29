import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/Providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* navBar */}

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
