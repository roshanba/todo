const btn=document.getElementById("btn");
const output_div=document.getElementById("output");

btn.addEventListener("click",
()=>{
    const input_text=document.getElementById("input_text").value;
    if(input_text===""){
        alert("please enter something");
        return;
    }
    data=true;
    var item=document.createElement("p");
    console.log(this);
    item.innerHTML=input_text+`<a href='#' id='delete_link'>Delete </a>`;
    
    output_div.appendChild(item);
  }
);

if(data){
    console.log(data);
const delete_item=document.getElementById("delete_link");
delete_item.addEventListener("click",
()=>{
    console.log("delete button clicked")
  }
);
}
