import Image from "next/image";
import styles from './ProductCard.module.css';

export default function ProductCard({ title, price, description, image, imageDescription, noImage }) {
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
            <div className="racing">
                <span className="rating">⭐⭐⭐⭐⭐</span>
                <span>(4.8) - 1.234 avaliações</span>
            </div>
        </div>
    );
}