//Example 1

const separator = "=========================="

function printWelcomemessage(){
    console.log(separator);
    console.log("Function's - Day 1");
    console.log(separator);
}

printWelcomemessage();

// Example 2

function printCameraName(cameraName){
    console.log(separator);
    console.log(`Camera Name : ${cameraName}`);
    console.log(`${separator}\n`);
}

printCameraName("IMX678");
printCameraName("IMX900");
printCameraName("AR0234");

//Example 3

function printCameraReport(cameraName, resolution, fps){
    console.log(separator);
    console.log(`Camera Name : ${cameraName}`);
    console.log(`Resolution  : ${resolution}`);
    console.log(`FPS         : ${fps}`);
    console.log(separator);
    console.log();
}

printCameraReport("IMX678", "1920x1080", 30);
printCameraReport("IMX900", "3840x2160", 60);
printCameraReport("AR0234", "1280x720", 120);

//Example 4

function checkTemperature(tempertaure){
    if (tempertaure > 70){
        return true
    }
    else{
        return false
    }
}

const camera1 = checkTemperature(65);
const camera2 = checkTemperature(80);

console.log(camera1);
console.log(camera2);

//Mini Project

const camera = {
    model: "IMX678",
    temperature: 82,
    resolution: "1920x1080",
    fps: 30
}

function generateCameraReport(camera){
    return {
        "Camera Model" : camera.model,
        "Resolution " : camera.resolution,
        "FPS"          :camera.fps,
        "Status"      : checkTemperature(camera.temperature)
    }
}

Report = generateCameraReport(camera)

console.log(Report)

const cameras = [
    {
        model: "IMX678",
        temperature: 82,
        resolution: "1920x1080",
        fps: 30
    },
    {
        model: "IMX900",
        temperature: 82,
        resolution: "1920x1080",
        fps: 30
    },
    {
        model: "AR0234",
        temperature: 82,
        resolution: "1920x1080",
        fps: 30
    }
]

const totalCam = cameras.length;
let healthyCam = 0;
let unhealthyCam = 0; 

for (const camera of cameras){
    const report = generateCameraReport(camera);
    if (checkTemperature(camera.temperature)){
        unhealthyCam++;
    }
    else{
        healthyCam++;
    };
}
console.log(`Total Camera       : ${totalCam}`);
console.log(`Healthy Camera     : ${healthyCam}`);
console.log(`Unhealthy Camera   : ${unhealthyCam}`)

//For Each Function 

cameras.forEach(function(camera){
    console.log(`Camera : ${camera.model}`)
})

const cameraModels = cameras.map(function(camera){
    return camera.model
});

console.log(cameraModels);

const statusOfCam = cameras.map(function(camera){
    return checkTemperature(camera.temperature)
})

console.log(statusOfCam);


