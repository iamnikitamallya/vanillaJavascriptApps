const card = document.querySelector(".card");

card.addEventListener('mousemove', onMove);
card.addEventListener('mouseleave', onLeave);
card.addEventListener('mouseenter', onEnter);

const body = document.querySelector("body");

function onMove(e) {
    body.style.backgroundColor = `rgb(100,${e.offsetX},200)`;
}

function onLeave(e) {
    body.style.backgroundColor = "#fff";
    // card.style.transform = "scale(1)";
    // card.style.transition = "0.6s ease all";
}

function onEnter(e) {
    // card.style.transform = "scale(1.1)";
    // card.style.transition = "0.6s ease all";
}

let form = document.querySelector("form");
let input = document.querySelector("#taskForm");
let btn = document.querySelector(".addtask");
let title = document.querySelector("h4");

// Enter the input and get same value on real time in title section

// input.value="";
// input.addEventListener("keydown", runEvent);

// function runEvent(e) {
//     title.textContent = input.value;

// }

btn.addEventListener('click', clickTask);

function clickTask(e) {
    let input = document.querySelector("#taskForm")
    let ul = document.querySelector("ul.tasks");
    let li = document.createElement("li");
    ul.appendChild(li);
    let spanOne = document.createElement("span");
    spanOne.className="tasks float-left";
    li.appendChild(spanOne);
    let spanTwo = document.createElement("span");
    spanTwo.className="close float-right";
    const icon = document.createElement("i");
    icon.className="fa fa-times close del-item";
    spanTwo.appendChild(icon);
    li.appendChild(spanTwo);
    spanOne.appendChild(document.createTextNode(`${input.value}`));
    const task = document.getElementById("taskForm").value;
    let tasks;
        for (tasks of task) {
            
            if(localStorage.getItem("tasks")== null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem("tasks"));
            }
            tasks.push(task);

            localStorage.setItem("task", JSON.stringify(tasks));
        }
    e.preventDefault();
    input.value="";
    btn.textContent="Add another";
}

    


body.addEventListener("click", removeEle);
function removeEle(e) {
    var small = document.createElement("small");
    
    if(e.target.className=="fa fa-times close del-item") {
        e.target.parentElement.parentElement.remove();
    } else if(e.target.className=="btn btn-dark clear-tasks") {
        e.target.previousElementSibling.remove();
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.className="note"
        const card = document.querySelector(".card");
        card.appendChild(ul);
        ul.appendChild(li);
        small.appendChild(document.createTextNode(`No pending tasks found at this moment! Click on reload icon to add new task!`));
        li.appendChild(small); 
    }
}

let windowReload = document.querySelector("i.reload-win");

windowReload.addEventListener("click", winReload);

function winReload(e) {
    location.reload();
}





