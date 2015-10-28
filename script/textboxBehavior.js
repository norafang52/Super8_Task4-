// JavaScript Document

var initVal;

function onFocus(txtObj, v) {
	if (txtObj.value == v) {
		initVal = v;
		txtObj.className = "";
		txtObj.value = "";
	}
}

function onBlur(txtObj) {
	if (txtObj.value == "") {
		txtObj.className = "initValStyle";
		txtObj.value = initVal;
	}
}