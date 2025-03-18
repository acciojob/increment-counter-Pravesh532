//your JS code here. If required.
let counter = documnet.getElementById("counter");
let button = document.getElementById("mybutton");
let countValue = 0;
button.addEventListener('click',function(){
	alert("un-increment- value" + countValue);
	countValue++;
	counter.textContent = countValue;
});