//Check the LV Version
<!--
document.write("<scr"+"ipt src=\"ms-its:../glang/lvversion.js\"></"+"script>");
document.write("<scr"+"ipt src=\"variables.js\"></"+"script>");
// -->
//***************************************
// Need to think about how we send version info. lvversion doesn't make sense for all products.
// In addition, it might be worth it to just track CHM version, maybe with partnum.
// Or, should we hit a URL like somehandler.php?product=someDNAForNI-DAQ&version=7.0.0
//****************************************

//if lvversionname is something wonky, then the string is blank
if(typeof(lvversionname)!="string") {
   var lvversionname="";
}

//use the noFeedbackLink variable to disable the feedback link. If the variable is undefined, it initializes to false
if (typeof nofeedbacklink == "undefined") {
	var nofeedbacklink = false;
}

if (typeof noFeedbackLink == "undefined") {
	var noFeedbackLink = false;
}


//determines if the help file is localized
function NeedLink() {
   if (nofeedbacklink) {
	  return false;
   }
   if (noFeedbackLink) {
	  return false;
   }
   if(typeof(L_helpType) == "string") {
      L_helpType = L_helpType.toUpperCase();
      var index = L_helpType.indexOf("_");
      var type = L_helpType.substring(0, index);
      var lang = L_helpType.substring(index+1);
      if (lang=="ENG") {
         return true;
      }
   }
   return false;
}

//parses the entire path name down into the chm and filename or html file name (html filename for linux and mac)
function ParsePath()
{
   var EntireURL=location.pathname;
   var temp = new Array();
   //Why call toLowerCase()? Because the extension of the CHM could be .CHM/.Chm/etc.
   var DotCHMPos=EntireURL.toLowerCase().lastIndexOf(".chm");
   var helpPath;
   
   if(DotCHMPos>=0) {
      var CHMFileName;
      //IE6 escapes '\' as "%5C". So, unescaping first. We call escape again later anyway.
      var BeforeDotCHM = unescape(EntireURL.substr(0,DotCHMPos));
	  var DotCHMAndAfter = EntireURL.substr(DotCHMPos);
      
	  if(FBL_isCHM(EntireURL)) {
         CHMFileName = BeforeDotCHM.substr(BeforeDotCHM.lastIndexOf("\\")+1);
      }
      else {
         CHMFileName = BeforeDotCHM.substr(BeforeDotCHM.lastIndexOf("/")+1);
      }
      
      helpPath = CHMFileName+DotCHMAndAfter;      
   }
   else {
      helpPath=EntireURL;
   }
   return helpPath;
    
}

//determines if the file comes from a chm or an html file (mac and linux operate off of html files)
function FBL_isCHM(EntireURL) {
   return (EntireURL.indexOf("::/") >= 0);
}

//opens a new window
function WWW(url) 
	{
	var urlWindow;
	urlWindow = window.open(url, "New", "directories=yes,location=yes,menubar=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes");
	}
//Builds the feedback link and escapes it using the URLencode funtion.
//handlerURL is what the ni info code will need to be.
function BuildFeedbackURL() {	
   var FileName=ParsePath();
   var handlerURL = "http://digital.ni.com/applications/psc.nsf/docdetails?OpenForm&node=seminar_US"
   var ProductDNA="productline=2543";
   var VersionDNA=lvversionname;
   
   var link_string = handlerURL + "&" + ProductDNA + "&" + "version="+URLencode(VersionDNA) + "&" + "file="+URLencode(FileName);
   return link_string;
}

function URLencode(string) {
   //Need a homegrown simple replace() function because regular expressions don't work in IE 5.
   //Both IE and Firefox escape() take care of " and ', so we probably don't need them done explicitly
   return escape(string).
             replace(/\+/g, '%2B').
                replace(/\"/g,'%22').
                   replace(/\'/g, '%27').
				   	replace(/\\/g, '%5C').
                     replace(/\//g,'%2F');
}

var WWW_Doc_Feedback = BuildFeedbackURL();



//Prints the link on the page; if the link is in a localized help file and/or the boolean is false, the link does not print.
function appendFeedbackLink() {
	var techSupport ="http://www.ni.com/support/";
	var link_href = 'javascript:WWW("' + WWW_Doc_Feedback + '")';
	var link_href_TS = 'javascript:WWW("' + techSupport + '")';
	var pnode = document.createElement("p");
	var anode = document.createElement("a");
	var bottombar = document.createElement("hr");

	var imgnode = document.createElement("img");
	var imgnodeTS = document.createElement("img");
	var pnodeTS = document.createElement("p");
	var anodeTS = document.createElement("a");

	var nbsp1 = document.createTextNode("\u00a0\u00a0");
	var nbsp2 = document.createTextNode("\u00a0\u00a0");
	
	var txtnode1 = document.createTextNode("Submit feedback");
    var txtnode2 = document.createTextNode(" on this topic."); 

	var txtnodeTS1 = document.createTextNode("Visit ");
    var txtnodeTS2 = document.createTextNode("ni.com/support");
    var txtnodeTS3 = document.createTextNode(" for technical support."); 
		
		anode.setAttribute("href", link_href);
		anode.appendChild(txtnode1);
		imgnode.setAttribute("src","feedback.png");
        imgnode.setAttribute("alt","Submit Feedback");
        
        pnode.appendChild(imgnode);
		pnode.appendChild(nbsp1);
		pnode.appendChild(anode);
	 	pnode.appendChild(txtnode2);
	 
		anodeTS.setAttribute("href", link_href_TS);
        anodeTS.appendChild(txtnodeTS2);
        imgnodeTS.setAttribute("src","support.png");
        imgnodeTS.setAttribute("alt","Contact Technical Support");
	
        pnodeTS.appendChild(imgnodeTS);
		pnodeTS.appendChild(nbsp2);
        pnodeTS.appendChild(txtnodeTS1);
        pnodeTS.appendChild(anodeTS);
		pnodeTS.appendChild(txtnodeTS3);
	
	var theBody = document.getElementsByTagName("BODY")[0];
	
	//Check for DIVs. If found, add feedback link as child of styleDivScrolling
	var scrollDiv = document.getElementById("styleDivScrolling");
	if (scrollDiv != null) {
		scrollDiv.appendChild(bottombar);
		scrollDiv.appendChild(pnode);
		scrollDiv.appendChild(pnodeTS);
	}
	else {
		theBody.appendChild(bottombar);
		theBody.appendChild(pnode);
		theBody.appendChild(pnodeTS);
	}
}

if (typeof(registerForInitPage) == "function") {
	if (NeedLink()) {
		registerForInitPage(appendFeedbackLink);
	}
}
