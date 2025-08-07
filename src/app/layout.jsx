import "./globals.css";
import Header from '../components/Header/Header'
import { products } from '../data/products.js';
import localFont from "next/font/local"

const cormorantGaramond = localFont({
    src: [
        {
            path: "../../public/fonts/CormorantGaramond-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/CormorantGaramond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-cormorant-garamond",
    display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={cormorantGaramond.variable}>
      <body >
      <Header 
        titulo="🛒 Loja de Eletrônicos" 
        descricao="Os melhores produtos com os melhores preços!" 
        totalProdutos={`📊 Total de produtos: ${products.length}`} 
      />
        {children}
      </body>
    </html>
  );
}
