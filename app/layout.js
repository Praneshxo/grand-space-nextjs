import './globals.css';

export const metadata = {
  title: 'Grand Space Interiors | Premium Interior Design Studio',
  description: 'Bespoke interior design solutions transforming spaces with creativity and craftsmanship.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
