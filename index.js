const streamingVideo = document.querySelector("video.streamingVideo")
const getVideo = document.querySelector("video.getVideo")
const buttonStart = document.querySelector("button.start")
const buttonStop = document.querySelector("button.stop")

const constraints = {
  video: {
    facingMode: "environment",
    width: { min: 0, ideal: 1080, max: 2048 },
    height: { min: 0, ideal: 720, max: 1040 },
    frameRate: 30,
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    channelCount: 2,
    autoGainControl: true,
    sampleRate: 441000,
    sampleSize: 24,
  },
}

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  streamingVideo.srcObject = stream
  streamingVideo.play()

  const mediaRecorder = new MediaRecorder(stream)

  buttonStart.addEventListener("click", () => {
    mediaRecorder.start()
  })

  buttonStop.addEventListener("click", () => {
    mediaRecorder.stop()
  })

  mediaRecorder.ondataavailable = (video) => {
    console.log(video)
    const urlVideo = URL.createObjectURL(video.data)
    getVideo.src = urlVideo
  }
})

console.log(location)
