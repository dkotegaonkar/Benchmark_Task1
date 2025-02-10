let storage = [];

function insertData() {
    for (let count = 0; count < 500; count++) { 
        storage.push({ info: "assignment_3", time: Date.now() });
    }
    console.log("Inserted 500 entries. Total entries:", storage.length);
}

const taskInterval = setInterval(insertData, 1000);

setInterval(() => {
    if (performance.memory) {
        console.log("Current Heap Usage:", performance.memory.usedJSHeapSize);
    }
}, 2000);

function clean() {
    console.log("stopping memory leakage...");
    storage = []; 
}

setTimeout(() => {
    clearInterval(taskInterval); 
    clean(); 
}, 10000);