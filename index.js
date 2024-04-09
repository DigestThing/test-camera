const video = document.querySelector("video")

const constraints = {
  video : {
    facingMode : {exact : "environment"},
    width : {min : 480,ideal : 1080,max : 2048},
    height :  {min : 360,ideal : 720,max : 1040},
    frameRate : 30
  },
  audio : {
    echoCancellation: true,
    noiseSuppression: true,
    channelCount: 2,
    autoGainControl: true,
    sampleRate: 441000,
    sampleSize: 441000,
  }
}

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream
  video.play()
})
