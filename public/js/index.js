;Zepto(function($){

    var img = new Image(); 
    addSrc(img, "img-1.jpg");
    var type = getFileSize(img);

    $("img").attr("src", "img-1.jpg");
});

function getFileSize(image){ 
    var width = image.width;
    var height = image.height;
    var type = (width > height) ? "w" : "h";
    return type;
} 

function addSrc(image, filePath){
    if(!!image.dynsrc){
        image.dynsrc = filePath; 
    }else{
        image.src = filePath;
    }
}