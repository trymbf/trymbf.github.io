let path = document.getElementById("pathTitle")

function set_path(url) {
    if (url == undefined) {
        url = "";
    }

    path.innerHTML = '<a href="/#" class="hover:underline">trymbf.github.io</a>/<a href="/' + url + '" class="text-green-300 hover:underline">' + url + '</a>'
}

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let displayHeight = window.innerHeight;
    let scrollPercentage = scrollPosition / displayHeight;

    if (scrollPercentage >= 2.75) {
        set_path("#ggbgamedeveloper");
        window.history.pushState({}, '', '#ggbgamedeveloper');
    }
    else if (scrollPercentage >= 1.75) {
        set_path("#tinkerer");
        window.history.pushState({}, '', '#tinkerer');
    } else if (scrollPercentage >= 0.75) {
        set_path("#developer");
        window.history.pushState({}, '', '#developer');
    } else {
        set_path();
        window.history.pushState({}, '', '/');
    }
});