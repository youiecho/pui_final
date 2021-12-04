/* Background Color Changes
==============================================
*/
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

/* Start animation when scrolled to elements
==============================================
*/
$(window).scroll(function () {
    $('.question').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animate__animated animate__bounce");
        }
    });
});

$(window).scroll(function () {
    $('.questionDetail').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animate__animated animate__fadeIn");
        }
    });
});

$(window).scroll(function () {
    $('.button').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animate__animated animate__fadeInUp");
        }
    });
});

$(window).scroll(function () {
    $('#page4').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animate__animated animate__fadeIn");
        }
    });
});

/* Detail Text Box Animation
==============================================
*/
$('.behaviorImg').click(function () {
    $('#insert').addClass('pullDown');
});

var $post = $("#insert");
setInterval(function () {
    $post.removeClass("pullDown");
}, 3000);

/* Detail Text Inserting Function
==============================================
*/
function addText(text, learnmoretext) {
    document.getElementById("learnMore").style.opacity = 0;
    var textContainer = document.getElementById("insert");
    $("#insert").html(text);

    var button = document.createElement("button");
    button.innerHTML = "Learn More";
    textContainer.append(button);
    button.setAttribute('id', 'learnMoreButton');

    textContainer.setAttribute('class', 'description pullDown');
    var $post = $("#insert");
    setInterval(function () {
        $post.removeClass("pullDown");
    }, 3500);

    // Learn More Text Inserting Function
    button.addEventListener("click", function () {
        document.getElementById("learnMore").style.opacity = 1;
        var learnMore = document.getElementById("learnMore");
        $("#learnMore").html(learnmoretext);
        learnMore.setAttribute('class', 'description pullDown');
        var $post = $("#learnMore");
        setInterval(function () {
            $post.removeClass("pullDown");
        }, 3500);
    })
}