function PreloadImages() {
    if (document.images) {
        var imgFiles = PreloadImages.arguments;
        if (document.preloadArray == null) document.preloadArray = new Array();
        var i = document.preloadArray.length;
        with(document) for (var j = 0; j < imgFiles.length; j++)
            if (imgFiles[j].charAt(0) != "#") {
                preloadArray[i] = new Image;
                preloadArray[i++].src = imgFiles[j];
            }
    }
}

function ImageRestore() {
    if (document.ImageData != null)
        for (var i = 0; i < (document.ImageData.length - 1); i += 2)
            document.ImageData[i].src = document.ImageData[i + 1];
}

function SwapImage() {
    var i, j = 0,
        objStr, obj, swapArray = new Array,
        oldArray = document.ImageData;
    for (i = 0; i < (SwapImage.arguments.length - 2); i += 3) {
        objStr = SwapImage.arguments[(navigator.appName == 'Netscape') ? i : i + 1];
        if ((objStr.indexOf('document.layers[') == 0 && document.layers == null) ||
            (objStr.indexOf('document.all[') == 0 && document.all == null))
            objStr = 'document' + objStr.substring(objStr.lastIndexOf('.'), objStr.length);
        obj = eval(objStr);
        if (obj != null) {
            swapArray[j++] = obj;
            swapArray[j++] = (oldArray == null || oldArray[j - 1] != obj) ? obj.src : oldArray[j];
            obj.src = SwapImage.arguments[i + 2];
        }
    }
    document.ImageData = swapArray;
}
