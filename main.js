Webcam.set({
    width:350,
    hight:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id=captured_image src="+data_uri+">"
    });
}
console.log(ml5.version)
cllassifier=ml5.imageClassifier("link/model.json",modelLoaded)
function modelLoaded(){
    console.log("Model loaded")
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first perdiction is"+perdiction_1;
    speak_data_2 = "And the second perdiction is"+perdiction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis)
}