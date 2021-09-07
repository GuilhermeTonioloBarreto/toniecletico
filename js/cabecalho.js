// -------------- Título ---------------------------
// Criando div que
let titulo_div = document.createElement('div');
titulo_div.setAttribute('class', 'mt-3 pt-3 pb-3 pl-4');

let titulo_a = document.createElement('a');
titulo_a.setAttribute('class', 'text-dark');
titulo_a.href = "index.html";

let titulo_h1 = document.createElement('h1');
titulo_h1.innerHTML = 'Toni Eclético';

let titulo_p = document.createElement('p');
titulo_p.innerHTML = 'Meu blog pessoal de estilo de vida'

//
titulo_a.appendChild(titulo_h1);
titulo_a.appendChild(titulo_p);
titulo_div.appendChild(titulo_a);

//  ------------------------------- imagem ----------------------
let img = document.createElement('img');
img.alt = 'Foto do autor do blog';
img.setAttribute('class', 'img-fluid');
img.setAttribute('src', 'img/imagem-principal.jpg');

// ----------------------- adicionando a div cabecalho -------------
let cabecalho = document.getElementById('cabecalho');
cabecalho.appendChild(titulo_div);
cabecalho.appendChild(img);


