import "./globals.css";

export const metadata = {
  title: "UA Checker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"p-0 m-0"}>{children}</body>
    </html>
  );
}
