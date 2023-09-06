function entopl(){
    if (!JSON.parse(localStorage.getItem('lang'))){
        localStorage.setItem('lang', true);
        location.reload();
    }
}

function pltoen(){
    if (JSON.parse(localStorage.getItem('lang'))){
        localStorage.setItem('lang', false);
        location.reload();
    }
}

function load(){
    if (JSON.parse(localStorage.getItem('lang'))){
        let lang = JSON.parse(localStorage.getItem('lang'));
        if (lang){ // polski
            document.getElementById("menu5").innerHTML ='<a href="#contact">Kontakt</a>';
            document.getElementById("menu4").innerHTML ='<a href="#us">O nas</a>';
            document.getElementById("menu3").innerHTML ='<a href="#career">Kariera</a>';
            document.getElementById("menu2").innerHTML ='<a href="#services">Usługi</a>';
            document.getElementById("home").innerHTML ='Innowacyjne metody<br>obróbki danych';
            document.getElementById("lang_pl").style = "cursor: auto;";
            document.getElementById("lang_en").style = "cursor: pointer;";

        }
    }
    else{
        document.getElementById("menu5").innerHTML ='<a href="#contact">Contact</a>';
        document.getElementById("menu4").innerHTML ='<a href="#us">About us</a>';
        document.getElementById("menu3").innerHTML ='<a href="#career">Careers</a>';
        document.getElementById("menu2").innerHTML ='<a href="#services">Services</a>';
        document.getElementById("home").innerHTML ='Creating innovative solutions<br>in business analysis';
        document.getElementById("lang_en").style = "cursor: auto;";
        document.getElementById("lang_pl").style = "cursor: pointer;";
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {        // If page is scrolled more than 50px
        $('#return_to_top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return_to_top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return_to_top').click(function() {      // When arrow is clicked
    window.scrollTo(0, 0);
});