if(document.getElementById("btnType")){
	var button = document.getElementById("btnType");
	setInterval(function() {
			if (button.innerHTML == "我要购买") {
			    button.click();
			}//修改class来选票
		},
	200);
}
sleep(100);
//2
if(document.getElementsByTagName("button")){
	var tags =document.getElementsByTagName("button");
	for(var item in tags){
	    if(tags[item].innerHTML =="280"){
	    	//setInterval(function() {
			    tags[item].click();
			//},
			//100);
	  }
	}
	setInterval(function() {
		$("#buy").click();
	},
	100);
}

//3
setInterval(function() {
		$("#goorder").click();
	},
	100);
function sleep(numberMillis) {    
	var now = new Date();    
	var exitTime = now.getTime() + numberMillis;    
	while (true) {        
		now = new Date();
		if (now.getTime() > exitTime)      
			return;    
	}
}

/*
while(!document.getElementsByTagName("button")){
	setTimeout(function() {
		location.replace(location.href);
	}, 
	50);
}
setTimeout(function() {
	location.replace(location.href);
}, 
50);*/