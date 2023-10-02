document.addEventListener("DOMContentLoaded", function () {
   

    const toggleRecordingButton = document.getElementById("toggleRecording");
    const closeIcon = document.getElementById("closeIcon");
    const stopRecordingButton = document.getElementById("stopRecording");
    
    

    closeIcon.addEventListener("click", () => {
        console.log("Close icon clicked");
        window.close();
    });

    toggleRecordingButton.addEventListener("click", async () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response){
                if(!chrome.runtime.lastError){
                console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            }
            )
        })
      
    });

    stopRecordingButton.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 27')
                }
            })
        } )
    })
    

   
});
