const cameraModels = [
    "IMX678",
    "IMX585",
    "AR0234",
    "IMX900",
    "IMX415"
];
const resolution = "1920x1080"
let firmwareVersion = "v1.0";
let status = "PASS";
const seprator = "------------------------------------";
let iteration = 1;

for (const cam of cameraModels){
    const startTime = Date.now();
    console.log(seprator);
    console.log(`Test Case ID    : TC_00${iteration}`)
    console.log(`Camera          : ${cam}`);
    console.log(`Resolution      : ${resolution}`);
    console.log(`Firmware        : ${firmwareVersion}`);
    console.log(`Status          : ${status}`);
    console.log(`Start Time      : ${startTime}`);
    const endTime = Date.now()
    const executionTime = endTime - startTime ;
    console.log(`End Time        : ${endTime}`);
    console.log(`Duration Time   : ${executionTime}`);
    console.log(seprator);
    iteration++
}

