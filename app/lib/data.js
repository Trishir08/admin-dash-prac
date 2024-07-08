import { Product, User } from "./models.js";
import { connectToDB } from "./utils.js";

export const fetchUsers = async(q , page)=>{

    const regex = new RegExp(q , 'i') ; 
    const ITEM_PER_PAGE = 2 

    try {
       connectToDB() ; 
        const users = await User.find({username : {$regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1)) ; 
        const count = await User.find({username : {$regex : regex }}).count() ;
        return {count , users}
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users") ;
    }
}


export const fetchUser = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };


export const fetchProducts = async(q , page)=>{

    const regex = new RegExp(q , 'i') ; 
    const ITEM_PER_PAGE = 2 

    try {
       connectToDB() ; 
        const products = await Product.find({username : {$regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1)) ; 
        const count = await Product.find({username : {$regex : regex }}).count() ;
        return {count , products}
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products") ;
    }
}

export const fetchProduct = async (id) => {
    try {
      connectToDB();
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
  };