// activate extension on install or update
chrome.runtime.onInstalled.addListener(function(details){
    chrome.storage.local.set({'enabled':true}, function(){
    });
});