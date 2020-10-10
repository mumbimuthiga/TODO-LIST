const projsubmit=document.querySelector("#projsubmit");
const main=document.querySelector(".main");
const displayproject=document.querySelector(".displayform");
projsubmit.addEventListener('click' ,(e)=>{
    e.preventDefault();
    const projtitle=document.querySelector("#titleproj");
    const titleprojinput=projtitle.value;
    if(titleprojinput==='none'){
        alert("Please Fill in the  project");
    }else{
        console.log("click")
        displayform.style.display=='inline-block'
        
        const ul=document.createElement("ul");
      const li=document.createElement("li");
     li.textContent=`${titleprojinput}`;
    ul.appendChild(li);
    displayform.appendChild(ul);
   
    main.appendChild(displaydiv)
    }
})