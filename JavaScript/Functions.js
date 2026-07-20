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
        return "OVER HEATING"
    }
    else{
        return "NORMAL"
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