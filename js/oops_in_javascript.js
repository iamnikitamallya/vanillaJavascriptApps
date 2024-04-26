
// function fruits(name, color) {
//     (this.name=name);
//     (this.color=color);
//     (this.about=function() {
//         // console.log(`${name} is ${color} in color`);
//     })
// }

// const fruits1 = new fruits("Apple", "Red");
// const fruits2 = new fruits("Grapes", "Green");

// fruits1.about();
// fruits2.about();

// // console.log(fruits1);
// // console.log(fruits2);

// function person(firstName, lastName) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.bio=function() {
//         // console.log(`My name is ${firstName} ${lastName}`);
//     }
// }

// person.prototype.getFirstName = function() {
//     return `${this.firstName} ${this.lastName}` 
// }

// const p1 = new person("Nikita", "Mallya");

// // p1.getFirstName();
// // console.log(p1)


// function customer(firstName, lastName, phone, membership) {
//     person.call(this,firstName,lastName);
//     this.phone=phone;
//     this.membership=membership;
// }

// customer.prototype=Object.create(person.prototype);

// customer.prototype.constructor=customer;


// const c1 = new customer("Nikita", "Mallya", 9481815358, "Standard");
// // console.log(c1);



// // console.log(person1);
// // console.log(person2);

// const personDetails = {
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     changeName: function(lastName) {
//         this.lastName=lastName;
//     }
// }

// const man = Object.create(personDetails);
// man.firstName = "Nikita";
// man.lastName = "Mallya";

// man.changeName("SS");

// // console.log(man.getFullName());


// class persons {
//     constructor(firstName, lastName) {
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // const p2 = new persons("nikita", "mallya");

// // console.log(p2.getFullName())

// class customers extends persons {
//     constructor(firstName,lastName,phone,membership) {
//         super(firstName, lastName);
//         this.phone=phone;
//         this.membership=membership;
//     }

//     static addNum(a,b) {
//         return a+b;
//     }
// }

// const c2 = new customers("nikita","mallya",9876543211,"standard");
// // console.log(c2.getFullName());
// // console.log(customers.addNum(5,5));


// // console.log("Im the first line");

// //async --> callback
// // getUser(1, function(user) {
// //     console.log(user);
// //     getRepos(user.getUserName, function(repos) {
// //         console.log(repos);
// //         getCommits(repos[0], function(commit){
// //             // console.log(commit);
// //         });
// //     });
// // });

// //async --> promise



// getUser(1).then(function(user){
//     getRepos(user.getUserName).then(function(repos){
//         getCommits(repo[0]).then(function(repoo){
//             console.log(repoo);
//         })
//     })
// })


// // console.log("Im the next one to get executed");

// function getUser(id) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Im executed after 2000 milli seconds");
//             resolve({id:id, getUserName: "Nikita"})
//         }, 2000);
//     })
// }

// function getRepos(username) {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log(`The repos of ${username} is`);
//             resolve(['repo1','repo2','repo3'])
//         }, 2000);
//     })
// }

// function getCommits(repo) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Executed when committed");
//             resolve("I have commited to repo");
//         }, 2000)
//     })
// }



// let cards = document.getElementsByClassName("cards");
// for(card of cards) {
//     // card.firstElementChild.classList="active";
//     card.lastElementChild.classList.add("none")
//     card.firstElementChild.addEventListener("click", function(e) {
//         let target = e.target;
//         // target.classList="active";
//         // if(target.classList == "active") {
//             // console.log("hey");
//             target.classList.remove("active");
//             target.nextElementSibling.style.display="block"
//             if (target.parentElement.previousElementSibling != null) {
//                 target.parentElement.previousElementSibling.lastElementChild.style.display="none";
//             }
//             if (target.parentElement.nextElementSibling != null) {
//                 target.parentElement.nextElementSibling.lastElementChild.style.display="none";
//             }
//         // }
//     })
// }

let head = document.getElementsByTagName("h1");
let articles = document.getElementsByTagName("article");

for(btn of head) {
    btn.addEventListener("click", function(e) {
        let target = e.target;
        target.classList.remove("active");
        target.nextElementSibling.classList.add("block");
        target.nextElementSibling.classList.remove("none");
        btn.nextElementSibling.classList.add("none");
        btn.nextElementSibling.classList.remove("block");
        for(article of articles) {
            btn.addEventListener("click", function() {
                article.classList.add("none");
            })
            article.classList.add("none");
        }
    })
    btn.classList="active";
}




(function test() {
    console.log(
    [1, 2, 3, 4].map(function (n) {
    return n === 1 && 1 || arguments.callee(n - 1) * n;
    })
    );
    })();




