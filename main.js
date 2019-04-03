console.log('Lakia Jones');
// XHR-xmlHttpRequest

let rides = [];

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
};

function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    // console.log('Yay!', data);
    rides = data.rides;
    domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails(){
    console.error('OhShit');
};

const getRidesData = () => {
    const myRequest = new XMLHttpRequest ();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
    console.log(myRequest);
};


const init = () => {
    getRidesData(); 
};

init();