import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nikita | Java & Full Stack Web Developer",
  description: "Portfolio of Nikita - Java and Full Stack Web Developer specializing in React, Node.js, Express, MongoDB, and modern AI integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} antialiased leading-7 overflow-x-hidden bg-[#f8fafc] dark:bg-darkTheme text-slate-800 dark:text-slate-100 relative min-h-screen selection:bg-brand/20 selection:text-brand`}
      >
        {/* Statxo-inspired Ambient Glow Orbs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-200/40 via-purple-100/30 to-transparent dark:from-brand/15 dark:via-purple-950/20 dark:to-transparent blur-[120px]" />
          <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-amber-100/40 via-rose-100/30 to-transparent dark:from-coral/15 dark:via-rose-950/20 dark:to-transparent blur-[140px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-100/40 via-pink-100/30 to-transparent dark:from-purple-900/15 dark:via-pink-950/15 dark:to-transparent blur-[130px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
