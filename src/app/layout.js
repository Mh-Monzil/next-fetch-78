import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ['400', '500', '600', '700'] ,subsets: ["latin"] });

export const metadata = {
  title: {
      default: "Next Hero",
      template: "%s | Next Hero"
  },
  description: "Super Powerful Next Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
        <Navbar />
        <div className=" h-screen">
        {children}
        </div>
        </AuthProvider>
        </body>
    </html>
  );
}
