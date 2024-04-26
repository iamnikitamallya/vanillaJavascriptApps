const row = document.querySelector(".row.cards");

const values = [
    {
        title: 'List View',
        urls: "job-lists.html"
    },
    {
        title: 'Add Tasks',
        urls: "add-tasks.html"
    },
    {
        title: 'Loan Calculator',
        urls: "loan-calculator.html"
    },
    {
        title: 'Drum Kit Game',
        urls: "drum-kit.html"
    },
    {
        title: 'Dice Game',
        urls: "dice-game.html"
    },
    {
        title: 'Animation Todo List',
        urls: "todo-list.html"
    },
    {
        title: 'MySQL',
        urls: "mysql.html"
    }
]



for(let val of values) {
    // console.log(i);
    let divCol = document.createElement("div");
    row.appendChild(divCol);
    divCol.className="col-md-3";
    let divCard = document.createElement("div");
    divCard.className="card";
    divCol.appendChild(divCard);
    divCard.appendChild(document.createTextNode(val.title));
    
    let btn = document.createElement("button");
    btn.className="btn";
    let link = document.createElement("a");
    link.setAttribute("href", val.urls);
    link.innerHTML="Click Here";
    divCard.appendChild(btn);
    btn.appendChild(link);
    
}



// const liSelect = document.querySelectorAll("li");


// ulSelect.removeChild(lim[0])












