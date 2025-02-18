import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Chicchi di Filosofia",
  description:
    "This is the official website of the instagram page Chicchi di Filosofia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
