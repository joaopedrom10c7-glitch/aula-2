function esperar(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}
async function assarPizza(numero) {
    await esperar(1000)
    if (numero == 6) {
        throw "Numero maior que seis"

    } else {
        console.log(`A pizza  ${numero} está pronta`)
    }

}
async function prepararPedido(quantidade) {
    console.log("Inicando Pedido")
    for (let i = 1; i <= quantidade; i++) {
        try {
            await assarPizza(i)
        } catch (error) {
            console.log(error)
        }

    }
    console.log("Pedido está pronto")


}
prepararPedido(8)
