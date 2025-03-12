

document.addEventListener("DOMContentLoaded", function () {
    const works = {
        "task1": { "title": "Project 1", "url": "works/task1/index.html" },
        "task2": { "title": "Project 2", "url": "works/task2/index.html" },
        "task3": { "title": "Project 3", "url": "works/task3/index.html" }
    };

    let navDiv = document.getElementById("nav_div");
    let contentFrame = document.getElementById("content_frame");
   
    // Set default page
    contentFrame.src = "works/landing.html";

    // Create buttons dynamically
    Object.keys(works).forEach(task => {
        let button = document.createElement("button");
        button.innerText = works[task].title;
        button.classList.add("nav_button");
       
        button.addEventListener("click", function () {
            contentFrame.src = works[task].url;
        });

        navDiv.appendChild(button);
    });
});