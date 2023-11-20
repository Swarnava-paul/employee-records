document.getElementById("form").addEventListener("submit",Display);// we add submit event to form
let table=document.getElementById("table").getElementsByTagName("tbody")[0]; // select and store table body;

let information=[];// we declare an array for store inputed datas

function Display(){ // In event of submit Display function will call

    event.preventDefault();
   let name=document.getElementById("name");
   let empid=document.getElementById("employeeID");
   let dep=document.getElementById("department");
   let number=document.getElementById("mbl");
   let email=document.getElementById("email");
   let exp=document.getElementById("exp");
    /*In top we select all input and stored in different variables */

    if(name.value==""||empid.value==""||dep.value==""||number.value==""||email.value==""||exp.value==""){
        alert("Input all values"); // if any input tag value is empty that time this alert is showing
    }
    else{  /*Else all logic are applied*/

        let info={};
        info.name=name.value;
        info.employeeId=empid.value;
        info.department=dep.value;
        info.number=number.value;
        info.email=email.value;
        info.experience=exp.value;

         
        let row=document.createElement("tr");// create a new row (tr)

        let data1=document.createElement("td");
        let data2=document.createElement("td");
        let data3=document.createElement("td");
        let data4=document.createElement("td");
        let data5=document.createElement("td");
        let data6=document.createElement("td");
        let data7=document.createElement("td");
    
        /*In top we create seven table data (td) */
        
        data1.innerText=name.value;
        data2.innerText=empid.value;
        data3.innerText=dep.value;
        data4.innerText=exp.value;
        data5.innerText=email.value;
        data6.innerText=number.value;
        /*in top we store all inputs value in table tadas (td) */
        
        row.appendChild(data1);/* here we append 1 st td in row*/
        row.appendChild(data2);/* here we append 2 st td in row*/
        row.appendChild(data3);/* here we append 3 st td in row*/
        row.appendChild(data4);/* here we append 4 st td in row*/
        row.appendChild(data5);/* here we append 5 st td in row*/
        row.appendChild(data6);/* here we append 6 st td in row*/
    
        /*In below we check a condition on exp.value */
        if(exp.value>5){
            data7.innerText="Senior";
            info.role="Senior";
           
    
        }
        else if(exp.value >=2 || exp.value ==5){
            data7.innerText="Junior";
            info.role="Junior";
          
        }
        else if(exp.value<=1){
            data7.innerText="Fresher";
            info.role="Fresher";
    
        }
        information.push(info); // push object in array

        row.appendChild(data7);
    table.appendChild(row);/*Finally We append the row in table body*/
    }

  

}

function clearform(){ /* In call of this function all form input values will be blank */
document.getElementById("name").value="";
document.getElementById("employeeID").value="";
document.getElementById("department").value="";
document.getElementById("mbl").value="";
document.getElementById("email").value="";
document.getElementById("exp").value="";
}

function search(){ // for search details by name function
    let searchby=document.getElementById("select1").value;
    let str="";
    let search=document.getElementById("search").value;
    for(let i=0;i<information.length;i++){ // traves the information aray
       
        if(search==information[i][searchby]){ // if search input is equal to array index of searchby dropdown option value as a key of object
           str+=`Name :${information[i].name} , Employee id: ${information[i].employeeId} ,Department: ${information[i].department} , Number : ${information[i].number} , Email: ${information[i].email} , Experiance : ${information[i].experience} `;
           
        }
    }

    let showdiv=document.getElementById("showsearch"); // select div 
    showdiv.style.display="flex"; // set style dispplay none to display flex
   let p=document.getElementById("s"); // select p tag in that div
   p.innerText=str; // store values of str in p
}

document.getElementById("close").addEventListener("click" , close)
function close(){ // when this function call showsearch div will hide
    let showdiv=document.getElementById("showsearch");
    showdiv.style.display="none";
    let p=document.getElementById("s");
    p.innerText="";
   

}