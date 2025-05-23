import styles from "./postUser.module.css"
import { getUser } from "@/lib/data";

// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"})
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// }

const UserPost = async({userId}) => {
  const user = await getUser(userId);
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default UserPost;