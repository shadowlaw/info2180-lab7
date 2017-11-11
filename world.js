window.onload = main;

//accepts a country and requests data
function ajax_request(request){
    let requestObject = new XMLHttpRequest();
    let url = "/world.php?"+request;
    
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
    $("#country").after("<label for='all'>Select all countries</label><input type='checkbox' name='all' id='all'/>");
    var lookup = document.getElementById("lookup");
    
    lookup.onclick = function(){
        if($("#all")[0].checked){
            ajax_request("all=true");
        }else{
            ajax_request("country="+document.getElementById("country").value.trim());
        }
        
    }
}
