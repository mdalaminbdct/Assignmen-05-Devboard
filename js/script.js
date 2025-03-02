
document.getElementById("blog-btn").addEventListener("click", function() {
    window.location.href = "blog.html";
});



function addClassOnClick(buttonId) {
    const button = document.getElementById(buttonId);
    const taskAssigned = document.getElementById("task-assigned");
    const totalTasks = document.getElementById("total-tasks");
    const logContainer = document.getElementById("log-container");

    button.addEventListener("click", function(event) {
        let numberTaskAssigned = parseInt(taskAssigned.innerText);
        let numberTotalTasks = parseInt(totalTasks.innerText);


        if (numberTaskAssigned > 0) {
            let newTaskAssigned = numberTaskAssigned - 1;
            let newTotalTasks = numberTotalTasks + 1;
            taskAssigned.innerText = newTaskAssigned;
            totalTasks.innerText = newTotalTasks;
            button.classList.add("btn-disabled");
            

            if (newTaskAssigned > 0) {
                alert("Task is Completed!");
            } else {
                alert("Task is Completed!");
                alert("Congratulations! You have completed all tasks.");
                
            }
        }


        // Log task Codes

        const card = event.target.closest(".card");
        const taskTitle = card.querySelector("h2").innerText;

        const log = document.createElement("p");
        log.innerText = `You have completed the task "${taskTitle}" at ${new Date().toLocaleTimeString("en-US")}.`;

        log.classList.add("log-text");
        logContainer.appendChild(log);

        


        
    });
}

// Log Clear Button

document.getElementById("log-clear-btn").addEventListener("click", function() {
    const logContainer = document.getElementById("log-container");
    logContainer.innerHTML = "";
});


document.getElementById("log-clear-btn").addEventListener("click", function() {
    const logContainer = document.getElementById("log-container");
    logContainer.innerHTML = "";
});


// Random color change

document.getElementById("theme-change").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Current Date 

document.getElementById("current-date").innerText = new Date().toDateString();


// Call the function for each button

        addClassOnClick("task1-btn");
        addClassOnClick("task2-btn");
        addClassOnClick("task3-btn");
        addClassOnClick("task4-btn");
        addClassOnClick("task5-btn");
        addClassOnClick("task6-btn");