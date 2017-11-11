window.onload = main;

//accepts a country and requests data
function ajax_request(country){
    let requestObject = new XMLHttpRequest();
    let url = "/world.php?country="+country;
    
    requestObject.onreadystatechange=function(){
        if(this.readyState == XMLHttpRequest.DONE){
            if(this.status == 200){
                $("#result")[0].innerHTML = "<p>"+this.responseText+"<\p>";
            }else{
                $("#result")[0].innerHTML = "Inernal Error";
            }
        }
    }
    
    requestObject.open("GET", url, true);
    requestObject.send();
}

function main(){
    var lookup = document.getElementById("lookup");
    lookup.onclick = function(){
        ajax_request(document.getElementById("country").value.trim());
        
    }
}
