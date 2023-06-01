function validation()
{

	if(document.myForm.Fullname.value=="")
	{
		alert("please enter your fullname!!");
		document.myForm.Fullname.focus();
		return false;

	}
	if(document.myForm.Email.value==""){
		alert("please enter your e-mail!!");
		document.myForm.Email.focus();
		return false;
		
	}
	if(document.myForm.Password.value==""){
		alert("please enter your password");
		document.myForm.Password.focus();
		return false;
	}
	if(document.myForm.Address.value==""){
		alert("please enter your Address");
		document.myForm.Address.focus();
		return false;
	}
	alert('log in successful')
	return true;
}