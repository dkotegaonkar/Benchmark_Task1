const fetchData = (callback) => {
    console.log("Fetching from server...");

    setTimeout(() =>{
        const success = Math.random() > 0.5
        if(success){
            const arr = ["Facebook","Amazon","Apple","Netflix","Google"];
            callback(null,arr)
        }
        else{
            callback("Error",null);
        }
    },2000);
}

const process = (error,data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
}

fetchData(process);