import http from "http";

const port = 3000;
const rotas = {
    "/": "Bem-vindo à Biblioteca Escolar!",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores",
    "/categoria": "Consulte as categorias literárias.",
    "/emprestimos": "Histórico de empréstimos da biblioteca."
}

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end(rotas[req.url] || "404 NOT FOUND");
});

server.listen(port, ()=>{
    console.log('Servidor rodando');
});



