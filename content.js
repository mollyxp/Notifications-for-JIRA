document.addEventListener("DOMNodeInserted", function () {
    
    try {
    
        var elements = document.querySelectorAll('.ak-renderer-document a');

        if (elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].setAttribute("target", "_blank");
            }
        }
    
    } catch(e) {}
    
}, false);
