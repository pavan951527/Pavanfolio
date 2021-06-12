
const API_URL = `http://localhost:3000/api/posts/`;
const API_URL_REF = `http://localhost:3000/`;


window.onload = ()=>{
	getPosts();
}

const getPosts = ()=>{
	fetch(API_URL,{
		method:"GET"
	}).then((response)=>{
		
		return response.json();
	}).then((data)=>{
		buildPosts(data);
	})
}

const buildPosts = (blogPosts)=>{
   var blogPostsBuild = "";
   for(post of blogPosts){
	    const postUrl = `/html/post.html?id=${post.id}`;
	   blogPostsBuild +=  `<a href = "${postUrl}">`+
	    '<div class="postssub" id = "Postssub">'+
    '<div class="dateAcontent">'+
    `<div class="postdate">${post.added_data}</div>`+
     `<div class = "title">${post.title}</div>`+
    ' </div>'+
  '</div>'+
  '</a>'
   }
   document.getElementById("Posts").innerHTML = blogPostsBuild;
}

