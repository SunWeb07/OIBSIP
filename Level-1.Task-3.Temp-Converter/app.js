// k=c+273.15
// c=k-273.15

// f=(1.8)xc+32
// c=5/9(f-32)

// k=(5/9)(f+459.67)
// f=1.8(k-273.15) + 32

function getCFK(x){
    if(x==0){
    document.getElementById('c-div').style.display="block";
    document.getElementById('f-div').style.display="none";
    document.getElementById('k-div').style.display="none";
    }
    else if(x==1){
        document.getElementById('c-div').style.display="none";
        document.getElementById('f-div').style.display="block";
        document.getElementById('k-div').style.display="none";
    }
    else if(x==2){
        document.getElementById('c-div').style.display="none";
        document.getElementById('f-div').style.display="none";
        document.getElementById('k-div').style.display="block";
    }
    else{
        document.getElementById('c-div').style.display="none";
        document.getElementById('f-div').style.display="none";
        document.getElementById('k-div').style.display="none";
    }
}

function getTemp(e,x){
    e.preventDefault();
    if(x==1){
       
        var ddl = document.getElementById("temp1");
       var cel = document.getElementById('cel').value;
     
       if(ddl.selectedIndex ==0){
        document.getElementById('result').value = parseFloat((parseFloat(cel) * 1.8) + 32).toFixed(2);
       }
       else    if(ddl.selectedIndex ==1){
        document.getElementById('result').value= parseFloat(parseFloat(cel) + 273.15 ).toFixed(2);
       }
    }
    if(x==2){
       
        var ddl = document.getElementById("temp2");
       var fah = document.getElementById('fah').value;
     
       if(ddl.selectedIndex ==0){
        document.getElementById('result2').value = parseFloat((5/9)*(parseFloat(fah)-32)).toFixed(2);
       }
       else    if(ddl.selectedIndex ==1){
        document.getElementById('result2').value= parseFloat((5/9)*(parseFloat(fah)+459.67) ).toFixed(2);
       }
    }
    if(x==3){
       
        var ddl = document.getElementById("temp3");
       var kel = document.getElementById('kel').value;
     
       if(ddl.selectedIndex ==0){
        document.getElementById('result3').value = parseFloat(parseFloat(kel)-273.15).toFixed(2);
       }
       else    if(ddl.selectedIndex ==1){
        document.getElementById('result3').value= parseFloat((1.8)*(parseFloat(kel)-273.15)+32).toFixed(2);
       }
    }


}


// Get the container element
var btnContainer = document.getElementById("form");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("Sbtn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
function clear1() {
    document.getElementById("f1").reset();
}
function clear2() {
    document.getElementById("f2").reset();
}
function clear3() {
    document.getElementById("f3").reset();
}