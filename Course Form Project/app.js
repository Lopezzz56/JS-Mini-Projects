
console.log("Script Loaded");

const form = document.querySelector(".form");
const courses = JSON.parse(localStorage.getItem("myCourses")) || [];

form.addEventListener("submit", function (event){
    event.preventDefault();
    const formData = new FormData(form);

    const courseData = Object.fromEntries(formData.entries());
    courses.push(courseData);
    localStorage.setItem("myCourses", JSON.stringify(courses));
    displayCourses();
    console.log("All Courses:", courses);
})

const courseList = document.getElementById("courseList");
function displayCourses(){

    courseList.innerHTML = '';

    courses.forEach((course) =>{
                const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        
        // 4. Set the text content using your object properties
        li.innerHTML = `
            <div>
                <strong>${course.courseName}</strong><br>
                <small>${course.userEmail} | ${course.phone}</small>
            </div>
             <span class="badge badge-primary badge-pill">${course.courseLevel}</span>
        `;

        // 5. Add it to the screen
        courseList.appendChild(li);
    })
}