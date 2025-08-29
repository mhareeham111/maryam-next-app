import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Harry Potter API Demo",
  description: "Explore characters, books, and spells",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
       <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
