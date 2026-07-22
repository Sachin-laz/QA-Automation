async function getCamera(){

return {
    fps:60
};

}

const cam = await getCamera();

console.log(cam.fps);

const cameras = [
    {
        model:"IMX900",
        fps:60
    },
    {
        model:"AR0234",
        fps:120
    },
    {
        model:"IMX585",
        fps:90
    }
];

let total = 0;
cameras.forEach((camera) => {
    total++
    if (camera.fps >= 90){
        console.log(camera.model);
    }
});

console.log(total)

for(const camera of cameras){
    console.log(camera.model)
}

const calculateAverageFPS = ((fps1, fps2)=> {
	const average = fps1 / fps2;
	return average;
});

console.log(calculateAverageFPS(2, 2))