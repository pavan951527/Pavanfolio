
const API_URL = `http://${window.location.host}/api/posts/`;

 const onSubmitAppend = ()=>{
       const title = document.getElementById("title").value;
       const content = document.getElementById("Content").value;
       const fileImage = document.getElementById("myFile");
       const error  = document.getElementById("Action");

       const data =  new FormData();


       data.append("title" , title);
       data.append("content" , content);
       data.append("image" , fileImage.files[0]);
       data.append("id" , Date.now());
       data.append("date" , Date.now());
       
       fetch(API_URL , {
	       method:"POST",
	       body:data
       }).then(()=>{
	       setTimeout(()=>{
                window.location.href = "blog.html"
	       },1000)
	       
       })
       
       
}
