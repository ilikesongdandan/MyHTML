
	
	function disappear(){
		var x=document.getElementById('demo2');
		x.style.display="none";
	}
	function appear(){
		var x=document.getElementById('demo2');
		x.style.display="block";
	}

	function changeclassName1(){
		var x=document.getElementById('demo3');
		x.className='close';
	}

	function changeclassName2(){
		var x=document.getElementById('demo3');
		x.className='open';
	}
	function displayId(element){
		console.log(element.id)
	}

	function show(e){
		var x=e.alt;
		document.getElementById('message').innerHTML=x;
	}

