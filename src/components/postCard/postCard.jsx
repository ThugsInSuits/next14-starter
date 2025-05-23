import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className={styles.img} alt="" fill />
        </div>
        <span className={styles.date}>2025.05.27</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc} 
        </p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;