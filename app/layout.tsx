import './globals.css';

export const metadata = {
  title: 'GAIA 2.0',
  description: 'Symbiotic Earth Intelligence Simulation Hub',
  icons: {
    icon: 'public/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
