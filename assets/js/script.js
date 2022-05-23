var currentDate = moment().format("MM-DD-YYYY");
var hours = getTime()
var testNum = 11
var tasks = []

var buttonArray = [] 

for (i = 0; i < 9; i++) {
    buttonArray[i] = document.querySelector('#b[i]')
}

var button = document.querySelector('#b0')

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
        document.getElementById(i).classList.add('bg-primary');
    }
    }
}

  // create new array to hold updated list of tasks


var saveTasks = function() {
    for (i = 9; i < 9; i++) {
        tasks[i] = document.getElementById(i).value;
    }
}


for (i = 0; i < 9; i++) {
buttonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    tasks = document.getElementById(i).value;
    // set new submission to local storage 
    localStorage.setItem("key", JSON.stringify(tasks));
    var taskData = localStorage.getItem("key")
    console.log(JSON.parse(taskData))
  });

var loadTasks = function () {
    for (i = 0; i < 9; i++) {
    document.getElementById(i).value = JSON.parse(localStorage.getItem("key"));
    }
}

//   var loadTasks = function() {
//     var savedTasks = localStorage.getItem("key");
//     // if there are no tasks, set tasks to an empty array and return out of the function
//     if (!savedTasks) {
//       return false;
//     }
//     console.log("Saved tasks found!");
//     // else, load up saved tasks
  
//     // parse into array of objects
//     savedTasks = JSON.parse(savedTasks);
// }

loadTasks();
timeOfDay();

//setup local storage on button click