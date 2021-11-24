function chg_background(){
    var color=prompt("Background color?")
    var sec1 = document.getElementById("sec1").style.backgroundColor=color;
    
}
function chg_text(sec1){
    var color=prompt("Text color?")
    var sec1 = document.getElementById("sec1")
   sec1.style.color=color;
}
function show_img(btn){
    var img = document.getElementById("sec2")
        if(img.src!= "" && btn.innerHTML=="Small image"){
        img.style.width="250px"
        }   
        else  if(img.src!= "" && btn.innerHTML=="Big image"){
        img.style.width="550px"
        }     
        else 
    img.src="./img/pro.jpg" ;                                                                                                                                                                         img.src="./img/pro.jpg"

}                             

function hide_img(){
    var sec2 = document.getElementById("sec2")
    sec2.src="";
}

function on(){
    var sec3 = document.getElementById("sec3")
    sec3.src="./img/on-removebg-preview.png";                                                                                                                                                                   img.src="./img/pro.jpg"
} 
function off(){
    var sec3 = document.getElementById("sec3")
    sec3.src="./img/off-removebg-preview.png";                                                                                                                                                                   img.src="./img/pro.jpg"
} 

function chgcolor(){
    var col1=prompt("Enter 1st paragraph color")
    var col2=prompt("Enter 2nd paragraph color")
    var col3=prompt("Enter 3rd paragraph color")
    var col4=prompt("Enter 4th paragraph color")
    var par1= document.getElementById("p1")
    var par2= document.getElementById("p2")
    var par3= document.getElementById("p3")
    var par4= document.getElementById("p4")
   
par1.style.color=col1;
par2.style.color=col2;
par3.style.color=col3;
par4.style.color=col4;


}

function chngcolor(){
    var col1=prompt("Enter 1st paragraph color")
    var col2=prompt("Enter 2nd paragraph color")
    var par1= document.getElementById("pg1")
    var par2= document.getElementById("pg2")
    par1.style.color=col1;
    par2.style.color=col2;
}
