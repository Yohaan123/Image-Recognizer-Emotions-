Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' +  data_uri + '">';
    });
}
console.log('ml version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ILZaB1Xv3/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
    console.log("classifier  = " + classifier);
}