import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import TopBar from "@/components/layout/TopBar";
// import Decor from "@/components/layout/Decor";
import '@rainbow-me/rainbowkit/styles.css'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from "@/context/AppContext";

const TopBarDynamic = dynamic(() => import('@/components/layout/TopBar'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARY HOME: swap,battle,stake in the ARY ecosystem simply",
  description: "Welcome to ARYHOME where you can easily trade your tokens, participate in volume competitions and stake your ARY.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative">
        <Providers>
          <AppProvider>
            <TopBarDynamic />
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              draggable
              theme="dark"
            />
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
