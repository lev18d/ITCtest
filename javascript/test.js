/**
 * Created by itc_user on 7/9/2016.
 */


contactObj = ["contactOne","contactTwo"];
window.onload = function() {

    for (var x = 0; x < contactObj.length; x++) {
        var contactSpace = document.createElement("div");
        contactSpace.classList.add("contactStyle");
        var toAppendToDiv = document.getElementById("contactDiv");
        document.toAppendToDiv.appendChild(contactSpace);

        //create and append contact, more, hide divs, which each have event listeners associated to them
        var contactDiv = document.createElement("div");
        contactDiv.classList.add("contacted");
        contactDiv.addEventListener("click", sendEmail());


        var moreDiv = document.createElement("div");
        moreDiv.classList.add("moredor");
        moreDiv.addEventListener("click", giveMorText());

        var hideDiv = document.createElement("div");
        hideDiv.classList.add("hidden");
        hideDiv.classList.add("click", hideContent())
    }
};



var sendEmail = function(){

};

var giveMorText = function(){


};

//On second thought, i do not think i need this function
var hideContent = function(){

};


