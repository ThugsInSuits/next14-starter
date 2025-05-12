import Image from "next/image";
import styles from "./singlePostPage.module.css"
import UserPost from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
// Fetch data with an api
// const getData = async(slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json()
// }

const SinglePostPage = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug)
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            alt=""
            width={50}
            height={50}
          />
          <UserPost userId={post.userId}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2025</span>
          </div>
        </div>
        <div className={styles.context}>
          {post.body}
        </div>
      </div>

    </div>
  )
}

export default SinglePostPage;