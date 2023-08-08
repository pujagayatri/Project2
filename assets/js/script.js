let a = document.getElementById('first');
let b = document.getElementById('second');
let c = document.getElementById('third');

a.onmouseover=function abc(){
    document.getElementById('first').style.cssText="background-color:#e5faf9;border:1px solid rgb(62,152,62);height:12vh;";
}
a.onmouseout=function abc(){
    document.getElementById('first').style.cssText="background-color:white;" ;
}

b.onmouseover=function abc(){
    document.getElementById('second').style.cssText="background-color:#e5faf9;border:1px solid rgb(62,152,62);height:21vh; ";
}
b.onmouseout=function abc(){
    document.getElementById('second').style.cssText="background-color:white;" ;
}

c.onmouseover=function abc(){
    document.getElementById('third').style.cssText="background-color:#e5faf9; height:12vh;border:1px solid rgb(62,152,62);";
}
c.onmouseout=function abc(){
    document.getElementById('third').style.cssText="background-color:white;" ;
}
document.getElementById("radio-btn").onmouseover = function (e) {
    e.target.checked = true;
}

