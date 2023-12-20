
let btn=document.getElementById("btn1");
btn.addEventListener("click",calculateAge);

function calculateAge() {
    var dobInput = document.getElementById("input1");
    var resultElement = document.getElementById("ans");

    
        var dob = new Date(dobInput.value);
        var currentDate = new Date();
        let d=dob.getTime();
        let c=currentDate.getTime();

        var ageInMilliseconds = currentDate - dob;
        var ageInSeconds = ageInMilliseconds / 1000;
        var ageInMinutes = ageInSeconds / 60;
        var ageInHours = ageInMinutes / 60;
        var ageInDays = ageInHours / 24;
        var ageInYears = ageInDays / 365.25; // accounting for leap years
       
        console.log(dob)
        console.log(currentDate)
        console.log(d)
        console.log(c)

        console.log(ageInMilliseconds);
        console.log(ageInSeconds)
        console.log(ageInMinutes)
        console.log(ageInHours)
        console.log(ageInDays)
        console.log(ageInYears)



        var years = Math.floor(ageInYears);
        var months = Math.floor((ageInYears - years) * 12);
        var days = Math.floor((ageInDays - (years * 365.25) - (months / 12) * 365.25));

        resultElement.textContent = years + " years, " + months + " months, " + days + " days";
        console.log(resultElement.innerText)
    
        // resultElement.textContent = "Please enter a valid date of birth.";
    

 // Update the maximum date for the input field after the first calculation
 updateMaxDate();
}

// Function to get the current date in the format "YYYY-MM-DD"
function getCurrentDate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;



}

// Function to update the maximum date when the input value changes
function updateMaxDate() {
    var input = document.getElementById("input1");
    input.max = getCurrentDate();
}
