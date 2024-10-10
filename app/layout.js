import "@/Styles/globals.css";

export const metadata = {
  title: "Neon",
  description: "Wellcome to the Neon app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
