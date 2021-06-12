

const PATH = "./data.json";



class Post {
   get(){
       return this.readData();
   }
   getIndividualPost(postId){
        const posts = this.readData();
	const foundPost = posts.find((post)=>post.id == postId);
	return foundPost;
   }
   add(newPost){
      const currentPosts = this.readData();
      currentPosts.unshift(newPost);
      this.storeData(currentPosts);
   }

   readData(){
     const fs = require("fs");
     const rawData = fs.readFileSync(PATH);
     return JSON.parse(rawData);
   }

   storeData(currentPosts){
       const fs = require("fs");
      let data = JSON.stringify(currentPosts);
      fs.writeFileSync(PATH , data);
      
   }
}


module.exports = Post;