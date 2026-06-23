function atualizarDashboard(){

let totalPedidos=pedidos.length;

let faturamento=0;

let recebido=0;

let restante=0;

let producao=0;

let prontos=0;

pedidos.forEach(p=>{

faturamento+=p.valor;

recebido+=p.pago;

restante+=p.restante;

if(p.statusPedido=="Produção") producao++;

if(p.statusPedido=="Pronto") prontos++;

});

document.getElementById("totalPedidos").innerHTML=totalPedidos;

document.getElementById("totalPago").innerHTML="R$ "+recebido.toFixed(2);

document.getElementById("totalReceber").innerHTML="R$ "+restante.toFixed(2);

document.getElementById("producao").innerHTML=producao;

}
