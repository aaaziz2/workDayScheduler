var scheduleChart = document.querySelector("#chart")

var time = moment().format("H")

console.log(time)

for(i = 0; i<scheduleChart.children.length; i++){
    var row = scheduleChart.children[i]
    var chartTime = row.children[0].children[0].textContent
    // https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
    chartTime = chartTime.replace(/\D/g,'')
    if(i>4){
        chartTime = Number(chartTime) + 12
    }
    console.log(chartTime)

    var scheduleEvent = row.children[1]
    var timeDif = time - chartTime
    // if(timeDif>0){
    //     console.log(timeDif)
    //     scheduleChart.classList.add("past")
    // }
    // else if(timeDif == 0){
    //     console.log(timeDif)
    //     scheduleChart.classList.add("present")
    // }
    // else if(timeDif<0){
    //     console.log(timeDif)
    //     scheduleChart.classList.add("future")
    // }
}