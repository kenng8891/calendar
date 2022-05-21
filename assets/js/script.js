var currentDate = moment().format("MM-DD-YYYY");
var hours = getTime()
var relativeTime = []
var testNum = 11
function getTime() {
    var now = new Date();
    return (now.getHours())
}
console.log(getTime());

console.log(hours)

//function to see time relative to calendar hours and adding color code
function timeOfDay () {
for (i = 0; i < 9; i++) {
    if ((i + 9) > testNum) {
        document.getElementById(i).classList.add("bg-success");
    }
    else if ((i + 9) === testNum) {
        document.getElementById(i).classList.add("bg-danger");
    }
    else if ((i + 9) < testNum) {
        document.getElementById(i).classList.add('bg-primary');
    }
    }
}
console.log(testNum)
document.getElementById("dateTime").innerHTML = currentDate
timeOfDay();
console.log(relativeTime)

timeOfDay();

console.log(i + 9)
console.log(relativeTime)
//setup local storage on button click