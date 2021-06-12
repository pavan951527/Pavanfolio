
const API_URL = `https://${window.location.host}/api/posts/`;
const API_URL_REF = `https://${window.location.host}/`;

window.onload=()=>{
     getPost();
 
}




const getPost = () =>{
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`;

    fetch(url , {
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
	console.log(data);
	document.getElementById("PostTitle").innerText = data.title;
	document.getElementById("PostDate").innerText = data.added_data;
	document.getElementById("PostContent").innerText = data.content;
}