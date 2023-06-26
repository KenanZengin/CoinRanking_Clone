import '../styles/globals.scss'
import Header from '../backbones/header'
import Footer from '../backbones/footer'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ 
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
