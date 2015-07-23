;Zepto(function($){
    max = 5;
    min = 1;

    $("img").attr("src", "img-1.jpg");

    var img = new Image(); 
    addSrc(img, "img-2.jpg");
    
    if(window.orientation == 0 || window.orientation == 180){
        $("img").css({width:"100%",height:"auto"});
    }else if(window.orientation == 90 || window.orientation == -90){
        $("img").css({width:"auto",height:document.documentElement.clientHeight});
    }
    
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false); 

    var time = setInterval(function(){
        $("img").attr("src", img.src);
        var x = Math.floor(Math.random() * (max - min + 1)) + min;
        addSrc(img, "img-" + x + ".jpg");
    }, 5000);

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
    switch(window.orientation) { 
        case 0: img.css({width:"100%",height:"auto"});
                break; 
        case 180: img.css({width:"100%",height:"auto"});
                break;
        case -90: img.css({width:"auto",height:document.documentElement.clientHeight});
                break; 
        case 90: img.css({width:"auto",height:document.documentElement.clientHeight});
                break;  
    } 
} 