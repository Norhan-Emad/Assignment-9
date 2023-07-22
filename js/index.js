// add operation

var websiteNameInput = document.getElementById("websiteName");
var websiteUrlInput = document.getElementById("websiteUrl") ;

websiteContainer =[];
//get item
if(localStorage.getItem("website") != null){
    websiteContainer = JSON.parse(localStorage.getItem("website"));
    displayWebsite(websiteContainer);
}
function addWebsite(){
    var website ={
        websiteName :websiteNameInput.value,
        websiteUrl : websiteUrlInput.value
    } 
        websiteContainer.push(website) ;
        localStorage.setItem("website" , JSON.stringify(websiteContainer)) ;
        displayWebsite();
        clearForm();
}
//display operation
function displayWebsite(){
    var cartoon=``;
    for(i=0 ; i<websiteContainer.length ; i++){
        cartoon +=`<tr>
        <th scope="row">${i+1}</th>
        <td>${websiteContainer[i].websiteName}</td>
        <td> <button class="btn btn-warning visit"><a href="${websiteContainer[i].websiteUrl}" class="text-white text-decoration-none">visit</a></button></td>
        <td>
            <button class="btn btn-danger" onclick='deleteWebsite(${i});'>delete</button>
        </td>
    </tr>`
    }
    document.getElementById("table").innerHTML= cartoon;
}

// clear operation

function clearForm(){
    websiteNameInput.value = "" ;
    websiteUrlInput.value ="";
}

// delete
function deleteWebsite(indexNum){
    websiteContainer.splice(indexNum , 1); 
    localStorage.setItem("website" , JSON.stringify(websiteContainer)) ;
    displayWebsite(websiteContainer); 
}

