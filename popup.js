document.addEventListener("DOMContentLoaded", function () {
    let recorder;
    let videoStream;
    let videoBlob;

    const toggleRecordingButton = document.getElementById("toggleRecording");
    const closeIcon = document.getElementById("closeIcon");
    const stopRecordingButton = document.getElementById("stopRecording");
    const downloadVideoButton = document.getElementById("downloadVideo");
    const recordedVideo = document.getElementById("recordedVideo");
    const downloadLink = document.getElementById("downloadLink");
    const downloadURLText = document.getElementById("downloadURL");
    const urlLink = document.getElementById("urlLink");
    let downloadURL; // Variable to store the download URL

    closeIcon.addEventListener("click", () => {
        console.log("Close icon clicked");
        window.close();
    });

    toggleRecordingButton.addEventListener("click", async () => {
        toggleRecordingButton.disabled = true;
        stopRecordingButton.disabled = false;

        try {
            videoStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
            recorder = new MediaRecorder(videoStream);

            const chunks = [];

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

           // Inside the `recorder.onstop` event handler
recorder.onstop = () => {
    videoBlob = new Blob(chunks, { type: "video/webm" });
    recordedVideo.src = window.URL.createObjectURL(videoBlob); // Updated line
    downloadURL = window.URL.createObjectURL(videoBlob); // Updated line

    // Open the video in a new tab with the download.html page
    const downloadPageURL = `download.html?videoBlobURL=${encodeURIComponent(downloadURL)}`;
    const newTab = window.open(downloadPageURL, "_blank");

    // Check if the new tab was successfully opened
    if (newTab) {
        newTab.focus();
    } else {
        alert("The new tab was blocked by your browser. Please allow pop-ups for this site.");
    }

    // Rest of your code remains unchanged
    downloadURLText.classList.remove("hidden");
    urlLink.href = downloadURL;
    urlLink.textContent = downloadURL;
    downloadLink.href = downloadURL;
    downloadLink.classList.remove("hidden");
    downloadVideoButton.disabled = false;
};

            recorder.start();
        } catch (error) {
            console.error("Error accessing screen media:", error);
        }
    });

    stopRecordingButton.addEventListener("click", () => {
        toggleRecordingButton.disabled = false;
        stopRecordingButton.disabled = true;

        if (recorder.state === "recording") {
            recorder.stop();
        }
    });

    downloadVideoButton.addEventListener("click", () => {
        if (downloadURL) {
            const a = document.createElement("a");
            a.href = downloadURL;
            a.download = "recorded-video.webm";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
});