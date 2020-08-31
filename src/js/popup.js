// initialize variables
var myButton = document.getElementById('toggle');
var Status = document.getElementById('status');

// update button dynamically
chrome.storage.local.get('enabled', data => {
    console.log(data.enabled)
    enabled = !!data.enabled;
    enabled ? Status.className = "green" : Status.className = "red";
    Status.textContent = enabled ? 'Active' : 'Paused';
});


// update variable value on button click
myButton.onclick = () => {
    enabled = !enabled;
    enabled ? Status.className = "green" : Status.className = "red";
    Status.textContent = enabled ? 'Active' : 'Paused';
    chrome.storage.local.set({'enabled':enabled}, function(){
    });

    // reload page if a tab is open on facebook
    chrome.tabs.query({},function(tabs){     
        tabs.forEach(function(tab){
            var fb_match = tab.url.match(/facebook.com/);
            var msg_match = tab.url.match(/messenger.com/);
            if (fb_match != null || msg_match != null){
                chrome.tabs.reload(tab.id);
            };
        });
     });
};