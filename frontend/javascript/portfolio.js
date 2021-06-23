

const API_URL = `https://${window.location.host}/api/projects/`;
const API_URL_REF = `https://${window.location.host}/`;


window.onload = () =>{
	getProjects();
}


const getProjects = ()=>{
	fetch(API_URL , {
		method:"GET"
	}).then((response)=>{
		return response.json();
	}).then((data)=>{
		console.log(data);
		buildProjects(data);
		
	})
}

const buildProjects = (projects)=>{
	var projectsHtml = "";
	for(proj of projects){
		projectsHtml+=`
		<div class="project-div" id="project-div">
		<div><h2>${proj.title}</h2></div>
		<div><strong>Type : </strong>${proj.type}</div>
		<div><strong>Technologies used : </strong>${proj.technologies}</div>
		<div><strong>Github Link : </Link></strong><a href="${proj.github}">github</a></div>
		<div><strong>Website Link : </Link></strong><a href="${proj.website}">Website</a></div>
		<div><p>${proj.description}</p></div>
	</div>
		
		`
	}
	const main_div = document.getElementById("main-projects");
	main_div.innerHTML = projectsHtml;
}