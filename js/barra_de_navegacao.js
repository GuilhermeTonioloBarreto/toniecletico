//---------------- elementos para uma nav responsível ----------------------

// Responsible Navbar 
let nav_nav = document.createElement('nav');
nav_nav.setAttribute('class', 'navbar navbar-expand-md bg-dark navbar-dark container');

// brand
let nav_brand = document.createElement('a');
nav_brand.setAttribute('class', 'navbar-brand ml-3');
nav_brand.href = 'index.html';
nav_brand.innerHTML = 'Home';

// Toggler/collapsibe Button
let nav_button = document.createElement('button');
nav_button.setAttribute('type', 'button');
nav_button.setAttribute('class', 'navbar-toggler');
nav_button.setAttribute('data-toggle', 'collapse');
nav_button.setAttribute('data-target', '#collapsibleNavbar');

// nav_span
let nav_span = document.createElement('span');
nav_span.setAttribute('class', 'navbar-toggler-icon');

// Navbar links
let nav_navbar_links = document.createElement('div');
nav_navbar_links.setAttribute('class', 'collapse navbar-collapse');
nav_navbar_links.setAttribute('id', 'collapsibleNavbar');

// ---------------- criando os links de cada página automaticamente -------------------

// Nomes de cada página HTML
let nav_texto = [
    'Teste de Receitas Veggies',
    'Espiritismo',
    'Critica de Animes',
    'Variedades',
    'English Content',
    'Sobre Mim'
];

// Criação dos childs
let nav_a = [];
let nav_li = []
let nav_ul = document.createElement('ul');
let nav_div = document.getElementById('collapsibleNavbar');

// Propriedades <u>
nav_ul.setAttribute('class', 'navbar-nav');

// Atribuindo cada um dos links a seu Pai
for (let i = 0; i < nav_texto.length; i++){
    // Propriedades <a>
    nav_a.push(document.createElement('a'));
    nav_a[i].setAttribute('class', 'nav-link');
    nav_a[i].innerHTML = nav_texto[i];
    nav_a[i].href= nav_texto[i] + '.html';
    
    nav_li.push(document.createElement('li'));
    nav_li[i].setAttribute('class', 'nav-item');
    nav_li[i].appendChild(nav_a[i]);

    nav_ul.appendChild(nav_li[i]);
}

// -------------------- criando os appendChild necessários -------------

// Adicionando o logo
nav_nav.appendChild(nav_brand);

// Adionando o botão
nav_button.appendChild(nav_span);
nav_nav.appendChild(nav_button);

// Adicionando os links
nav_navbar_links.appendChild(nav_ul);
nav_nav.appendChild(nav_navbar_links);


// ----------------------- adicionando a div cabecalho -------------
let barra_de_navegacao = document.getElementById('barra_de_navegacao');
barra_de_navegacao.appendChild(nav_nav);


