function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();

	m = checkTime(m);
	var am = true;

	// convert hours from military to regular
	if (h > 12) {
		am = false;
		h = h - 12;
	}
	document.getElementById('time').innerHTML = h+":"+m;
	var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
	if (i<10) {
		i = "0" + i  // add zero in front of numbers < 10
	}
	return i;
}

