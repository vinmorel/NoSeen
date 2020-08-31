// redirect when page accessed explicitly if ext enabled
chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        var observer = new MutationObserver(function () {
            if (window.document.body) {
                var iframe = window.document.querySelector(".humdl8nn");
                window.location.replace(iframe.src);
                console.log('redirecting...')
                observer.disconnect();
            }
        });
        observer.observe(window.document, { childList: true, subtree: true });
    }
});
