import { data } from "../data.js";
let contendorEncuesta = document.querySelector(".contenedor_encuesta");
let contendorEncuestaMaster = document.querySelector(".contenedor_encuesta_master");
let inputRegistraUser = document.querySelector(".input_buscar");
let contendorFinaliza = document.querySelector(".contenedor_finaliza_master");
let vuelveInicio = document.querySelector("#btn-volver.btn-primario");
let elWelcomeBtn = document.getElementById("btn-primario");
let elWelcomeScr = document.getElementById("buscador");
let contenedorEncuestaGuardada = document.querySelector(".contenedor_registro");
let contenedorEncuestaGuardadaMaster = document.querySelector(".contendor_registros_master");
let btnEncuestasGuardadas = document.querySelector("#btn-secundario.btn-primario");
let btnEncuestasVolver = document.querySelector("#btn-volver-inicio.btn-primario");

let history = [];

function Encuesta() {
  this.questions = [];
  this.options = [];
  this.indexCurrentQuestion = 0;

  this.agregaQuestion = function (question) {
    this.questions.push(question);
  };

  this.muestraActualQuestion = function () {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement();
    } else {
      contendorEncuesta.classList.add("hidden");
      contendorFinaliza.style.display = "block";
      console.log("test", history);
    }
  };
}

function FormaEncuesta(question, options) {
  this.question = question;
  this.options = options;

  this.getElement = function () {
    let title = document.createElement("h1");
    title.textContent = "Sistema de Encuestas";
    contendorEncuesta.append(title);

    let questionTitle = document.createElement("h2");
    questionTitle.classList.add("question_titulo");
    questionTitle.textContent = this.question;
    contendorEncuesta.append(questionTitle);

    let questionOption = document.createElement("ul");
    questionOption.classList.add("question_options");
    
    this.options.forEach((option, index = 0) => {
      
      console.log(option, index )
      let elOption = document.createElement("li");
      elOption.classList.add("option");
      elOption.textContent = option;
      elOption.id = index + 1;
      elOption.addEventListener("click", this.cargaPreguntas);
      questionOption.append(elOption);
    });
    contendorEncuesta.append(questionOption);
  };

  this.cargaPreguntas = (event) => {
    // Se guarda la opcion seleccionada
    let answerSelected = event.target;
    // Lleno el array de respuestas (history)
    let valueOption = event.target.outerText;
    console.log("validando texto html", valueOption);
    guardaEncuesta(question, valueOption);

    // Condiciones
    if (answerSelected.textContent == option1.options[1]) {
      encuesta.indexCurrentQuestion = 6;
    }
    if (answerSelected.textContent == option5.options[1]) {
      encuesta.indexCurrentQuestion = 6;
    }
    if (answerSelected.textContent == option8.options[1]) {
      encuesta.indexCurrentQuestion = 9;
    }
    if (answerSelected.textContent == option11.options[0]) {
      encuesta.indexCurrentQuestion = 11;
    }
    contendorEncuesta.textContent = "";
    encuesta.indexCurrentQuestion++;
    encuesta.muestraActualQuestion();
  };
}

let option1 = new FormaEncuesta(data[0].question, data[0].options);
let option2 = new FormaEncuesta(data[1].question, data[1].options);
let option3 = new FormaEncuesta(data[2].question, data[2].options);
let option4 = new FormaEncuesta(data[3].question, data[3].options);
let option5 = new FormaEncuesta(data[4].question, data[4].options);
let option6 = new FormaEncuesta(data[5].question, data[5].options);
let option7 = new FormaEncuesta(data[6].question, data[6].options);
let option8 = new FormaEncuesta(data[7].question, data[7].options);
let option9 = new FormaEncuesta(data[8].question, data[8].options);
let option10 = new FormaEncuesta(data[9].question, data[9].options);
let option11 = new FormaEncuesta(data[10].question, data[10].options);
let option12 = new FormaEncuesta(data[11].question, data[11].options);
let option13 = new FormaEncuesta(data[12].question, data[12].options);
let option14 = new FormaEncuesta(data[13].question, data[13].options);
let option15 = new FormaEncuesta(data[14].question, data[14].options);
let option16 = new FormaEncuesta(data[15].question, data[15].options);
let option17 = new FormaEncuesta(data[16].question, data[16].options);
let option18 = new FormaEncuesta(data[17].question, data[17].options);
let option19 = new FormaEncuesta(data[18].question, data[18].options);
let option20 = new FormaEncuesta(data[19].question, data[19].options);

let questions = [
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  option11,
  option12,
  option13,
  option14,
  option15,
  option16,
  option17,
  option18,
  option19,
  option20,
];

//recorro las instacias
let encuesta = new Encuesta();
window.addEventListener(
  "load",
  questions.forEach((question) => {
    encuesta.agregaQuestion(question);
  })
);

/*

-----------------FUNCTIONS-----------------

*/
// Salto inicio a preguntas

function verPrimeraPregunta() {
  elWelcomeScr.classList.add("hidden");
  contendorEncuestaMaster.style.display = "block";
  //remove del hidden que se agrega en la primera encuesta
  contendorEncuesta.classList.remove("hidden");
  history = []; //limpio el array por cada nueva escuesta
  guardaHistoryName();
  encuesta.muestraActualQuestion();
}
elWelcomeBtn.addEventListener("click", verPrimeraPregunta);

function guardaHistoryName() {
  history.push({
    user: inputRegistraUser.value,
  });
  console.log("test", history);
}
function guardaEncuesta(question, oprionSelect) {
  history.push({
    //user: userNameArray,
    question: question,
    option: oprionSelect,
  });
}

let volverInicio = (history) => {
  contendorFinaliza.style.display = "none";
  elWelcomeScr.classList.remove("hidden");
  //formateo indice y opciones.. para que pueda entrar nuevamente
  //en la condición de la funcion muestraActualQuestion
  encuesta.indexCurrentQuestion = 0;
  encuesta.options = [];
  printEncuestaGuardada(history);
};
vuelveInicio.addEventListener("click", volverInicio);

function printEncuestaGuardada() {
  let htmlName = document.createElement("p");
  htmlName.classList.add("titulo_encuesta");
  htmlName.id = "text_titulo_encusta";
  htmlName.innerText = "CLIENTE:" + history[0].user.toUpperCase();
  contenedorEncuestaGuardada.appendChild(htmlName);

  history.shift();
  history.forEach(function (registro) {
    let htmlQuestion = document.createElement("p");
    htmlQuestion.innerText = registro.question;
    htmlQuestion.classList.add("titulo_pregunta");
    htmlName.appendChild(htmlQuestion);

    let htmlOption = document.createElement("p");
    htmlOption.innerText = registro.option;
    htmlOption.classList.add("titulo_option");
    htmlName.appendChild(htmlOption);
  });
}

// Ver pantalla de registros
let verRegistros = () => {
  elWelcomeScr.classList.add("hidden");
  contenedorEncuestaGuardadaMaster.style.display = "block";
};
btnEncuestasGuardadas.addEventListener("click", verRegistros);

let volverInicioRegistro = () => {
  contenedorEncuestaGuardadaMaster.style.display = "none";
  elWelcomeScr.classList.remove("hidden");
};
btnEncuestasVolver.addEventListener("click", volverInicioRegistro);
