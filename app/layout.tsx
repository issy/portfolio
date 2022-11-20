import 'tailwindcss/tailwind.css';
import Navbar from "@components/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className='h-screen bg-black text-white'>
        {/*<Navbar/>*/}
        {children}
      </body>
    </html>
  )
}
