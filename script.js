let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

function salvarLocal() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function salvarPedido() {

    const cliente = document.getElementById("cliente").value;
    const telefone = document.getElementById("telefone").value;
    const modelo = document.getElementById("modelo").value;

    const valor = Number(document.getElementById("valor").value);

    const pago = Number(document.getElementById("pago").value);

    const statusPagamento =
        document.getElementById("statusPagamento").value;

    const statusPedido =
        document.getElementById("statusPedido").value;

    const obs =
        document.getElementById("obs").value;

    if(cliente==""){
        alert("Informe o nome do cliente.");
        return;
    }

    pedidos.push({

        cliente,

        telefone,

        modelo,

        valor,

        pago,

        restante: valor-pago,

        statusPagamento,

        statusPedido,

        obs

    });

    salvarLocal();

    limparFormulario();

    atualizarLista();

}

function limparFormulario(){

document.getElementById("cliente").value="";
document.getElementById("telefone").value="";
document.getElementById("modelo").value="";
document.getElementById("valor").value="";
document.getElementById("pago").value="";
document.getElementById("obs").value="";

}

function atualizarLista(){

const lista=document.getElementById("pedidos");

lista.innerHTML="";

let totalReceber=0;

let totalPago=0;

let producao=0;

pedidos.forEach((pedido,index)=>{

totalReceber+=pedido.restante;

totalPago+=pedido.pago;

if(pedido.statusPedido=="Produção"){

producao++;

}

const div=document.createElement("div");

div.className="pedido";

div.innerHTML=`

<h3>${index+1}º - ${pedido.cliente}</h3>

<p><b>Telefone:</b> ${pedido.telefone}</p>

<p><b>Modelo:</b> ${pedido.modelo}</p>

<p><b>Valor:</b> R$ ${pedido.valor.toFixed(2)}</p>

<p><b>Pago:</b> R$ ${pedido.pago.toFixed(2)}</p>

<p><b>Restante:</b> R$ ${pedido.restante.toFixed(2)}</p>

<p><b>Pagamento:</b>
<span class="${pedido.statusPagamento.toLowerCase()}">
${pedido.statusPagamento}
</span>
</p>

<p><b>Status:</b> ${pedido.statusPedido}</p>

<p><b>Obs:</b> ${pedido.obs}</p>

<div class="acoes">

<button onclick="subir(${index})">

⬆️

</button>

<button onclick="descer(${index})">

⬇️

</button>

<button onclick="editar(${index})">

✏️

</button>

<button onclick="excluir(${index})">

🗑️

</button>

</div>

`;

lista.appendChild(div);

});

document.getElementById("totalPedidos").innerHTML=pedidos.length;

document.getElementById("totalReceber").innerHTML=

"R$ "+totalReceber.toFixed(2);

document.getElementById("totalPago").innerHTML=

"R$ "+totalPago.toFixed(2);

document.getElementById("producao").innerHTML=

producao;

}
function pesquisar(){

    const texto = document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".pedido");

    cards.forEach(card=>{

        if(card.innerText.toLowerCase().includes(texto)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

function excluir(index){

    if(confirm("Deseja excluir este pedido?")){

        pedidos.splice(index,1);

        salvarLocal();

        atualizarLista();

    }

}

function subir(index){

    if(index===0) return;

    [pedidos[index-1],pedidos[index]]=
    [pedidos[index],pedidos[index-1]];

    salvarLocal();

    atualizarLista();

}

function descer(index){

    if(index===pedidos.length-1) return;

    [pedidos[index+1],pedidos[index]]=
    [pedidos[index],pedidos[index+1]];

    salvarLocal();

    atualizarLista();

}

function editar(index){

    const pedido=pedidos[index];

    document.getElementById("cliente").value=pedido.cliente;

    document.getElementById("telefone").value=pedido.telefone;

    document.getElementById("modelo").value=pedido.modelo;

    document.getElementById("valor").value=pedido.valor;

    document.getElementById("pago").value=pedido.pago;

    document.getElementById("statusPagamento").value=pedido.statusPagamento;

    document.getElementById("statusPedido").value=pedido.statusPedido;

    document.getElementById("obs").value=pedido.obs;

    pedidos.splice(index,1);

    salvarLocal();

    atualizarLista();

}

window.onload=function(){

    atualizarLista();

    if("serviceWorker" in navigator){

        navigator.serviceWorker.register("sw.js");

    }

}
