function assarPizza(numero, deuCerto){
    const promise = new Promise((resolve, reject) =>{
        console.log(`Começando a assar pizza a pizza ${numero}...`)
       setTimeout(()=>{
        if(deuCerto){
            console.log(`A pizza ${numero} está pronta`)
            resolve(`Dados da  pizza ${numero}`)
            
        }else{
            reject(`Erro na pizza ${numero}`)
        }
   console.log(` a pizza ${numero} está pronta!`)
   },1000)

})
 return promise
}
   console.log("Inicando pedido...")
   assarPizza(1,true)
    .then(() => {
        return assarPizza(2,true)
    })
     .then(() =>{
        console.log("Pedido finalizado")
     })
