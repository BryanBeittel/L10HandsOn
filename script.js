$(document).ready(function() {
    $(".icon1").find("img").css("transition", "transform 300ms ease-in-out");

    $(".icon1").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.3)");
        },
        function() {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});

$(document).ready(function() {
    $(".icon2").find("img").css("transition", "transform 300ms ease-in-out");

    $(".icon2").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.3)");
        },
        function() {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});

$(document).ready(function() {
    $(".icon3").find("img").css("transition", "transform 300ms ease-in-out");

    $(".icon3").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.3)");
        },
        function() {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});

function loadRepos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let gitObj = JSON.parse(this.responseText);
            let listContainer = document.getElementById('js-repo-list');
            //THIS LOOPS THROUGH THE REPOSITORIES
            for (i = 0; i < gitObj.length; i++) {
                listContainer.innerHTML += `<li><a href="${gitObj[i].html_url}" target="_blank">${gitObj[i].html_url}</a></li>`;
            }
        }
    };
    xhttp.open("GET", "https://api.github.com/users/BryanBeittel/repos", true);
    xhttp.send();
}
loadRepos();