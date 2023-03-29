//https://teachablemachine.withgoogle.com/models/[...]
Webcam.set({
    width:350,
    height:300,
    image_fromat:'png',
    png_quaility:90
    
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot()
    {
        Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    
        });
    }
    console.log('mlfiveversion',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelloaded);
    