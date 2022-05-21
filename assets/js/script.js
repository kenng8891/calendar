var currentDate = moment().format("MM-DD-YYYY");
var hours = getTime()
var relativeTime = []

function getTime() {
    var now = new Date();
    return (now.getHours())
            // ((now.getMinutes() < 10)
            //      ? (now.getMinutes())
            //      : (now.getMinutes())));
    
}
console.log(getTime());

console.log(hours)


for (i = 0; i < 9; i++) {
    if (hours < (i + 9)) 
    relativeTime[i] = "future";
    else if (hours = (i + 9))
    relativeTime[i] = "present";
    else (hours > (i + 9))
    relativeTime[i] = "past";
}
console.log(relativeTime)
console.log(currentDate)
document.getElementById("dateTime").innerHTML = currentDate



// need to add background color based on the relative time of day
var colorCode = function () {
    for (i = 0; i < 9; i++) {
        if (relativeTime[i] = "past") {
        var textBox = document.getElementById[i];
        textBox.classList.add(".bg-primary");
    }
        else if (relativeTime[i] = "present") {
        var textBox = document.getElementById[i];
        textBox.classList.add(".bg-danger");
    }
        else {
        var textBox = document.getElementById[i];
        textBox.classList.add(".bg-danger");
    }
    }
}

// need to assign variable to each text box
// for (i = 0; i < 9; i++) {
//     var timeSlot = document.createElement('div');
//     timeSlot.className = "d-flex time-block flex-nowrap";

// }