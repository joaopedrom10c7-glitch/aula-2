function assarPizza(numero){
    setTimeout(()=>{
   console.log(` a pizza ${numero} está pronta!`)
   },1000)

}
function prepararPedido(quantidade){
    console.log("Iniciando pedido..")
    for(let i = 1; i<= quantidade; i++){
        assarPizza(i);
        }
        console.log("Pedido Finalizado")
}

prepararPedido(5)