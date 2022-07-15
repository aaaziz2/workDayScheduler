// selects the whole day scheduler chart
var scheduleChart = document.querySelector("#chart")
// Current time by 24HR clock just the Hours
var time = moment().format("H")

time = time - 20

// Testing for current time
// console.log(time)

// Checks all the existing timeslots
//  Formats based on relation to the current time of day
//  Adds the items that are saved to local storage
for(i = 0; i<scheduleChart.children.length; i++){
    // variable that represents the current row(timeslot) we are checking
    var row = scheduleChart.children[i]
    // Grab the value of the time
    var chartTime = row.children[0].children[0].textContent
    // https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
    // Takes out the non-numeric chars
    chartTime = chartTime.replace(/\D/g,'')
    // after number five we add 12 to match the 24HR clock
    if(i>4){
        chartTime = Number(chartTime) + 12
    }
    // console.log(chartTime)
    // variable for the event section so we can add classlist as needed
    var scheduleEvent = row.children[1]
    // check for past,current,future
    var timeDif = time - chartTime
    // depending on the value add the appropriate class
    if(timeDif>0){
        scheduleEvent.classList.add("past")
    }
    else if(timeDif == 0){
        scheduleEvent.classList.add("present")
    }
    else if(timeDif < 0){
        scheduleEvent.classList.add("future")
    }
    // If localStorage/scheduled events exist, add them to the page
    if(localStorage.getItem(chartTime)){
        row.children[1].textContent = localStorage.getItem(chartTime)
    }
}
// Save event if save button is pressed
function saveEvent(event){
    // Only save events if the save button is pressed  
    if(event.target.classList.contains("saveBtn")){
        // grabs What wwas entered in the scheduler
        var scheduledEvent = event.target.parentNode.children[1].children[0].value
        // grabs the associated time
        var scheduledEventTime = event.target.parentNode.children[0].children[0].textContent 
        // stripping the non-numeric char so its easier to reference earlier
        scheduledEventTime = scheduledEventTime.replace(/\D/g,'')
        // converting PM to 24HR
        if(scheduledEventTime<8){
            scheduledEventTime = Number(scheduledEventTime) + 12
        }
        // console.log(scheduledEventTime)
        // console.log(test.value)

        // write item to local storage
        localStorage.setItem(scheduledEventTime,scheduledEvent)
    }
    
}
// Event Delegation so I don't have to make an event listener for each button
scheduleChart.addEventListener('click',saveEvent)