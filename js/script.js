/* Gravando no storage */
const form = document.getElementById('form');

class Clientes{
  constructor(nome, email){
    this.nome = nome;
    this.email = email;
  }
}

class BancoDados{
  
  constructor(){
    let id = localStorage.getItem('id');

    if(id === null){
      localStorage.setItem('id', 0);
    }
  }

  getProximoId(){
    let proximoId = localStorage.getItem('id');
    return parseInt(proximoId) + 1;
  }
  
  gravar(clienteAtual){
    //localStorage.setItem('despesa', JSON.stringify(despesaAtual));
    let id =this.getProximoId();

    localStorage.setItem(id, JSON.stringify(clienteAtual));

    localStorage.setItem('id', id);

  }
}

let bancoDados = new BancoDados();

form.addEventListener('submit', event =>{
  event.preventDefault();
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  
  let cliente = new Clientes(
    name.value,
    email.value
  )

 bancoDados.gravar(cliente)
 alert(`Obrigado por se cadastrar!
${cliente.nome}: ${cliente.email} `);
})

/* Animação das letras no header */
const header = 'Vai perder essa super promoção? ';
let i = 0;

const typing = () => {
  if(i < header.length){
    document.getElementById('header').innerHTML += header.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
}

typing();
