// JavaScript Document

var objErrorScope, objErrorMsg;

function createErrorObj(errorScopeId, errorMsgId) {
	objErrorScope = document.getElementById(errorScopeId);
	objErrorMsg = document.getElementById(errorMsgId);
}

function showError() {
	objErrorScope.className = "errorScope";
	objErrorMsg.style.display = "inline";
}

function hideError() {
	objErrorScope.className = "";
	objErrorMsg.style.display = "none";
}

function validateEmail(obj, errorScopeId, errorMsgId) {
		alert("hi");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var email = obj.value;
	
	createErrorObj(errorScopeId, errorMsgId)
	if(reg.test(email) == false) {
		showError()
	} else {
		hideError()
	}
}

function validatePassword(pass1Id, pass2Id, errorScopeId, errorMsgId) {
	var objPass1 = document.getElementById(pass1Id);
	var objPass2 = document.getElementById(pass2Id);
	
	createErrorObj(errorScopeId, errorMsgId)
	if(objPass1.value != objPass2.value) {
		showError()
	} else {
		hideError()
	}
}

function numberOnly(evt) {
	var evt = (evt) ? evt : window.event;
    var key = (evt.which) ? evt.which : evt.keyCode;
	var keychar = String.fromCharCode(key);
	
	// control keys such as backspace, left, right, ...
	if ( (key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key >= 37 && key <= 40) ) {
		return true;
	// number 0 to 9
	} else if ( ("0123456789").indexOf(keychar) > -1 ) {
		return true;
	} else {
		return false;
	}
}

var regContainerObj, regCompMsgObj;

function fakeAjaxReg(regContainer, regCompMsg) {
	regContainerObj = document.getElementById(regContainer);
	regCompMsgObj = document.getElementById(regCompMsg);
	
	regContainerObj.innerHTML = "<div style='text-align:center; padding-top:200px; color:#006699'><img src='img/ajax-loader.gif'> Registering</div>";
	setTimeout("showRegCompMsg()", 1000);
}

function showRegCompMsg() {
	regContainerObj.style.display = 'none'; regCompMsgObj.style.display = 'block'
}