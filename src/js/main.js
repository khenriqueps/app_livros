import navbar from "./components/navbar/navbar.js";
import home from "./components/paginas/home.js";
import contato from "./components/paginas/contato.js";
import sobre from "./components/paginas/sobre.js";
import servico from "./components/paginas/servicos.js";


const app = document.getElementById('app');
// app.textContent = '<h1> Olá mundo </h1>'

// #incio #sobre #contato #servicos


let rota = window.location.hash || '#inicio';
render();
window.addEventListener ("hashchange" , () =>{
rota = window.location.hash;
render();

})


function render (){
    switch (rota){
         case '#inicio':
            app.innerHTML = home;
            capturarFormulario();
         break;
         case '#sobre':
            app.innerHTML = sobre;
         break;
         case '#contato':
            app.innerHTML = contato;
         break;
         case '#servico':
            app.innerHTML = servico;
         break;
         default:
            app.innerHTML = `<h1> Página não encontrada </h1>`;
}

}

function capturarFormulario(){
    const formulario = document.getElementById('formulario-fila');
    const lista = document.getElementById('lista-de-pessoas');
    lista.style.display = "flex";
   lista.style.listStyle = "none";

    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      // console.log(event);
      // const idadeInput = event.target.elements['idade'];
      const idade = document.getElementById('idade');
      if(idade.value >= 65){
         console.log("pessoa com prioridade!");
         filaDoBanco.unshift(idade.value);
      }else{
      console.log("pessoa sem prioridade");
      filaDoBanco.push(idade.value);
      }
      idade.value = "";
      filaDoBanco.forEach((item) => {
         const li = document.createElement('li');
         li.innerHTML = "pessoa com idade:" + item + " anos";         
         lista.appendChild(li);
      } )
    } );
   }

//     console.log('contagem regressiva')
// for(let i =100; i>=0; i-=5){
//     console.log(i);
// }

//     console.log('contagem regressiva')
//     // + soma - subtração / divisão * multiplicação % resto da divisão
//     // 4 % 2 = 0
//     // 5 % 2 = 1
// for (let i=0; i<=100; i++){
//     if (i % 2 === 0){
//          console.log(i + 'é par');
//     }
    
// }
// let temperatura = 20;
// let ligado = true;
// while(true){
//     console.log('a temperatura atual é:' +temperatura);
//     temperatura += 0.05;
//     if(temperatura >= 30 && temperatura < 33){
//         console.log('enviar emais de alerta: temperatura alta!');
//     }else if(temperatura >= 33){
//         ligado = false;
//         console.log('desligando o sistema para evitar danos.');
//         break;
//     }  
// }



app.innerHTML = '<h1> Bem vindos! </h1>';
