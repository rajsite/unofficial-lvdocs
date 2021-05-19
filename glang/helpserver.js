var objectName;
var thisPage;

// we have to send you back to the top of the topic because of a HTML Help API bug when you call a topic with a hash in the URL
function replaceURL() {
	if (location.hash == "" )
		thisPage = location.href;
	else
		thisPage = location.pathname;
	
	location.replace(thisPage);
	}

function placeObject(objectName) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/DropControlOrFunction?drop=" + objectName + "&ShowFP=0");
	return false;
}

function placeObjectFP(objectName) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/DropControlOrFunction?drop=" + objectName + "&ShowFP=1");
return false;
}

function findObject(objectName) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/HighlightPaletteMenuItem?highlight=" + objectName + "&ShowFP=0");
	return false;
}

function findObjectFP(objectName) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/HighlightPaletteMenuItem?highlight=" + objectName + "&ShowFP=1");
	return false;
}

function searchMacUnixHelp() {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/SearchMacUnixHelp");
	return false;
}

function openVI(path) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/OpenVIFromHelp?VI=" + path );
	return false;
}

function openLLB(path) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/OpenVIFromHelp?LLB=" + path );
	return false;
}

function openProj(path) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/OpenVIFromHelp?PROJ=" + path );
	return false;
}

function findExamples(categoryID) {
		setTimeout(replaceURL, 500);
		location.replace("http://127.0.0.1:3580/National%20Instruments/LabVIEW/LabVIEW/20.0/ExampleFinderCommand?name=leaf&value=" + categoryID );
	return false;
}