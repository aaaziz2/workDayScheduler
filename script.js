var scheduleChart = document.querySelector("#chart")
// var button = document.querySelectorAll(".saveBtn")
var time = moment().format("H")

console.log(time)
// console.log(button)

for(i = 0; i<scheduleChart.children.length; i++){
    var row = scheduleChart.children[i]
    // console.log(row)
    var chartTime = row.children[0].children[0].textContent
    // https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
    chartTime = chartTime.replace(/\D/g,'')
    
    if(i>4){
        chartTime = Number(chartTime) + 12
    }
    console.log(chartTime)

    var scheduleEvent = row.children[1]
    var timeDif = time - chartTime
    if(timeDif>0){
        scheduleEvent.classList.add("past")
    }
    else if(timeDif == 0){
        scheduleEvent.classList.add("present")
    }
    else if(timeDif < 0){
        scheduleEvent.classList.add("future")
    }
}

function saveEvent(event){
    event.preventDefault()
    
    if(event.target.classList.contains("saveBtn")){
        var scheduledEvent = event.target.parentNode.children[1].children[0]
        var scheduledEventTime = event.target.parentNode.children[0].children[0].textContent 
        scheduledEventTime = scheduledEventTime.replace(/\D/g,'')
        if(scheduledEventTime<8){
            scheduledEventTime = Number(scheduledEventTime) + 12
        }
        // console.log(scheduledEventTime)
        // console.log(test.value)
        
        localStorage.setItem(scheduledEventTime,scheduledEvent.value)
    }
    
}

scheduleChart.addEventListener('click',saveEvent)