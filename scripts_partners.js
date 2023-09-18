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
            document.getElementById("menu5").innerHTML ='<a href="index.html#contact">Kontakt</a>';
            document.getElementById("menu4").innerHTML ='<a href="index.html#info3">O nas</a>';
            document.getElementById("menu3").innerHTML ='Partnerzy';
            document.getElementById("menu2").innerHTML ='<a href="index.html#info1">Oferta</a>';
            document.getElementById("partners_main").innerHTML ='Partnerzy, współprace';
            document.getElementById("lang_pl").style = "cursor: auto;";
            document.getElementById("lang_en").style = "cursor: pointer;";

        }
    }
    else{ // angielski
        document.getElementById("lang_en").style = "cursor: auto;";
        document.getElementById("lang_pl").style = "cursor: pointer;";
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {
        $('#return_to_top').fadeIn(200);
    } else {
        $('#return_to_top').fadeOut(200);
    }
});
$('#return_to_top').click(function() {
    window.scrollTo(0, 0);
});
