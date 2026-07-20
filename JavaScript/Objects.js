// Object creattion

const cameras = [
    {
        model:"IMX678",
    resolution:"1920x1080",
    fps:30,
    firmware:"v1.0",
    cameraStatus:true,
    serialNumber:"abc0001",
    manufacturer:"E-con",
    driverVersion:"v1.0",
    temperature:75,
    usbPort:3.0
},{
    model:"IMX415",
    resolution:"1920x1080",
    fps:30,
    firmware:"v1.0",
    cameraStatus:true,
    serialNumber:"abc0002",
    manufacturer:"E-con",
    driverVersion:"v1.0",
    temperature:50,
    usbPort:3.0
},{
    model:"IMX900",
    resolution:"1920x1080",
    fps:30,
    firmware:"v1.0",
    cameraStatus:true,
    serialNumber:"abc0003",
    manufacturer:"E-con",
    driverVersion:"v1.0",
    temperature:40,
    usbPort:3.0
}
]
const separator = "------------------------------------"

for (camera of cameras){

    let cameraStatus;
    let temperatureStatus; 

    if (camera.cameraStatus){
        cameraStatus = "Camera ready to use"; 
    }
    else{
        cameraStatus = "Camera is not connected";
    }

    if (camera.temperature > 70){
        temperatureStatus = "OverHeating";
    }
    else{
        temperatureStatus = "Normal";
    }

    console.log(separator)
    console.log(`Camera model        : ${camera.model}`);
    console.log(`resolution          : ${camera.resolution}`);
    console.log(`FPS                 : ${camera.fps}`);
    console.log(`Temprature          : ${camera.temperature}`);
    console.log(`Camera Status       : ${cameraStatus}`);
    console.log(`Temprature Status   : ${temperatureStatus}`);
    console.log(separator)

}