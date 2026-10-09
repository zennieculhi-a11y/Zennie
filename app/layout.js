import "./globals.css";

export const metadata = {
  title: "Zennie Mae Culhi | Programmer Profile",
  description:
    "Portfolio of Zennie Mae Culhi, an Information Technology student focused on network design and system administration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
