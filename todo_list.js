function addTask(description, dueTime) {
    const taskList = document.getElementById('task_list');
    const newLi = document.createElement('li');
    taskList.append(newLi);
    newLi.textContent = description;
    if(dueTime){
    const newDue = document.createElement('span');
    newDue.classList.add('due');
    newLi.append(newDue);
    let timestamp = new Date(dueTime);
    newDue.textContent = "due" + " " + timestamp.toLocaleDateString() + " " +timestamp.toLocaleTimeString(0);}
    const newButton = document.createElement('button');
    newButton.textContent = "Done";
    newLi.append(newButton);
    newButton.addEventListener('click', () => {
    newButton.parentElement.remove()})
    newButton.classList.add('btn', "btn-outline-danger", "done")
    document.getElementById("task_description_input").value = ""
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

const inputButton = document.getElementById('add_task');
inputButton.addEventListener("click", () => {
let description = document.getElementById("task_description_input").value;
let inputDueDate= document.getElementById('duedate_input');
let inputDueTime = document.getElementById('duetime_input');
let dueTime = dateAndTimeToTimestamp(inputDueDate, inputDueTime);
addTask(description, dueTime);})


const descriptionField = document.getElementById("task_description_input");
descriptionField.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    let description = document.getElementById("task_description_input").value;
    let inputDueDate= document.getElementById('duedate_input');
    let inputDueTime = document.getElementById('duetime_input');
    let dueTime = dateAndTimeToTimestamp(inputDueDate, inputDueTime);
    addTask(description, dueTime)}})
