window.addEventListener("load", function () {
fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then (function (response) {
    return response.json()
    })
    .then (function (json) {
        const div = document.getElementById("container");
        let jsonSortedByHours = [];
        for (let i=0; i<json.length+jsonSortedByHours.length; i++) {
             let maxHoursInSpace = 0;
             let indexOfMaxValue;
             for (let j=0; j<json.length; j++) {
                if (json[j].hoursInSpace >= maxHoursInSpace) {
                     maxHoursInSpace = json[j].hoursInSpace;
                     indexOfMaxValue = j;
                }
            }
            jsonSortedByHours[i]=json[indexOfMaxValue];
            json.splice(indexOfMaxValue,1);
        }
        json=jsonSortedByHours;   

        div.innerHTML = `<h1>Number of astronauts: ${json.length}</h1>`;
        for (let i=0; i< json.length; i++) {
            let activeGreenType ="";
            if (json[i].active) {
                activeGreenType = 'style="color:green"';
            }
            div.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li ${activeGreenType}>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
            </div>`
                
        }
        
    
})
    

});