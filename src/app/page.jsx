"use client";

import React from 'react'
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { products } from '../data/products.js';
import axios from 'axios';
import Image from 'next/image';

export default function Page() {

  return (
    <div className={styles.container}>
      {products.length === 0 ? (
        <img src="/loading.gif" alt="Loading..." />
      ) : (
        products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          imageDescription={product.imageDescription}
          noImage={product.noImage}
          count={product.rating.count}
          reviews={product.rating.reviews}
        />
      ))
    )}
    </div>
  )
}

