import navbar from "./components/navbar/navbar.js";
import home from "./components/paginas/home.js";
import contato from "./components/paginas/contato.js";
import sobre from "./components/paginas/sobre.js";
import servico from "./components/paginas/servicos.js";


const app = document.getElementById('app');


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

/



app.innerHTML = '<h1> Bem vindos! </h1>';
