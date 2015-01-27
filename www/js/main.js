/*jslint sloppy:true, browser:true, devel:true, white:true, vars:true, eqeq:true, unparam:true */
/*global intel:false */

/*
 * This function runs once the page is loaded, but the JavaScript bridge library is not yet active.
 */
var init = function () {
    var face = document.getElementById("faceid");
    face.addEventListener("touchmove",Animate_StartandMove,false);
    
    var uppercontent = document.getElementById("uppercontentid");
    uppercontent.addEventListener("touchend",Animate_End,false);
};

window.addEventListener("load", init, false);  

//  Prevent Default Scrolling  
var preventDefaultScroll = function(event) 
{
    // Prevent scrolling on this element
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);

var onDeviceReady=function(){                             // called when Cordova is ready
   if( window.Cordova && navigator.splashscreen ) {     // Cordova API detected
        navigator.splashscreen.hide() ;                 // hide splash screen
    }
};
document.addEventListener("deviceready", onDeviceReady, false) ;



//Animates the face with a happy expression
function happy()
{
    document.getElementById("faceid").className ="face happy";
}

//Animates the face with a sad expression
function sad()
{
    document.getElementById("faceid").className ="face sad";
} 

//Animates the face with an angry expression
function mad()
{
    document.getElementById("faceid").className ="face mad";
}

//Animates the face with a shocked expression
function shocked()
{
    document.getElementById("faceid").className ="face shocked";
}

//Animates the face with a scared expression
function scared()
{
    document.getElementById("faceid").className ="face scared";
}

//Animates the face with an elated expression
function elated()
{
    document.getElementById("faceid").className ="face elated";
}

//Function to change expression on a touchmove event.
function Animate_StartandMove(event)
{
    var face = event.target;
    var classname = face.className; 
    if(classname == "face happy")
    {
        document.getElementById("mouthid").className="mouth happymouth";
        document.getElementById("firsteye").className="eyes happyeyes";
        document.getElementById("secondeye").className="eyes happyeyes";   
    }
    else if(classname == "face sad")
    {
        document.getElementById("mouthid").className="mouth sadmouth";
    }
    else if(classname == "face mad")
    {
        document.getElementById("mouthid").className="mouth madmouth";
        document.getElementById("firsteye").className="eyes madeyes";
        document.getElementById("secondeye").className="eyes madeyes";
    }
    else if(classname == "face shocked")
    {
        document.getElementById("mouthid").className="mouth shockedmouth";
        document.getElementById("firsteye").className="eyes shockedeyes";
        document.getElementById("secondeye").className="eyes shockedeyes";
    }
    else if(classname == "face scared")
    {
        document.getElementById("mouthid").className="mouth scaredmouth";
        document.getElementById("firsteye").className="eyes scaredeyes";
        document.getElementById("secondeye").className="eyes scaredeyes";
    }
    else if(classname == "face elated")
    {
        document.getElementById("mouthid").className="mouth elatedmouth";
        document.getElementById("firsteye").className="eyes elatedeyes";
        document.getElementById("secondeye").className="eyes elatedeyes";
    }
    else
    {
        //do nothing
    }
}

//Function to change facial expression to default on event touchend.
function Animate_End(event)
{
    document.getElementById("mouthid").className="mouth";
    document.getElementById("firsteye").className="eyes";
    document.getElementById("secondeye").className="eyes";
}
