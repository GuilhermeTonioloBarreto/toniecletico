let rodape = document.getElementById('rodape');
rodape.setAttribute('class', 'bg-dark text-muted pt-3 pb-3 mb-3');
rodape.innerHTML = 'Toni Eclético - Meu blog pessoal de estilo de vida';

let rodape_logos = document.createElement('div');

let logo_face = document.createElement('img');
logo_face.src = "img/facebook-logo.png";
logo_face.alt = 'link facebook';
logo_face.setAttribute('class', 'mr-3 mt-3 img-fluig');
logo_face.style.width = '30px';

let link_face = document.createElement('a');
link_face.href = 'https://www.facebook.com/guilherme.toniolobarreto';
link_face.target = '_blank';
link_face.rel = 'noopener noreferrer';
link_face.appendChild(logo_face);

let logo_insta = document.createElement('img');
logo_insta.src = "img/instagram-logo.png";
logo_insta.alt = 'link instagram';
logo_insta.setAttribute('class', 'mr-3 mt-3 img-fluig');
logo_insta.style.width = '30px';

let link_insta = document.createElement('a');
link_insta.href = 'https://www.instagram.com/domtoniolo/?hl=en';
link_insta.target = '_blank';
link_insta.rel = 'noopener noreferrer';
link_insta.appendChild(logo_insta);

rodape_logos.appendChild(link_face);
rodape_logos.appendChild(link_insta);
rodape.appendChild(rodape_logos);
