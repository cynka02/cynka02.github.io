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
            document.getElementById("menu2").innerHTML ='<a href="#services">Oferta</a>';
            document.getElementById("home").innerHTML ='Innowacyjne metody<br>obróbki danych';
            document.getElementById("info1_header").innerHTML ='Slogan1';
            document.getElementById("info1_text").innerHTML ='Tutaj powinny znaleźć się informacje o firmie, takie ogólne i chwytliwe.<br>Można się trochę rozpisać, nie ma ograniczeń<br><br><br>Symetrię napisów trzeba zmieniać ręcznie. Najpierw tekst, później pozycjonowanie.';
            document.getElementById("info2_header").innerHTML ='Slogan2';
            document.getElementById("info2_text").innerHTML ="Kolejne miejsce żeby coś opisać, dobrze się zaprezentować.<br>Można wspomnieć o współpracy z LEGO i poświecić temu to miejsce.";
            document.getElementById("info3_header").innerHTML ='Slogan3';
            document.getElementById("info3_text").innerHTML ='Można ostatecznie zachęcić przyszłych klientów do nas w tym akapicie.<br>Opisać kim jesteśmy, co cenimy lub jaką pracę wykonujemy.';
            document.getElementById("contact1header").innerHTML ='Adres';
            document.getElementById("contact1text").innerHTML ='Gdański Park Naukowo-Technologiczny<br>Trzy Lipy 3, 80-172 Gdańsk';
            document.getElementById("contact2header").innerHTML ='Telefon';
            document.getElementById("contact2text").innerHTML ='+48 987 123 654<br>&nbsp;';
            document.getElementById("contact3header").innerHTML ='Mail';
            document.getElementById("contact3text").innerHTML ='konrad.hennig@consultant.lego.com<br>&nbsp;';
            document.getElementById("lang_pl").style = "cursor: auto;";
            document.getElementById("lang_en").style = "cursor: pointer;";

        }
    }
    else{ // angielski
        document.getElementById("menu5").innerHTML ='<a href="#contact">Contact</a>';
        document.getElementById("menu4").innerHTML ='<a href="#us">About us</a>';
        document.getElementById("menu3").innerHTML ='<a href="#career">Careers</a>';
        document.getElementById("menu2").innerHTML ='<a href="#services">Offer</a>';
        document.getElementById("home").innerHTML ='Innovative solutions<br>in business analysis';
        document.getElementById("info1_header").innerHTML ='Slogan1';
        document.getElementById("info1_text").innerHTML ='Here will be catchy text about our company in general<br>Text can be even longer<br><br><br>The symmetry has to be adjusted manually';
        document.getElementById("info2_header").innerHTML ='Slogan2';
        document.getElementById("info2_text").innerHTML ="Here will be another text, to present our company.<br>We can mention cooperation with LEGO and make this place only for it";
        document.getElementById("info3_header").innerHTML ='Slogan3';
        document.getElementById("info3_text").innerHTML ='We can encourage customers to our company again.<br>Describe who we are, what we value the most and what kind of job we offer.';
        document.getElementById("contact1header").innerHTML ='Address';
        document.getElementById("contact1text").innerHTML ='Gdański Park Naukowo-Technologiczny<br>Trzy Lipy 3, 80-172 Gdańsk';
        document.getElementById("contact2header").innerHTML ='Phone';
        document.getElementById("contact2text").innerHTML ='+48 987 123 654<br>&nbsp;';
        document.getElementById("contact3header").innerHTML ='Mail';
        document.getElementById("contact3text").innerHTML ='konrad.hennig@consultant.lego.com<br>&nbsp;';
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

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 55;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
    var reveals2 = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals2[i].getBoundingClientRect().top;
      var elementVisible = 70;
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      }
    }
  }
window.addEventListener("scroll", reveal);

reveal();

$("#menu5, #menu4, #menu3, #menu2").on('click','a', function(event){ 
    event.preventDefault();
    var o =  $( $(this).attr("href") ).offset();   
    var sT = o.top-50 - $("#menu").outerHeight(true); // get the fixedbar height
    // compute the correct offset and scroll to it.
    window.scrollTo(0,sT);
});
