const formcontrol=document.querySelector(".form-control");
const createbtn=document.querySelector("#createbtn");
const formproj1=document.querySelector(".form-project");

    createbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        formproj1.style.display=='none'
        if(formcontrol.style.display=='none'){
       console.log('click')
        formcontrol.style.display=='inline-block'
    }else{
 formcontrol.style.display='inline-block'
    }

    });


