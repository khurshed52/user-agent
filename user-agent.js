if (navigator.userAgent.match(/iPad/i) != null) {
    createCssElement('css/ipad.css');
} else if (navigator.userAgent.match(/CriOS/i) != null) {
    createCssElement('css/iphone-chrome.css');
} else if (navigator.userAgent.match(/Android/i) != null) {
    createCssElement('css/andriod.css');
} else if (navigator.userAgent.match(/iPhone/i) != null) {
    createCssElement('css/iphone.css');
} else if (navigator.userAgent.match(/chrome/i) != null) {
    createCssElement('css/chrome.css');
} else if (navigator.userAgent.match(/safari/i) != null) {
    createCssElement('css/safari.css');
} else if(navigator.userAgent.match(/Firefox\/([0-9]+)\./i) !=null) {
        createCssElement('css/firefox.css')
}else {
    createCssElement('css/default.css');
}



function createCssElement(filename) {
    $('#divcss').append('<link rel="stylesheet" href="' + filename + '" type="text/css" />');
}

//for js elemnt
function createJsElement(filename) {
    var js = document.createElement('script');
    js.type = "text/javascript";
    js.src = filename;
    var h = document.getElementsByTagName('head');
    h.appendChild(js);
}

