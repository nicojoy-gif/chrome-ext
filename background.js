chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab ) => {
if (changeInfo.status === 'complete' && /^http/.test(tab.url)){
    chrome.scripting.executeScript({
        target: {tabId},
        files: ["./content.js"]
    }). then(() => {
        console.log("we have injected the content screen")
    }). catch(err => console.log(err, "err in background script 8"))
}
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
})