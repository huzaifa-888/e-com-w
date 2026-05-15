import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Services from './components/Services';
import Team from './Team/page';
import About from './About/page';


import './globals.css';

// ✅ Montserrat Font - Simple & Clean
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700','800'] });

export const metadata = {
  title: 'Twinkle Chic',
  description: 'Your one-stop beauty destination',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Services />
        <About />
        <Team />
       
      
        <Footer />
      </body>
    </html>
  );
}
