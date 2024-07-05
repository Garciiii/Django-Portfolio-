document.addEventListener("DOMContentLoaded", function () {
    const nameSearch = document.getElementById("name-search");
    const tags = document.querySelectorAll(".tag");
    const projects = document.querySelectorAll(".project");

    function filterProjects() {
        const nameQuery = nameSearch.value.toLowerCase();
        console.log("Searching for:", nameQuery);

        projects.forEach((project) => {
            const name = project.getAttribute('data-name');
            const nameMatch = name.includes(nameQuery);
            console.log("Project:", name, "Match:", nameMatch);

            if (nameMatch) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        });
    }

    tags.forEach((tag) => {
        tag.addEventListener("click", function () {
            const selectedTag = this.getAttribute("data-tag");
            console.log("Selected tag:", selectedTag);

            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags").split(", ");
                const tagMatch = projectTags.includes(selectedTag);
                console.log("Project tags:", projectTags, "Match:", tagMatch);

                if (tagMatch) {
                    project.style.display = "";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    nameSearch.addEventListener("keyup", filterProjects);
});

