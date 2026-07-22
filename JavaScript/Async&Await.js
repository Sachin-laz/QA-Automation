//Example 1

async function getCamera() {
    return Promise.resolve({
        model: "IMX900",
        temperature: 65,
        fps: 60
    });
}

const camera = await getCamera();

console.log(camera)


async function run() {
    try {
        const camera = await getCamera();
        console.log(camera);
    } catch (err) {
        console.log(err);
    }
}

run();