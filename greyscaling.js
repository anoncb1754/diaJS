console.log("Hello World");

document.getElementById('files').addEventListener('change', handleFileSelect, false);

var MAX_HEIGHT = 500;
var MAX_WIDTH = 500;

//Load the image
var img_url = "http://www.ticket2england.com/diaJS/images/Win8TestTeaser.jpg";



var img = new Image();
img.src = img_url;

console.log(img);

//Get the canvas
var canvas = document.getElementById('the_doc');
var context = canvas.getContext('2d');
console.log(canvas);
console.log()
//Draw image to canvas
img.onload = function(){
    
    resized = resizeImage(img);
    console.log("Resized!!!");
    console.log(resized);
};



function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    
    console.log(files);
    for(var i = 0; i<files.length; i++)
    {
        console.log(files[i]);
    }

    var reader = new FileReader();

    reader.onloade = (function(theFile){
        return function(e){
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('list').insertBefore(span, null);
        };
    })(f);
    reader.readAsDataURL(f);
}

  //document.getElementById('files').addEventListener('change', handleFileSelect, false);

//Throws a strange exception!!!
function greyScaleImage()
{
    //Make Greyscale
    var imageData = context.getImageData(0, 0, resized.width, resized.height);

    console.log(imageData);
    var data = imageData.data;
    console.log(imageData);
    
    for(var i = 0; i < data.length; i += 4){
        var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        // red
        data[i] = brightness;

        // green
        data[i + 1] = brightness;
        // blue
        data[i + 2] = brightness;
    }

    context.putImageData(imageData, 0, 0);
    resizeImage(img);
}


function resizeImage(img)
{
    var width = img.width;
    var height = img.height;

    if(width > height){
        if(width > MAX_WIDTH){
            height = Math.round(height *= MAX_HEIGHT/width);
            width = MAX_WIDTH;
        }
    }
    else{
        if(height > MAX_HEIGHT){
            width = Math.round(width *= MAX_HEIGHT/height);
            height = MAX_HEIGHT;
        }
    }

    canvas.width = width;
    canvas.height = height;
    context.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg", 0.7);
}


