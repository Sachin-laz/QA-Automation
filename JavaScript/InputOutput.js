let CameraName = {
    model:"",
    temperature:0,
    FPS:0,
};

const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("CameraName : ",(Camname) => {
    CameraName.model = Camname
    rl.question("Temprature : ",(temperature) => {
        CameraName.temperature = Number(temperature)
        rl.question("FPS : ",(fps) => {
            CameraName.FPS = Number(fps)
            rl.close();
            console.log(CameraName)
        });
    });
});