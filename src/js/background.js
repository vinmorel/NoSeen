// activate extension on install or update
chrome.runtime.onInstalled.addListener(function(details){
    chrome.storage.sync.set({'enabled':true}, function(){
    });
});