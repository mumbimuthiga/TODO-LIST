const div1=document.querySelector("#content");
const div2=document.createElement("div");
const displaydiv=document.createElement("div");
const h3=document.createElement("h3");
h3.innerHTML="Create Todo";
div1.appendChild(h3)
const createbtn=document.createElement("button");
createbtn.innerHTML=`<img src="../images/createbtn.png" width="50px" height="40px">`;
createbtn.id="createbtn";
div2.appendChild(createbtn);
div1.appendChild(div2)
const createtodofxn=createbtn.addEventListener('click' ,()=>{
    const form=document.createElement("form");
    form.classList="form-group";
    //Title
    const divtitle=document.createElement("div");
    const titleinput=document.createElement("input")
    const title=document.createElement("label");
    title.innerHTML="Title"
    titleinput.placeholder="Enter the title"
    titleinput.type="text";
    divtitle.appendChild(title);
   divtitle.appendChild(titleinput);
    form.appendChild(divtitle)
    div1.appendChild(form);
    //Description
    const divdesc=document.createElement("div");
    const desc=document.createElement("label");
    desc.innerHTML="Description";
    const descriptionInput=document.createElement("input")
    descriptionInput.placeholder="Description"
    descriptionInput.type="textarea";
    divdesc.appendChild(desc)
    divdesc.appendChild(descriptionInput);
    form.appendChild(divdesc);
//CreateDate
    const divdate=document.createElement("div");
    const datecreate=document.createElement("label");
    datecreate.innerHTML="Create Date"
    const dateInput=document.createElement("input")
    dateInput.placeholder="Create Date"
    dateInput.type="date"
   divdate.appendChild(datecreate);
    divdate.appendChild(dateInput);
    form.appendChild(divdate);
    
//Deadline
const divdeadline=document.createElement("div");
const datedead=document.createElement("label");
    datedead.innerHTML="Deadline"
    const deadlineInput=document.createElement("input");
    deadlineInput.placeholder="Deadline"
    deadlineInput.type="date";
    divdeadline.appendChild(datedead);
    divdeadline.appendChild(deadlineInput);
    form.appendChild(divdeadline);

 //Submit
 const divsubmit=document.createElement("div");
    const submitbtn=document.createElement('button');
    submitbtn.id="submitbtn";
    submitbtn.innerHTML="Submit";
    divsubmit.appendChild(submitbtn);
    form.appendChild(divsubmit);
  
    // width="50px" height="50px"`
   // div1.appendChild(img)
    submitbtn.addEventListener('click' ,(e)=>{
        e.preventDefault();
        const t1=titleinput.value;
        const de1=descriptionInput.value;
        const c1=dateInput.value;
        const d1=deadlineInput.value
        const divalert=document.createElement("div");
        divalert.classList="alert";
        div1.insertBefore( divalert ,form);
        setTimeout(()=>divalert.remove(),3000);
      if(t1==='' || de1==='' ||c1===''|| d1===''){
          divalert.innerHTML="Please Fill all the fields";
      }else{
        const divimage=document.createElement('div');

        const img=document.createElement('img');
        img.src=`../images/todo.jpg`;
        img.id="imagetodo"
       // divimage.appendChild(img);
       div1.appendChild(divimage)
       
        displaydiv.classList="displaydiv";
        const formdisplay=document.createElement('form');
        formdisplay.classList="formdisplay"
        const div4=document.createElement("div");
       const ul=document.createElement("ul");
       const li=document.createElement("li");
       li.textContent=`${titleinput.value}`;
       ul.appendChild(li);
       div4.appendChild(ul);
       formdisplay.appendChild(div4)
       div1.appendChild(formdisplay)      
      divimage.appendChild(displaydiv)
      }

    });
    
    

  });
   const displaytodo=()=>{
     

   }

//export default createtodofxn;
