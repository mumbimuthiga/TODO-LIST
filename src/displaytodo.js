const form=document.querySelector(".form-control");
const div1=document.querySelector("#content");
const submit=document.querySelector('#submitbtn');
const creatediv=document.querySelector(".creatediv");
const displaydiv=document.querySelector(".displaydiv");
const displayform=document.querySelector(".displayform")
const title= document.querySelector("#title");
const desc= document.querySelector("#desc");
const date= document.querySelector("#date");
const prior= document.querySelector("#prior");

submit.addEventListener('click' ,(e)=>{
    e.preventDefault();
    
    const t1=title.value;
    const de1=desc.value;
    const c1=date.value;
    const d1=prior.value
    
  if(t1==='' || de1==='' ||c1===''|| d1===''){
    const divalert=document.createElement("div");
    divalert.classList="alert";
 div1.insertBefore( divalert ,form);
    setTimeout(()=>divalert.remove(),3000);
      divalert.innerHTML="Please Fill all the fields";
  }else{
 
 const ul=document.createElement("ul");
 const li=document.createElement("li");
 li.textContent=`${t1}`;
 ul.appendChild(li);
 displayform.appendChild(ul);
 div1.appendChild(displaydiv)
  }
})
    