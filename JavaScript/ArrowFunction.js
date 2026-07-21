//Arrow function 
// Example 1

const camera = {
    model:"See3CAM_CU31",
    temperature:80
}

const printCamera = (camera) => {
    console.log(camera.model);
}

printCamera(camera);

//Example 2

const checkTemperature = (camera) => {
    return camera.temperature > 70;
}

console.log(checkTemperature(camera));

//Example 3

const add = (a,b) => {
    return a+b;
}

console.log(add(2,3));

//Arrow Function with for each 

const cameras = [
    { model: "IMX678", temperature: 82 },
    { model: "IMX900", temperature: 65 },
    { model: "AR0234", temperature: 74 }
];

const cameraReport = cameras.forEach(element => {
    console.log(`Camera : ${element.model}`)    
})

// Arrow Function with map

const cameraName = cameras.map(element =>{
    return element.model
})

console.log(cameraName);

// Arrow Function with map example 2

const temperatureReport = cameras.map(element => {
    if (checkTemperature(element)){
        return "OVERHEATING"
    }
    else{
        return "NORMAL"
    }
})

console.log(temperatureReport);

//Arrow Function with map example 3

const apiResponse = [
    {
        system_name: "Camera-1",
        status: "Online"
    },
    {
        system_name: "Camera-2",
        status: "Offline"
    },
    {
        system_name: "Camera-3",
        status: "Online"
    }
];

const apiResponseData = apiResponse.map(element => {
    return element.system_name;
})

function temperatureCheck(temperature){
    if (temperature > 70){
        return "OVERHEATING"
    }
    else{
        return "NORMAL"
    }
}

console.log(apiResponseData);

const cameraReportWithTempratureStatus = cameras.map(element => {
    return `${element.model} - ${temperatureCheck(element.temperature)}`
})

console.log(cameraReportWithTempratureStatus)

//Example 4

const temperatures = [82, 65, 74, 69, 91];

const temperaturesStatus = temperatures.map(element => {
    return element > 70
})

console.log(temperaturesStatus)


//Example 5


const testCases = [
    { id: 1, status: "PASS" },
    { id: 2, status: "FAIL" },
    { id: 3, status: "PASS" },
    { id: 4, status: "FAIL" }
];

const testCasesReport = testCases.map(element => {
    return `Test-${element.id} : ${element.status}`
})

console.log(testCasesReport)

//Final test


const camerasNew = [
    {
        model: "IMX678",
        temperature: 82,
        fps: 30
    },
    {
        model: "IMX900",
        temperature: 65,
        fps: 60
    },
    {
        model: "AR0234",
        temperature: 74,
        fps: 120
    }
];

const camerasNewReport = camerasNew.map(element => {
    return `{model:${element.model}, status:${(temperatureCheck(element.temperature))}, fps:${element.fps}}`
    
})

console.log(camerasNewReport)