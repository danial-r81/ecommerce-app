import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
   title: 'NextJs eCommerce app',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en' dir='rtl'>
         <body>
            <main className='w-full h-screen flex relative'>
               <Navbar />
               {children}
            </main>
         </body>
      </html>
   );
}
