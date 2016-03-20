var events = new Object();

events.arkansas = {
	eventDate: "02/29/2016",
	eventName: "Conway Rally with Marco Rubio and Governor Asa Hutchison",
}

events.florida = {
	eventDate: "03/01/2016",
	eventName: "Florida Kick-Off Rally",
}

events.georgia = {
	eventDate: "02/29/2016",
	eventName: "Atlanta-Area Rally with Marco Rubio",
}


var search = function(date) {
	for (var eventDate in events) {
		if(date === events[key].eventDate) {
			alert(events[key]);
		}
	else {
		alert("no events happening");
	}
	}
};
