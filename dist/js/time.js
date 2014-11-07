function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var am = true;

	// convert hours from military to regular
	if (h > 12) {
		am = false;
		h = h - 12;
	}
	document.getElementById('time').innerHTML = h+":"+m+":"+s+ (am ? " AM" : " PM");
	var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
	if (i<10) {
		i = "0" + i  // add zero in front of numbers < 10
	}
	return i;
}

