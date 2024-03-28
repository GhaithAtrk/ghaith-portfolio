import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avocode",
  description: "Ghaith's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
            <Header />
            {children}
              <Toaster
                position={"top-center"}
                containerStyle={{ zIndex: "9999 !important" }}
                toastOptions={{
                  className: "react-hot-toast",
                  duration: 5000,
                  style: {
                    zIndex: 9999,
                  },
                }}
              />
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
