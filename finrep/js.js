function addmessage(){
        var message=document.getElementById("message");       
if(
        message.value ==""){ alert("溫馨提醒~先輸入內容喔~");
}
else{
        var txtNode = document.createTextNode(message.value);
        var li = document.createElement("li");
        li.appendChild(txtNode);
        var list = document.getElementById("list");
        list.appendChild(li);
        document.getElementById("messageCount").innerText = list.children.length;
}
}
function toggleMenu(number){
        var menu=document.getElementById("m-"+number);
        menu.classList.toggle("hide");
}

setInterval(play,3000);
var index=0;

function play(){
var imgs = document.getElementById("travel").
        getElementsByTagName("img");
var bigImg = document.getElementById("big");

imgs[index].classList.remove("selected");
index++;

if(index == imgs.length) index=0;
imgs[index].classList.add("selected");
bigImg.setAttribute("src",imgs[index].getAttribute("src"));
}