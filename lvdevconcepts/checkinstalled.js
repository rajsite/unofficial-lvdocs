/*************************************************************
*
*     Registers files as clients for dynamic content. To register a file as a dynamic content client, 
*		add the name of your CHM file to the alldynamicclients array on a new line, followed by a comma.
*		However, the last file in the list should NOT be followed by a comma.
*				  
*************************************************************/
var alldynamicclients = new Array(
	"addonlicensing",
	"criodevicehelp",
	"cserieshelp",
	"DataFinderTK",
	"daqmxio",
	"daqmxtutorial",
	"dspdesignblocks",
	"dspdesignhelp",
	"embsharedvi",
	"emsimvs",
	"expresswb",
	"glang",
	"gmath",
	"gswoict",
	"frc",
	"frcdialog",
	"ftc",
	"iec61850",
	"IMAQVision",
	"inlinecnode",
	"lvaft",
	"lvaftconcepts",
	"lvasptconcepts",
	"lvbioconcepts",
	"lvbiohowto",
	"lvbiomed",
	"lvcdsimshrd",
	"lvcdtextmath",
	"lvcgenhelp",
	"lvconcepts",
	"lvctrldsgn",
	"lvdaqmx",
	"lvdatabase",
	"lvdettmerge",
	"lvdfdtconcepts",
	"lvdigfiltdestk",
	"lvdscconcepts",
	"lvdsc",
	"lvdschelp",
	"lvdscprop",
	"lvemsim",
	"lvemsimshared",
	"lvemsimvi",
	"lvept",
	"lveptconcepts",
	"lvfbhelp",
	"lvfpga",
	"lvfpgacompile",
	"lvfpgaconcepts",
	"lvfpgadialog",
	"lvfpgahelp",
	"lvfpgahost",
	"lvfpgahosthelp",
	"lvfpgamain",
	"lvhyperdev",
	"lvhyperref",
	"lvioscan",
	"lvipbuilder",
	"lvipbuilderref",
	"lvjitterphtk",
	"lvmasmt",
	"lvmasmtref",
	"lvmve",
	"lvnxt",
	"lvoffice",
	"lvpid",
	"lvpidmain",
	"lvrgthelp",
	"lvrobodialog",
	"lvrobogsm",
	"lvroboprop",
	"lvrobovi",
	"lvrtbestpractices",
	"lvrtdialog",
	"lvrtconcepts",
	"lvrthowto",
	"lvrthelp",
	"lvrtvihelp",
	"lvsc",
	"lvscconcepts",
	"lvschowto",
	"lvsim",
	"lvsimconcepts",
	"lvsimemi",
	"lvsimesi",
	"lvsimhowto",
	"lvsimtkconcepts",
	"lvsitconcepts",
	"lvsysid",
	"lvsysidconcepts",
	"lvtextmath",
	"lvtextmathmain",
	"lvtimefreqtk",
	"lvtimeseriestk",
	"lvtpcdialog",
	"lvtpcgsm",
	"lvtrace",
	"lvtracehelp",
	"lvutfconcepts",
	"lvutf",
	"lvwavelettk",
	"lvwsnhelp",
	"lvvianalyzer",
	"myriohelp",
	"myrioreference",
	"msureasstvi",
	"mxcncpts",
	"nimclvfb",
	"nisyscfg",	
	"oictref",
	"optsenmain",
	"optsenref",
	"p2pstreamhelp",
	"riohelprt",
	"robocrio",
	"robocriodialog",
	"roboriohelp",
	"roborioreference",
	"rthyperhelp",
	"rtlinux",
	"sndvibtk",
	"sndvibasst",
	"svamain",
	"svmain",
	"target2devicehelp",
	"veristand",
	"veristandmerge",
	"veristandsdapi",
	"vsnetapis",
	"vsexecapi",
	"vsmithelp",
	"vsmitref"
	);

//Registers files as clients for single-sourced dynamic content
//(typically, this content is sourced in XML and displayed in database-generated topics)
var ss_dynamic_clients = new Array ("lvrthelp","lvfpga","lvpdagsm","lvtpcgsm","lvipbuilderref");

for (i = 0; i < alldynamicclients.length; i++) {
	var client = alldynamicclients[i];
	var chm_js = "ms-its:" + client + "..//" + client + ".js";
	include_js(chm_js);
}

