const formproj=document.querySelector(".form-project");
const createprojbtn=document.querySelector("#createprojbtn");
const formcontrol1=document.querySelector(".form-control");
const img=document.querySelector("#imgproj");
//const createbtn=document.querySelector("#createbtn");
img.addEventListener('click' ,(e)=>{
    e.preventDefault();
    formproj.style.display=="none"

})

    createprojbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(formproj.style.display=='none'){
       console.log('click')
     
       formcontrol1.style.display=='none'
        formproj.style.display=='inline-block'
        
    }else{
 formproj.style.display='inline-block'
 formcontrol1.style.display=='none'
    }

    });


