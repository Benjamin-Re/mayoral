import styles from './card.module.css';
import Image from 'next/image';

export default function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={'/images/' + props.imgUrl} // Route of the image file
          height={344} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Camiseta con mangas largas"
        />
        <div className={styles.description}>{props.description}</div>
        {props.discount ? (
          <>
            <div className={styles.oldPrice}>{props.price}€</div>
            <div className={styles.discountPrice}>{props.price*((100-props.discount)/100)}€(-{props.discount}%)</div>
          </>
        ) : (
          <div className={styles.price}>{props.price}€</div>
        )}
        <div className={styles.moreColors}>más colores</div>
        <button className={styles.addBtn}>AÑADIR</button>
      </div>
    </>
  );
}
