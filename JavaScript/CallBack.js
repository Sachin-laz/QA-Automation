// Call back Example 1

function name(name){
    console.log(`Hi ${name}`)
};

function execute(callback){
    callback("Sachin")
}

execute(name)
//Here name is given as an argument to execute funtion So first execute funtion will run where callback("Sachin") is there it will become like 
//name("Sachin") and execute name function and will return Hi Sachin


//Call back in an Arrow Function Example 1

const executeNew = (callback) => {
    callback("Ravi");
}

executeNew((name) => {
    console.log(`Hi ${name}`);
});

//Example 2

const processCamera = (camera, callback) => {
    console.log(camera)
    callback(camera);
}

processCamera("See3CAM_CU31", (model) => {
    console.log(`Camera Model : ${model}`);
});

//Example 3

const startCameraTest = (callback) =>{
    console.log("Camera Connected")
    callback();
}

startCameraTest(()=>{
    console.log("Camera Straming Started")
})

//Example 4

const loadCamera = (cameramodel,callback)=> {
    callback(cameramodel)
}

loadCamera("IMX900", (model => {
    console.log(`Loaded ${model}`)
}))

//Example 5

const initializeCamera = (model, temperature, callback) => {
    callback(model, temperature);
}

initializeCamera("See3CAM_CU22", 88, (model, temperature) => {
    console.log(`Camera      : ${model}`)
    console.log(`Temperature : ${temperature}`)
    if (temperature > 70){
        console.log("Status      : OVERHEATING");
    }
    else{
        console.log("Status      : NORMAL")
    }
})

//Example 6

const requestCameraModel = (questions, callback) => {
    const readline = require("readline")

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    rl.question(questions, (name) => {
        callback(`${name}`);
        rl.close();
        });
    
}

requestCameraModel("Enter the Camera Name : ", (model => {
    console.log(`Model : ${model}`)
}))

//Example 7

const CameraDetails = (callback) => {
    let camera = {
        model:"",
        temperature:0,
        fps:0
    }

    const readline = require("readline")

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    rl.question("Enter the Camera Name : ", (name) => {
        camera.model = name 
        rl.question("Enter the temperature : ", (name) => {
            camera.temperature = name
            rl.question("Enter the FPS : ", (name) => {
                camera.fps = name
                callback(camera);
            rl.close();
        });
        });
        });
}

CameraDetails(camera => {
    console.log(camera)
})

//Example 8

const validateTemperature = (temperature, callback) => {
    if (temperature > 70){
        callback("OVERHEATING")
    }
    else{
        callback("NORMAL")
    }
}

validateTemperature(80, temperature => {
    console.log(temperature)
})
