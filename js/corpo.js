// configura o corpo das postagens

// Formatando as imagens
let imagens = document.getElementsByClassName('imagem');
for(let i = 0; i < imagens.length; i++){
    let imagem = imagens[i].childNodes[0];
    imagem.setAttribute('class', 'mx-auto d-block img-fluid m-3 shadow');
}

// Formatando h1
let corpo = document.getElementById('corpo');
let h1 = corpo.getElementsByTagName('h1');
for(let i = 0; i < h1.length; i++){
    h1[i].style.fontSize = '30px';
}

// Formatando h2
let h2 = corpo.getElementsByTagName('h2');
for(let i = 0; i < h2.length; i++){
    h2[i].style.fontSize = '25px';
}

// Formatando h3
let h3 = corpo.getElementsByTagName('h3');
for(let i = 0; i < h3.length; i++){
    h3[i].style.fontSize = '20px';
}

// Formatando p
let p = corpo.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
    p[i].style.fontSize = '15px';
}

// Formatando ul
let ul = corpo.getElementsByTagName('ul');
for(let i = 0; i < ul.length; i++){
    //console.log(ul[i]);
}

// Formatando ul
let ol = corpo.getElementsByTagName('ol');
for(let i = 0; i < ol.length; i++){
    //console.log(ol[i]);
}

// Formatando li
let li = corpo.getElementsByTagName('li');
for(let i = 0; i < li.length; i++){
    li[i].style.fontSize = '15px';
}

// Formatando a
let a = corpo.getElementsByClassName('link-em-outra-pagina');

for(let i = 0; i < a.length; i++){
    a[i].target = '_blank';
    a[i].rel = 'noopener noreferrer';   
}