console.log('start');

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is received");
            resolve({ userEmail: email });
        }, 3000)
    })
}

const userVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3', 'video4'])
        }, 2000)
    })
}

const videoDetail = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Title of the video');
        }, 2000)
    })
}

/* const user = loginUser('nitesh@gmail.com', 122134, (user)=>{
    console.log(user.userEmail);
    userVideos(user.userEmail, (videos)=>{
        console.log(videos);
        videoDetail(videos[0], (title)=>{
            console.log(title);
        })
    })

}) */

loginUser('nitesh@gmail.com', "123450")
    .then(user => userVideos(user.email))
    .then(video => videoDetail(video[0]))
    .then(detail => console.log(detail))
console.log('end');