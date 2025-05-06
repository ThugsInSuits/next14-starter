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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            alt=""
            width={50}
            height={50}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam eaque dolorum! Adipisci sunt ipsam eaque accusantium doloremque reprehenderit culpa est praesentium deleniti dolores vel quae sequi odio rem soluta, nihil laboriosam quis quisquam? Suscipit soluta beatae officia, nemo minus iste earum ratione quae praesentium atque amet dolorum quos laudantium? Sunt natus atque, sit dolorum minima consequuntur perspiciatis. Praesentium tempora consequuntur, animi voluptas commodi sunt porro reiciendis quibusdam impedit minus exercitationem ea delectus, sed corporis culpa nostrum rerum eos magnam eaque omnis beatae maxime enim odit! Omnis optio dolores hic alias neque ut corrupti magnam animi, sit eaque quia quisquam.
        </div>
      </div>

    </div>
  )
}

export default SinglePostPage;