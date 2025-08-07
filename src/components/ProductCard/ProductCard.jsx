import Image from "next/image";
import styles from './ProductCard.module.css';

export default function ProductCard({ title, price, description, image, imageDescription, noImage, count, reviews }) {
    return (
        <div className={styles.productCard}>
            {image ? (
                <Image
                    src={image}
                    alt={imageDescription}
                    width={400}
                    height={300}
                    className={styles.image}
                />
            ) : (
                <div className={styles.noImage}>
                    <span>{noImage}</span>
                </div>
            )}
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.price}>{price}</h3>
            <p className={styles.description}>{description}</p>
            <div>
                <span className="rating">⭐⭐⭐⭐⭐</span>
                <span className={styles.count}>  ({count}) - </span>
                <span className={styles.reviews}>{reviews} avaliações</span>
            </div>
        </div>
    );
}