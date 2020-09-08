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

// facebook handler
async function on_load(){
    while(!window.document.querySelector('[aria-label="Messenger"]')) {
        await new Promise(r => setTimeout(r, 10));
    }
    var fb_global_container = window.document.querySelector('.rq0escxv');

    let observer = new MutationObserver(callback);

    function callback(mutations) {
        var chat_box_seen = window.document.querySelectorAll('.iyic8zgw');
        RemoveElement(chat_box_seen, window.document);
        var popup_chat_list_seen = window.document.querySelectorAll('[role="cell"]:not(circle)');
        RemoveElement(popup_chat_list_seen, window.document);
        var group_chat_elements = window.document.querySelectorAll(".i4qgphn6");
        RemoveElement(group_chat_elements, window.document);    

        // hide last online if checked in options
        chrome.storage.sync.get('OnlineCheck', data2 => {
            if (data2.OnlineCheck) {
                var last_online_time = window.document.querySelectorAll(".j1meafb1")
                RemoveElement(last_online_time, window.document)
            }
        });
    };

    observer.observe(fb_global_container, { subtree: true, attributes: true });

    // redirect to messenger on link click (and not the iframe)
    var messenger_button = window.document.querySelector('[aria-label="Messenger"]')

    function redirect_msng() {
        window.location.replace("https://www.facebook.com/messages/t");
    };

    function fetch_link_el() {
        var messenger_link = window.document.querySelector(".pzdrnzhu");
        messenger_link.addEventListener('click', redirect_msng);
    };

    messenger_button.addEventListener('click', function () {
        let observer2 = new MutationObserver(fetch_link_el);
        observer2.observe(fb_global_container, { subtree: true, attributes: true });
    });
}

// call if enabled
chrome.storage.sync.get('enabled', data => {
    if (data.enabled) {
        on_load();
    } 
});
