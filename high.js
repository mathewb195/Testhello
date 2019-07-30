window.addEventListener('mouseover',function(e) {
    changeBgColor(e, "#AABBFF")
});
window.addEventListener('mouseout',function(e) {
    restoreBgColor(e)
});
function changeBgColor(myEvent, newBgColor)
{
  if (!myEvent)
    myEvent=window.event;
  if (!myEvent)
    return;
  var firingElement=null;
  // Internet Explorer
  if (myEvent.srcElement)
    firingElement=myEvent.srcElement;  

  // Netscape and Firefox
  else if (myEvent.target)
    firingElement=myEvent.target;    

  if (firingElement)
  {
     firingElement.originalBgStyle=firingElement.style["backgroundColor"];
     firingElement.style["backgroundColor"]=newBgColor;
  }	 
}

function restoreBgColor(myEvent)
{
  if (!myEvent)
    myEvent=window.event;
  if (!myEvent)
	return;
  var firingElement=null;
  // Internet Explorer
  if (myEvent.srcElement)
    firingElement=myEvent.srcElement;  

  // Netscape and Firefox
  else if (myEvent.target)
    firingElement=myEvent.target;    


  if (firingElement)
  {
    firingElement.style["backgroundColor"]=firingElement.originalBgStyle;
  }	 
}
function applyMask(target) {
    if(document.getElementsByClassName('highlight-wrap').length > 0) {
        resizeMask(target);
    }else{
        createMask(target);
    }
}

function resizeMask(target) {
    var rect = target.getBoundingClientRect();
    var hObj = document.getElementsByClassName('highlight-wrap')[0];
    hObj.style.top=rect.top+"px";
    hObj.style.width=rect.width+"px";
    hObj.style.height=rect.height+"px";
    hObj.style.left=rect.left+"px";
   // hObj.style.WebkitTransition='top 0.2s';
}

function createMask(target) {
    var rect = target.getBoundingClientRect();
    var hObj = document.createElement("div");
    hObj.className = 'highlight-wrap';
    hObj.style.position='absolute';
    hObj.style.top=rect.top+"px";
    hObj.style.width=rect.width+"px";
    hObj.style.height=rect.height+"px";
    hObj.style.left=rect.left+"px";
    hObj.style.backgroundColor = '#205081';
    hObj.style.opacity='0.5';
    hObj.style.cursor='default';
    //hObj.style.WebkitTransition='top 0.2s';
    document.body.appendChild(hObj);
}

function clearMasks() {
    var hwrappersLength = document.getElementsByClassName("highlight-wrap").length;
    var hwrappers = document.getElementsByClassName("highlight-wrap");
    if(hwrappersLength > 0) {
        for(var i=0; i<hwrappersLength; i++) {
            console.log("Removing existing wrap");
            hwrappers[i].remove();
        }
    }
}
