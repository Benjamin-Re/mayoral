import styles from './card.module.css';
import Image from 'next/image';
export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <Image
          src="/images/camiseta-2.jpg" // Route of the image file
          height={344} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Camiseta con mangas largas"
        />
        <div className={styles.description}>Camiseta con mangas largas</div>
        <div className={styles.price}>22.99€</div>
        <div className={styles.moreColors}>más colores</div>
        <button className={styles.addBtn}>AÑADIR</button>
      </div>
    </>
  );
}
