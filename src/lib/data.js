// const users = [
//   {id:1, name:'John'}, 
//   {id:2, name:'John'}, 
// ]

import { Post, User } from "./models"
import { connectToDb } from "./utils"

// const posts = [
//   {id:1,title:"Post 1",body:"……",userId:1},
//   {id:2,title:"Post 1",body:"……",userId:1},
//   {id:3,title:"Post 1",body:"……",userId:1},
//   {id:4,title:"Post 1",body:"……",userId:1}
// ]

export const getPosts = async () => {
  try{
    connectToDb();
    const posts = await Post.find()
    return posts;
  }catch(err) {
    console.log(err)
    throw new Error("Fail to fetch posts")
  }
}

export const getPost = async (slug) => {
  try{
    connectToDb();
    const post = await Post.find({slug})
    return post;
  }catch(err) {
    console.log(err)
    throw new Error("Fail to fetch post")
  }
}

export const getUser = async (id) => {
  try{
    connectToDb();
    const user = await User.findById(id)
    return user;
  }catch(err) {
    console.log(err)
    throw new Error("Fail to fetch user")
  }
}

export const getUsers = async () => {
  try{
    connectToDb();
    const users = await User.find()
    return users;
  }catch(err) {
    console.log(err)
    throw new Error("Fail to fetch user")
  }
}