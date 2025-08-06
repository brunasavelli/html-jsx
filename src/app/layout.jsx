import "./globals.css";
import Header from '../components/Header/Header'
import { products } from '../data/products.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
