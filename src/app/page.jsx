"use client";

import React from 'react'
import styles from './page.module.css';
import { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Page() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'iPhone 15 Pro Max 256GB',
      price: 'R$ 8.999,00',
      description: 'O mais avançado iPhone já criado, com chip A17 Pro...',
      image: '/images/iphone15.jpg',
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 1234
      },
      category: 'smartphones'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra 512GB',
      price: 'R$ 7.499,00',
      description: 'Galaxy AI revolucionário, S Pen integrada...',
      image: '/images/iphone15.jpg',
      rating: {
        stars: 5,
        count: 4.7,
        reviews: 987
      },
      category: 'smartphones'
    }
  ])

  return (
    <div className={styles.container}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  )
}