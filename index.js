import express from 'express'
import sorvete from './database/sorvete.js';
import categoria from './database/categoria.js';
import buscar from './buscar.js';

const app = express()
app.get("/sorvete/listar", (req, res) =>{
    console.log("Listando todos os Sabores de Sorvete Disponiveis")
    const data = sorvete()
    res.json(data)
})

app.get('/sorvete/visualizar', (req, res) =>{
    try{
    console.log ("Visualizando objeto ID por paramentro")
    const parametros = req.query;
    console.log({parametros})
    const id = parametros['id']
    function buscar (id){

    }
    if(!id){
        throw new Error("Parametro ID não Identificado");
    }
    // const objeto = buscar (id)  
    const local = sorvete ()     
    // res.json(objetos)
    res.json(local[id])
    }catch(error){
    console.log ("Erro no Visualizar: " + error.message);
}
    
})

app.get('/categoria/listar',(req,res)=>{
    console.log ("visualizado Tabela de categorias")
    const categorias = categoria()
    res.json (categorias)
})

app.get('/categoria/visualizar',(req,res)=> {
    try{console.log ("Visualizando Categorias")
    const categorias = categoria()
    res.json (categorias)
}catch(error){
    console.log("Erro no Visalizador: "+ error.message );
}
})
console.log("Rodando servidor na Porta 3000");
app.listen(3000)