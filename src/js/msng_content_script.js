// remover function
function RemoveElement(element, divider) {
    try {
        var i;
        for (i = 0; i < element.length; i++) {
            var el = "." + element[i].className.replace(/ /g, ".");
            divider.querySelector(el).remove();
        }
    }
    catch(e) {
    }
};

// messenger handler
async function on_load(){
    while(!window.document.querySelector('._z4_')) {
        await new Promise(r => setTimeout(r, 10));
    }
    var msng_global_container = window.document.querySelector('._z4_');
    let observer = new MutationObserver(callback);

    function callback(mutations) {
        var side_bar_elements = window.document.querySelectorAll("._2j6._6zkg > img");
        RemoveElement(side_bar_elements, window.document);
        var elements = window.document.querySelectorAll("._4jzq");
        RemoveElement(elements, window.document);
        var elements = window.document.querySelectorAll('[aria-roledescription="Status icon"]');
        RemoveElement(elements, window.document);
    };

    observer.observe(msng_global_container, { subtree: true, attributes: true });
}

// call if enabled
chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        on_load();
    } 
});
