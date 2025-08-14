import "./globals.css";

export const metadata = {
  title: "Al Avo - Premium Avocado Juices & More | Illathupady, Edavanakkad",
  description: "Discover fresh avocado-based juices and avocado-themed items at Al Avo. Located in Illathupady, Edavanakkad. Something new is coming soon!",
  keywords: "avocado juice, fresh juice, healthy drinks, Illathupady, Edavanakkad, Al Avo",
  openGraph: {
    title: "Al Avo - Premium Avocado Juices",
    description: "Fresh avocado-based juices and more. Something new is coming!",
    type: "website",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4F7942" />
      </head>
      <body className="antialiased font-['Inter',sans-serif]">
        {children}
      </body>
    </html>
  );
}
