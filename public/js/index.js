$(document).ready(() => {

    var i = 0

    setInterval(() => {

        toggleText = ["World Hello", "Hello World"]

        $(document).find("h1").html(toggleText[i++ % toggleText.length]);

    }, 2000)
});