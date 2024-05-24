function buscar (id){
/* 
Importar tabela sorvete 
Selecionar o objeto atravez do ID
retornar o objeto identificado
rodar no curl
*/

console.log({id})
    const local = sorvete()
    res.json(local[id])

}
export default buscar;