var currentDate = moment().format("MM-DD-YYYY");
var hours = getTime()
var testNum = 11
var tasks = []
var saveTasks = [];
var saveTasks1 = []
var button0 = document.querySelector('#b0')
var button1 = document.querySelector('#b1')
var button2 = document.querySelector('#b2')
var button3 = document.querySelector('#b3')
var button4 = document.querySelector('#b4')
var button5 = document.querySelector('#b5')
var button6 = document.querySelector('#b6')
var button7 = document.querySelector('#b7')
var button8 = document.querySelector('#b8')


function getTime() {
    var now = new Date();
    return (now.getHours())
}

//function to see time relative to calendar hours and adding color code
function timeOfDay () {
for (i = 0; i < 9; i++) {
    if ((i + 9) > hours) {
        document.getElementById(i).classList.add("bg-success");
    }
    else if ((i + 9) === hours) {
        document.getElementById(i).classList.add("bg-danger");
    }
    else if ((i + 9) < hours) {
        document.getElementById(i).classList.add('bg-secondary');
    }
    }
}


//setup local storage on button click

button0.addEventListener('click', function(event) {
    event.preventDefault();
    
    tasks[0] = document.getElementById(0).value;
    // set new submission to local storage 
    
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);

button1.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[1] = document.getElementById(1).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button2.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[2] = document.getElementById(2).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button3.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[3] = document.getElementById(3).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button4.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[4] = document.getElementById(4).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button5.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[5] = document.getElementById(5).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button6.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[6] = document.getElementById(6).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button7.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[7] = document.getElementById(7).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);
button8.addEventListener('click', function(event) {
    event.preventDefault();
    tasks[8] = document.getElementById(8).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
}
);

for (i = 0; i < 9; i++) {
    if (tasks[i] = undefined) {
        tasks[i] = ""
    } 
}
var loadTasks = function () {
    for (i = 0; i < 9; i++) {
    saveTasks1 = document.getElementById(i).textContent
    saveTasks = localStorage.getItem("key")
    
    saveTasks = JSON.parse(saveTasks)
    document.getElementById(i).value = saveTasks[i];
    tasks = saveTasks
    }
    console.log(saveTasks)
};


loadTasks();
timeOfDay();

