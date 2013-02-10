console.log("Hello World");

var MAX_HEIGHT = 500;
var MAX_WIDTH = 500;

//Load the image
var img_url = "/Users/cb1754/Documents/Projects/diaJS/images/test1.jpg";
var img = new Image();
img.src = img_url;

console.log(img);

//Get the canvas
var canvas = document.getElementById('the_doc');
var context = canvas.getContext('2d');
console.log(canvas);

//Draw image to canvas
img.onload = function(){
    
    var width = img.width;
    var height = img.height;

    if(width > height){
        if(width > MAX_WIDTH){
            height = Math.round(height *= maxHeight/width);
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
};
console.log('Image has been drawn to canvas');

//Resize the image



/*
 * TODO:
 * Load The image
 * 2. Put it into a canvas
 * 3. Rescale it 
 * 4. Show it in canvas.
 */


//1. Load the image from path
function loadImg(imgPath){

}

//2. Resize the image @300px/inch if portrait->1000px width if landscape->1000px height
function resizeImg(img)
{}

//3. Convert the resized image to greyscale
//4. Binarize greyscaled image
//5. Apply simple border noise removal from image.

