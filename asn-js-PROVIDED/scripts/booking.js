/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costperday = 35;

var numberOfDays = 0;

var totalCost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickedDayButtons(day) {
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
    }
    else {
        day.classList.add("clicked");
        numberOfDays++;
    }
    totalCost = costperday * numberOfDays;
    calculateCost();
}

document.getElementById("monday").addEventListener("click", function() {
    clickedDayButtons(this);});
document.getElementById("tuesday").addEventListener("click", function() {
    clickedDayButtons(this);});
document.getElementById("wednesday").addEventListener("click", function() {
    clickedDayButtons(this);});
document.getElementById("thursday").addEventListener("click", function() {
    clickedDayButtons(this);});
document.getElementById("friday").addEventListener("click", function() {
    clickedDayButtons(this);});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    document.getElementById("monday").classList.remove("clicked");
    document.getElementById("tuesday").classList.remove("clicked");
    document.getElementById("wednesday").classList.remove("clicked");
    document.getElementById("thursday").classList.remove("clicked");
    document.getElementById("friday").classList.remove("clicked");
    numberOfDays = 0;
    totalCost = 0;
    calculateCost();

}

document.getElementById("clear-button").addEventListener("click", clearDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay() {
    document.getElementById("half").classList.add("clicked");
    document.getElementById("half").classList.add("clicked");
    costperday = 20;
    totalCost = numberOfDays * costperday;
    calculateCost();
}

document.getElementById("half").addEventListener("click", halfDay);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay() {
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    costperday = 35;
    totalCost = numberOfDays * costperday;
    calculateCost();
}

document.getElementById("full").addEventListener("click", fullDay);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    document.getElementById("calculated-cost").innerHTML = totalCost;
}

