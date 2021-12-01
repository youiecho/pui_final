/* Background color changes */

function bgColorChange() {
    const btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        const colChange1 = 'rgb(231, 191, 255)';
        document.body.style.backgroundColor = colChange1;
    }

    const btn2 = document.getElementById('btn2');
    btn2.onclick = function () {
        const colChange2 = 'rgb(255, 191, 225)';
        document.body.style.backgroundColor = colChange2;
    }

    const btn3 = document.getElementById('btn3');
    btn3.onclick = function () {
        const colChange3 = 'rgb(255, 198, 191)';
        document.body.style.backgroundColor = colChange3;
    }
}

$(window).scroll(function () {
    $('.question').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("animate__animated animate__bounce");
        }
    });
});

$(window).scroll(function () {
    $('.questionDetail').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("animate__animated animate__fadeIn");
        }
    });
});

$(window).scroll(function () {
    $('.button').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("animate__animated animate__fadeInUp");
        }
    });
});

$('.behaviorImg').click(function () {
    $('#insert').addClass('animate__animated animate__bounce');
});

var $post = $("#insert");
setInterval(function () {
    $post.removeClass("animate__animated animate__bounce");
}, 1000);

function one() {
    var learnMoreContainer = document.getElementById("insert");
    var button = document.createElement("button");
    learnMoreContainer.innerHTML = "this iscontent a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a ";
    button.innerHTML = "Learn More";
    learnMoreContainer.append(button);
    button.addEventListener('click', expandLearnMore);
    function expandLearnMore() {
        console.log("hi");
        learnMoreContainer.setAttribute('class', 'animate__animated animate__bounce');
    }
}

function two() {
    var add = document.getElementById("insert");
    add.innerHTML = "two";
}

function three() {
    var add = document.getElementById("insert");
    add.innerHTML = "three";
}



