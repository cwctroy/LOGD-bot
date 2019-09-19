function login() {	
	alert("test");
	const nameBox = document.getElementById('name');
	const pwdBox = document.getElementById('password');
	nameBox.value = "Autobot";
	pwdBox.value = "ReHysqJ6kHXqMAx";
	document.getElementsByClassName('button').item(0).click();	
}

//This section navigates to the home page and logs the user in
chrome.tabs.update({
	url: "http://lotgd.net/home.php?"	
});


setTimeout(login, 2000);