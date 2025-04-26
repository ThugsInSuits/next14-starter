import Image from "next/image";
import styles from "./singlePostPage.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title} />
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            alt=""
            fill
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jeffy</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2025</span>
          </div>
        </div>
        <div className={styles.context}>

        </div>
      </div>

    </div>
  )
}

export default SinglePostPage;