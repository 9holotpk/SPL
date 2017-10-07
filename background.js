// DEV. EXTENTION BY iTON // => BACKGROUND.JS
// NOTE: Created new pinned tab.

var spotifyURL = "https://open.spotify.com/";

chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.query({ url: spotifyURL + "*" }, function(tabs){
        if(tabs.length > 0){
        	var winID = tabs[0].windowId;
    		chrome.windows.update(winID, { focused: true });   		
            chrome.tabs.update(tabs[0].id, { active: true });
            tabID = tabs[0].id;
        }else{
            chrome.tabs.create({url: spotifyURL, pinned: true});
        	// console.log('log: Created new Window chat!');
        }
    });	
});