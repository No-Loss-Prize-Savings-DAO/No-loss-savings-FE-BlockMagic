import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Web3Modal } from "@/connection";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  // weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blitz",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${montserrat.className}`}>
      <Web3Modal>
        <body>
          {children}
          <Toaster />
        </body>
      </Web3Modal>
    </html>
  );
}
