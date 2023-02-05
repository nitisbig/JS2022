console.log('start');

const loginUser = (email, password, callback)=>{
    setTimeout(()=>{
        console.log("Data is received");
        callback({userEmail: email});
    },3000)
}

const userVideos = (email, callback)=>{
    setTimeout(()=>{
        callback(['video1','video2','video3','video4'])
    },2000)
}

const videoDetail = (video, callback)=>{
    setTimeout(()=>{
        callback('Title of the video');
    },2000)
}

const user = loginUser('nitesh@gmail.com', 122134, (user)=>{
    console.log(user.userEmail);
    userVideos(user.userEmail, (videos)=>{
        console.log(videos);
        videoDetail(videos[0], (title)=>{
            console.log(title);
        })
    })

})
console.log('end');