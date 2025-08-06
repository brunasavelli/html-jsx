"use client";

import React from 'react'
import styles from './page.module.css';
import { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { products } from '../data/products.js';

export default function Page() {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          imageDescription={product.imageDescription}
          noImage={product.noImage}
        />
      ))}
    </div>
  )
}