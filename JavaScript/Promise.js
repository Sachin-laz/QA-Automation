/*const promise = new Promise((resolve, reject)=>{

    let temperature = 85;

    if (temperature <= 70){
        resolve("Camera Healthy");
    }
    else{
        reject("Camera Overheating");
    }

});

promise
    .then((message) => console.log(message))
    .catch((message) => console.log(message))

//Example 2

const camerainfo = new Promise((resolve, reject) => {

    let camera = {
    model: "IMX900",
    temperature: 65,
    fps: 60
    };

    if (camera.temperature <= 70){
        resolve(camera)
    }
    else{
        reject("Camera Overheating")
    }
})

camerainfo
    .then((message) => console.log(message))
    .catch((error) => console.log(error))*/

//Example 3

console.log("Start");

const promise = new Promise((resolve, reject) => {
    console.log("Promise 1 executor");
    reject("Camera Overheating");
});

promise
    .then((message) => console.log("Promise 1 then:", message))
    .catch((error) => console.log("Promise 1 catch:", error));

const camerainfo = new Promise((resolve) => {
    console.log("Promise 2 executor");
    resolve({
        model: "IMX900",
        temperature: 65,
        fps: 60
    });
});

camerainfo
    .then((camera) => console.log("Promise 2 then:", camera));

console.log("End");