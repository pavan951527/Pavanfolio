
const API_URL = `http://${window.location.host}/api/posts/`;
const API_URL_REF = `http://${window.location.host}/`;

window.onload=()=>{
     getPost();
 
}




const getPost = () =>{
    const postId = getPostIdParam();
    
    const url = `${API_URL}${postId}`;

    fetch( url , {
	    method:"GET"
    }).then((response)=>{
	    return response.json();
    }).then((data)=>{
	    openPost(data);
    })
}

const getPostIdParam = () =>{
	const queryString = window.location.search;
	const URLparams = new URLSearchParams(queryString);
	
	return URLparams.get("id");
	
}


const openPost=(data)=>{
	const realDate = new Date(parseInt(data.date)).toDateString();
	console.log(data);
	document.getElementById("PostTitle").innerText = data.title;
	document.getElementById("PostDate").innerText = realDate;
	document.getElementById("PostContent").innerText = data.content;
	document.getElementById("Postimg").style.backgroundImage = `${data.image}`;


	console.log(data.image)
}