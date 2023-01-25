import { ReactNode } from 'react';
import 'styles/globals.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
