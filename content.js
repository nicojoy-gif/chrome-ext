console.log("Hi, I have been injected whoopie!!!");

var recorder = null;
const chunkRecordings = [];

function onAccessApproved(stream) {
    recorder = new MediaRecorder(stream);

    recorder.start();

    recorder.onstop = function () {
        stream.getTracks().forEach(function (track) {
            if (track.readyState === 'live') {
                track.stop();
            }
        });
    };

    recorder.ondataavailable = function (event) {
        let recordedBlob = event.data;
        let url = URL.createObjectURL(recordedBlob);
        const formData = new FormData();
        const recordingId = new Date().getMilliseconds() + "ADsaKibd0284ad";
    
        formData.append("blob", recordedBlob);
        formData.append("recordingId", recordingId);
    
       
    
        let a = document.createElement('a');
        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm";

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
        window.open("https://chrome-one.vercel.app/download", "_blank");
    };
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === "request_recording") {
      console.log("Requesting recording...");
      sendResponse("processed: " + message.action);
  
      let monitor;
  
      try {
        monitor = await navigator.mediaDevices.getDisplayMedia({
          audio: true,
          video: true,
        });
        onAccessApproved(monitor);
      } catch (err) {
        console.log(err);
      }
    }
  });

   
