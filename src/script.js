class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }

    exibirInformacoes() {
        return `${this.titulo} - ${this.autor} (${this.anoPublicacao}) - ${this.genero}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    removerLivro(titulo) {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
    }

    listarLivros() {
        return this.livros.map(livro => livro.exibirInformacoes());
    }
}

const biblioteca = new Biblioteca();

document.getElementById('form-livro').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    const livro = new Livro(titulo, autor, ano, genero);
    biblioteca.adicionarLivro(livro);

    this.reset(); // Limpa o formulário
});

document.getElementById('exibir-livros').addEventListener('click', function() {
    atualizarLista();
});

function atualizarLista() {
    const listaLivros = document.getElementById('lista-livros');
    listaLivros.innerHTML = ''; // Limpa a lista antes de atualizar

    const livros = biblioteca.listarLivros(); // Pega a lista de livros

    if (livros.length === 0) {
        listaLivros.innerHTML = '<li>Nenhum livro cadastrado.</li>'; // Mensagem caso não haja livros
    } else {
        livros.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = livro;

            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.onclick = function() {
                biblioteca.removerLivro(livro.split(' - ')[0]); // Remover pelo título
                atualizarLista(); // Atualiza a lista após remover
            };

            li.appendChild(btnRemover);
            listaLivros.appendChild(li);
        });
    }
}
