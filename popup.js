
    "use strict"

    const toggleRecordingButton = document.getElementById("toggleRecording");
    const stopRecordingButton = document.getElementById("stopRecording");
    const cam = document.querySelector('.select-camera')
    const audio = document.querySelector('.select-audio')
    let camActive = false;
    let micActive = false;

    toggleRecordingButton.addEventListener("click", async () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    })
    cam.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.closest("div").classList.toggle("active");
        camActive = !camActive;
        console.log(camActive);
      });

      
audio.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.closest("div").classList.toggle("active");
    micActive = !micActive;
    console.log(micActive);
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
    