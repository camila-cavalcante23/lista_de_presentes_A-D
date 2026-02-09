
function copiarPix(chave) {
  
    
    const chaveReal = "email_ou_telefone_da_noiva@pix.com.br"; 
    

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(chaveReal)
            .then(() => {
                alert("Chave Pix copiada com sucesso! Agora é só abrir o app do seu banco.");
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
                fallbackCopy(chaveReal);
            });
    } else {
       
        fallbackCopy(chaveReal);
    }
}


function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
  
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert("Chave Pix copiada com sucesso! (Modo de compatibilidade)");
        } else {
            prompt("Não foi possível copiar automaticamente. Copie a chave abaixo:", text);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        prompt("Copie a chave manualmente:", text);
    }

    document.body.removeChild(textArea);
}

const weddingDate = new Date("May 02, 2026 15:30:00").getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<h2>É hoje! ❤</h2>";
    }
}, 1000);


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active'); 
        }
    }
}

reveal();


function abrirEnvelope() {
    const overlay = document.getElementById('envelope-overlay');
    const container = document.querySelector('.envelope-container');
    container.classList.add('envelope-open');
    

    setTimeout(() => {
   
        overlay.style.opacity = '0';
        
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
        
    }, 1200); 
}