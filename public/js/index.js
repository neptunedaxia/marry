;Zepto(function($){

    // var img = new Image(); 
    // addSrc(img, "img-1.jpg");
    // $(img).bind("load",function(e){
    //     var type = getFileSize(this);
    //     if(type = "w"){

    //     }else
    // });
    
    if(window.orientation == 0 || window.orientation == 180){

    }else if(window.orientation == 90 || window.orientation == -90){

    }

    $("img").attr("src", "img-1.jpg");

    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false); 
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

function orientationChange(){ 
    var img  = $("img");
    console.log(img);
    switch(window.orientation) { 
        case 0: break; 
        case 180: break;
        case -90: break; 
        case 90: break;  
    } 
} 