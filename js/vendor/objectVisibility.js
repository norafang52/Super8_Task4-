// JavaScript Document

function opacity(id, opacStart, opacEnd, millisec) {
    //speed for each frame
    var speed = Math.round(millisec / 100);
    var timer = 0;

    //determine the direction for the blending, if start and end are the same nothing happens
    if(opacStart > opacEnd) {
        for(i = opacStart; i >= opacEnd; i--) {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    } else if(opacStart < opacEnd) {
        for(i = opacStart; i <= opacEnd; i++)
            {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    }
}

//change the opacity for different browsers
function changeOpac(opacity, id) {
    var object = document.getElementById(id).style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
    object.filter = "alpha(opacity=" + opacity + ")";
}

function fadeInObj(id, fadeTime) {
	showObj(id);
	opacity(id, 0, 100, fadeTime);
}

function fadeInWithTimeout(id, fadeTime, delay) {
	showObj(id);
	opacity(id, 0, 100, fadeTime);
	setTimeout("fadeOutObj('" + id + "'," + fadeTime + ")", delay);
}

function fadeOutObj(id, fadeTime) {
	opacity(id, 100, 0, fadeTime);
	setTimeout("hideObj('" + id + "')", fadeTime)
}

function showObj(id) {
	document.getElementById(id).style.display = "block";
}

function hideObj(id) {
	document.getElementById(id).style.display = "none";
}

function toggleObjFading(id, grayOutIsOn) {
	var obj = document.getElementById(id);
	var fadeTime = 300;
	var grayOutVis = false;
	
	if (obj.style.opacity == 0) {
		fadeInObj(id, fadeTime);
		grayOutVis = true;
	} else {
		fadeOutObj(id, fadeTime);
		grayOutVis = false;
	}
	
	if (grayOutIsOn) {
		grayOut(grayOutVis)
	}
}
/*
function toggleObjVisibility(id, grayOutIsOn) {
	var obj = document.getElementById(id);
	var grayOutVis = false;
	
	if (obj.style.visibility == "hidden") {
		obj.style.visibility = "visible";
		grayOutVis = true;
	} else {
		obj.style.visibility = "hidden";
		grayOutVis = false;
	}
	
	if (grayOutIsOn) {
		grayOut(grayOutVis)
	}
}*/