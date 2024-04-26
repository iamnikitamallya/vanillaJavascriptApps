const body = document.querySelector("body");
const div = document.createElement("div");
div.className = "container ptb-25";
const section = document.querySelector(".section");
const footer = document.querySelector("footer");
body.insertBefore(div, footer);
const h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("List of Job Applications"));
div.appendChild(h1);
const ul = document.createElement("ul");
ul.className = "parents";
div.appendChild(ul);
// const h2 = document.createElement("h2");
// h2.appendChild(document.createTextNode("I am a replaced heading"));
// div.replaceChild(h2, h1);


const values = [
    {
        value: 'Sowmy S M',
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
    {
        value: 'Nagaraj K',
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
    {
        value: 'Vidya S',
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
    {
        value: 'Gowri K',
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
    {
        value: 'Pragna S',
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
    {
        value: 'Sujatha M',
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        urls: "http://www.africau.edu/images/default/sample.pdf"
    },
]



for(let i=0; i<=values.length; i++) {
    let lis = values[i];
    const li = document.createElement("li");
    li.className="children";
    li.appendChild(document.createTextNode(lis.value));
    ul.appendChild(li);
    const p = document.createElement("p");
    p.className="lead";
    p.appendChild(document.createTextNode(lis.para));
    li.appendChild(p);
    
    const btn = document.createElement("button");
    btn.className="btn";
    const link = document.createElement("a");
    link.setAttribute("href", lis.urls);
    link.setAttribute("target", "_blank");
    link.innerHTML="View Resume";
    li.appendChild(btn);
    btn.appendChild(link);
    
}

// const liSelect = document.querySelectorAll("li");




// ulSelect.removeChild(lim[0])












