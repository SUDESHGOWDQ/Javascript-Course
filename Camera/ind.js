function stream(){
    let video = document.querySelector('video')
    let option = {video:true}
    window.navigator.mediaDevices.getUserMedia(option)
    .then((res)=>video.srcObject = res)
}

function streams(){
    let video = document.querySelector('video')
    let option = {video:true}
    window.navigator.mediaDevices.getDisplayMedia(option)
    .then((res)=>video.srcObject = res)
}