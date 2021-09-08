/* VAT CALCS */

function roundVal(val){
	var dec = 2;
	var result = Math.round(val*Math.pow(10,dec))/Math.pow(10,dec);
	result=result.toFixed(2);
	return result;
}


function addVAT(){

if(document.calcform.input.value.length<=1){
	alert("Please enter a figure in the yellow box");
}else{

	var vatRate=eval(document.calcform.vatamount.value.substr(0,document.calcform.vatamount.value.length-1));

	var input=eval(document.calcform.input.value.substr(1));

	var vat=input*(vatRate/100);

	var gross=input + vat;

	document.calcform.vatAt.value=vatRate+"%)";
	document.calcform.netAmount.value="£"+roundVal(input);
	document.calcform.VAT.value="£"+roundVal(vat);
	document.calcform.gross.value="£"+roundVal(gross);
	document.calcform.basedOn.value="£"+roundVal(input);

	hidecalcdiv();
	showresultsdiv();
}
}

function remVAT(){

if(document.calcform.input.value.length<=1){
	alert("Please enter a figure in the yellow box");
}else{

	var vatRate=eval(document.calcform.vatamount.value.substr(0,document.calcform.vatamount.value.length-1));

	var input=eval(document.calcform.input.value.substr(1));

	var v=vatRate+100;

	var net=100/(100+vatRate)*input;

	var vat=input-net;


	document.calcform.netAmount.value="£"+roundVal(net);
	document.calcform.VAT.value="£"+roundVal(vat);
	document.calcform.gross.value="£"+roundVal(input);
	document.calcform.basedOn.value="£"+roundVal(input);

	hidecalcdiv();
	showresultsdiv();
}
}

/* BUTTON PRESSES */

function enterNumber(number){
	if(number=="."){
		if(document.calcform.input.value.indexOf(".") != -1){
	
		}else{
			document.calcform.input.value=document.calcform.input.value+number;
		}
	}else{
		document.calcform.input.value=document.calcform.input.value+number;
	}
}

function clearCalc(){
	document.calcform.input.value="£";
}

function startAgain(){
	clearCalc();
	hideresultsdiv();
	showcalcdiv();
}

function getkey(e){
	if (window.event)
  	return window.event.keyCode;
	else if (e)
  	return e.which;
	else
  	return null;
}


function goodchars(e, goods){
	var key, keychar;
	key = getkey(e);
	if (key == null) return true;

	// get character
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	goods = goods.toLowerCase();

	// check for one decimal point
	if(key==46){
		if(document.calcform.input.value.indexOf(".") != -1){
			return false;
		}else{
			return true;
		}
	}

	// check goodkeys
	if (goods.indexOf(keychar) != -1)
		return true;

  if((key==8)&&(document.calcform.input.value.length<=1))
		return false;

	// control keys
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
  	return true;

	// else return false
		return false;
}


/* SHOW/HIDES */

function hidecalcdiv() {
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('calcContent').style.visibility = 'hidden';
		document.getElementById('calcContent').style.display = 'none';
	}else{
		if (document.layers) { // Netscape 4
			document.calcContent.visibility = 'hidden';
			document.calcContent.display = 'none';
		}else{ // IE 4
			document.all.calcContent.style.visibility = 'hidden';
			document.all.calcContent.style.display = 'none';
		}
	}
}

function showcalcdiv() {
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('calcContent').style.visibility = 'visible';
		document.getElementById('calcContent').style.display = 'block';
	}else{
		if (document.layers) { // Netscape 4
			document.calcContent.visibility = 'visible';
			document.calcContent.display = 'block';
		}else{ // IE 4
			document.all.calcContent.style.visibility = 'visible';
			document.all.calcContent.style.display = 'block';
		}
	}
} 

function hideresultsdiv() {
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('resultsContent').style.visibility = 'hidden';
		document.getElementById('resultsContent').style.display = 'none';
	}else{
		if (document.layers) { // Netscape 4
			document.resultsContent.visibility = 'hidden';
			document.resultsContent.display = 'none';
		}else{ // IE 4
			document.all.resultsContent.style.visibility = 'hidden';
			document.all.resultsContent.style.display = 'none';
		}
	}
}

function showresultsdiv() {
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('resultsContent').style.visibility = 'visible';
		document.getElementById('resultsContent').style.display = 'block';
	}else{
		if (document.layers) { // Netscape 4
			document.resultsContent.visibility = 'visible';
			document.resultsContent.display = 'block';
		}else{ // IE 4
			document.all.resultsContent.style.visibility = 'visible';
			document.all.resultsContent.style.display = 'block';
		}
	}
} 

/* IMAGE SWAP FOR CALC */

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}