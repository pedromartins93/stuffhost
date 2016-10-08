window.onload = function() {
 
    var min = 6000;
    var max = 10000;
 
    var randU = Math.floor(Math.random()*(max-(min+1))+(min+1));
 
    setTimeout(function(){
        document.getElementById("continuelink").click();
    },randU);
 
};
