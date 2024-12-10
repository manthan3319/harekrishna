import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar/page";
import TopNavbar from "./TopNavbar/page";
import Footer from "./Footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HARE KRISHNA",
  description: "HARE KRISHNA RMC LLP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Image/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
