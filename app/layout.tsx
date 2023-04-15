import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./api/components/navbar/Navbar";
import ClientOnly from "./api/components/ClientOnly";
import Modal from "./api/components/modals/Modal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Hello World" isOpen actionLabel="submit" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
