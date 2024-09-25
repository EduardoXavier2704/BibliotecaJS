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


