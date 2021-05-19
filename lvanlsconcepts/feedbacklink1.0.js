// Feedbacklink1.0.js
// Requires: jQuery, linking.js

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
      //Note from Kyle-This maybe needs to be made consistent ../some/topic.html
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

//Builds the feedback link and escapes it using the URLencode funtion.
//handlerURL is what the ni info code will need to be.
function BuildFeedbackURL() {	
   var FileName=ParsePath();
   var handlerURL = "http://digital.ni.com/applications/psc.nsf/docdetails?OpenForm&node=seminar_US"
    
   var link_string = handlerURL + "&productline="+fbProductDNA+"&" + "version="+URLencode(fbVersionName) + "&" + "file="+URLencode(FileName);
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

function appendFeedbackLink() {
	if (typeof(fbVersionName)=="string" && typeof(fbProductDNA)=="number") {
		var container = $('#styleDivScrolling, body').not('body:has(#styleDivScrolling)');
		container.append("<hr>");
		container.append("<p><img src='feedback.png' alt='Submit Feedback'>&nbsp;&nbsp;\
			<a href='javascript:WWW(\"" + BuildFeedbackURL() + "\")'>Submit feedback</a> on this topic.</p>");
		container.append("<p><img src='support.png' alt='Contact Technical Support'>&nbsp;&nbsp;\
			Visit <a href='javascript:WWW(\"http://www.ni.com/support/\")'>ni.com/support</a> for technical support</p>");
	}
}

$(document).ready(function() {
   appendFeedbackLink();
});