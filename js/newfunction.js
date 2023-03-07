function careers() {
    console.log("Clicked careers");
    document.getElementById("careers").style.display = "block";
}

function closeCareers() {
    console.log("Clicked to close careers");
    document.getElementById("careers").style.display = "none";
    document.getElementById("mobTech").style.display = "none";
    document.getElementById("designEng").style.display = "none";
    document.getElementById("softEng").style.display = "none";
}

function mobileTech() {
    console.log("Clicked for Mobile Technicians opening");
    document.getElementById("mobTech").style.display = "block";
    document.getElementById("softEng").style.display = "none";
    document.getElementById("designEng").style.display = "none";
}

function softEng() {
    console.log("Clicked for Software Engineer opening");
    document.getElementById("softEng").style.display = "block";
    document.getElementById("mobTech").style.display = "none";
    document.getElementById("designEng").style.display = "none";
}

function designEng() {
    console.log("Clicked for Design Engineer opening");
    document.getElementById("designEng").style.display = "block";
    document.getElementById("mobTech").style.display = "none";
    document.getElementById("softEng").style.display = "none";
}

function getDetails1() {
    console.log("Get interviewer details");
    document.getElementById("softEng").style.display = "none";
    document.getElementById("designEng").style.display = "none";
    document.getElementById("enterDetails1").style.display = "block";
    document.getElementById("apply1").style.display = "none";
}

function getDetails2() {
    console.log("Get interviewer details");
    document.getElementById("mobTech").style.display = "none";
    document.getElementById("designEng").style.display = "none";
    document.getElementById("enterDetails2").style.display = "block";
    document.getElementById("apply2").style.display = "none";
}

function getDetails3() {
    console.log("Get interviewer details");
    document.getElementById("mobTech").style.display = "none";
    document.getElementById("softEng").style.display = "none";
    document.getElementById("enterDetails3").style.display = "block";
    document.getElementById("apply3").style.display = "none";
}