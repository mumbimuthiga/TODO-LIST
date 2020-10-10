const formdaily=document.querySelector(".form-daily");
const daily=document.querySelector("#createdailybtn");
const details=document.querySelector("#details");
const  formdetails=document.querySelector(".formdetails");
const back=document.querySelector("#backbtn");
const delit=document.querySelector("#delit");
const delit1=document.querySelector("#delit1");
const dailyform=document.querySelector(".dailyform");
const dailyform1=document.querySelector(".dailyform1");
daily.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("Clicked");
   
    if(formdaily.style.display=='none'){
        console.log('click')
         formdaily.style.display=='inline-flex'
     }else{
  formdaily.style.display='inline-flex'
     }
  
});

details.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("Clicked");
   
    if(formdetails.style.display=='none'){
        console.log('click')
         formdetails.style.display=='inline-flex'
     }else{
  formdetails.style.display='inline-flex'
     }
  
});
back.addEventListener('click' ,(e)=>{
    e.preventDefault();
    console.log("hide")
    formdetails.style.display='none';
})
delit.addEventListener("click" ,(e)=>{
    e.preventDefault();
    
    dailyform1.remove();
})
delit1.addEventListener("click" ,(e)=>{
    e.preventDefault();
    
    dailyform.remove();
})

