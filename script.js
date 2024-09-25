const biblioteca = new Biblioteca();

document.getElementById('form-livro').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    const livro = new Livro(titulo, autor, ano, genero);
    biblioteca.adicionarLivro(livro);

    atualizarLista();
    this.reset();
});

function atualizarLista() {
    const listaLivros = document.getElementById('lista-livros');
    listaLivros.innerHTML = '';

    biblioteca.listarLivros().forEach(livro => {
        const li = document.createElement('li');
        li.textContent = livro;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            biblioteca.removerLivro(livro.split(' - ')[0]); // Remover pelo título
            atualizarLista();
        };

        li.appendChild(btnRemover);
        listaLivros.appendChild(li);
    });
}
