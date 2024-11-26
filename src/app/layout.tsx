import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import Head from "next/head"; // Import Head for adding custom scripts
import NetworkStatusChecker from "./NetworkStatusChecker";

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

export const metadata: Metadata = {
  title: "Lala Healthy Foods - Delicious & Nutritious Dishes and Snacks",
  description:
    "Discover delicious Nigerian meals, snacks, and international dishes at Lala Healthy Foods. Enjoy healthy, flavorful food delivered right to your doorstep.",
  generator:
    "Lala Healthy Foods, healthy meals, Nigerian Meals, Schools in Imo, Owerri Food, FUTO, Food in FUTO, Federal University of Tecnology",
  keywords: [
    "Nigerian food",
    "healthy Nigerian meals",
    "Nigerian snacks",
    "Jollof rice",
    "pounded yam",
    "swallow dishes",
    "Nigerian soups",
    "international cuisine",
    "healthy meals Nigeria",
    "Lala Foods",
  ],
  applicationName: "Lala Healthy Foods",
  openGraph: {
    title: "Lala Healthy Foods - Delicious & Nutritious Dishes and Snacks",
    description:
      "Explore a variety of Nigerian and international dishes that bring health and flavor to your table.",
    url: "https://www.lalafoods.ng",
    siteName: "Lala Healthy Foods",
    images: [
      {
        url: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732593719/utilities/9b3aae4cf90f897799a5ed357d60e09d_ib7pbi.jpg",
        width: 1200,
        height: 630,
        alt: "Lala Healthy Foods - Healthy meals and snacks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lalafoodsng",
    title: "Lala Healthy Foods - Delicious & Nutritious Dishes and Snacks",
    description:
      "Taste the best of Nigerian meals and international dishes at Lala Healthy Foods.",
    images:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732593719/utilities/9b3aae4cf90f897799a5ed357d60e09d_ib7pbi.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        
        {/* Add Cloudinary widget script */}
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2YRYGXF65"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2YRYGXF65');
            `,
          }}
        />
      </Head>
      <body className=" bg-[#f1efe8]-">
        <NetworkStatusChecker />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
