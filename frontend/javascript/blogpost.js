
const API_URL = `http://${window.location.host}/api/posts/`;
const API_URL_REF = `http://${window.location.host}/`;


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
	    const realDate = new Date(parseInt(post.date)).toDateString(); 
	   blogPostsBuild +=  `<a href = "${postUrl}">`+
	    `<div class="postssub" id = "Postssub">`+
    '<div class="dateAcontent">'+
    `<div class="postdate">${realDate}</div>`+
     `<div class = "title">${post.title}</div>`+
    ' </div>'+
  '</div>'+
  '</a>'
   }
   document.getElementById("Posts").innerHTML = blogPostsBuild;
}

