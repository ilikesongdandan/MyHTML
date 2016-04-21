function nicknameFunction(){
	var x=document.getElementById('yesNick');
	if (x.checked){
		document.getElementById('nick').style.display='inline';
		document.getElementById('nickname').setAttribute('required',true);
	}
	else{
		document.getElementById('nickname').removeAttribute('required');
		document.getElementById('nick').style.display='none';
	}
}