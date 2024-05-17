
const cartButton = document.querySelector("#cartButton")
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function (event) {
  modal.classList.add("is-open");
});

close.addEventListener("click", function(event){
  modal.classList.remove("is-open");
});


const cartButtons = document.querySelector("#cartButton_registr")
const modals = document.querySelector(".modal-two");
const close_tw = document.querySelector(".close-two");

cartButtons.addEventListener("click", function (event) {
  modals.classList.add("is-open-two");
});

close_tw.addEventListener("click", function(event){
  modals.classList.remove("is-open-two");
});


const cartButton_two = document.querySelector("#cartButton_two")
const modal_two = document.querySelector(".modal");
const close_two = document.querySelector(".close");

cartButton_two.addEventListener("click", function (event) {
  modal_two.classList.add("is-open");
});

close_two.addEventListener("click", function(event){
  modal_two.classList.remove("is-open");
});

const cartButton_free = document.querySelector("#cartButton_free")
const modal_free = document.querySelector(".modal");
const close_free = document.querySelector(".close");

cartButton_free.addEventListener("click", function (event) {
  modal_free.classList.add("is-open");
});

close_free.addEventListener("click", function(event){
  modal_free.classList.remove("is-open");
});

const cartButton_four = document.querySelector("#cartButton_four")
const modal_four = document.querySelector(".modal");
const close_four = document.querySelector(".close");

cartButton_four.addEventListener("click", function (event) {
  modal_four.classList.add("is-open");
});

close_four.addEventListener("click", function(event){
  modal_four.classList.remove("is-open");
});

const cartButton_five = document.querySelector("#cartButton_five")
const modal_five = document.querySelector(".modal");
const close_five = document.querySelector(".close");

cartButton_five.addEventListener("click", function (event) {
  modal_five.classList.add("is-open");
});

close_five.addEventListener("click", function(event){
  modal_five.classList.remove("is-open");
});

const cartButton_six = document.querySelector("#cartButton_six")
const modal_six = document.querySelector(".modal");
const close_six = document.querySelector(".close");

cartButton_six.addEventListener("click", function (event) {
  modal_six.classList.add("is-open");
});

close_six.addEventListener("click", function(event){
  modal_six.classList.remove("is-open");
});

const cartButton_seven = document.querySelector("#cartButton_seven")
const modal_seven = document.querySelector(".modal");
const close_seven = document.querySelector(".close");

cartButton_seven.addEventListener("click", function (event) {
  modal_seven.classList.add("is-open");
});

close_seven.addEventListener("click", function(event){
  modal_seven.classList.remove("is-open");
});

//регистрационная страница и войти (проверка пороля)
function ChekPassword(){ 
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});
  var parol1 = document.getElementById('pass1'); 
  var parol1_text1 = document.getElementById('pass-1'); 
  var parol2 = document.getElementById('pass2'); 
  var parol2_text2 = document.getElementById('pass-2'); 
  var parol3 = document.getElementById('pass3'); 
  var parol3_text3 = document.getElementById('pass-3'); 
  var knopO4ka = document.getElementById('register-button'); 
  if(parol1.value.length<7){ 
      parol1_text1.textContent='Минимум 7 символов!'; 
      knopO4ka.setAttribute('disabled', ''); 
  } 
  else{ 
      let chisl = 0; 
      let znak = 0; 
      for (i=0; i<parol1.value.length; i++){ 
          if(parol1.value[i]/1==parol1.value[i]){ 
              chisl++; 
          } 
          if(parol1.value[i]=="!" || parol1.value[i]=="*" || parol1.value[i]=="$"){ 
              znak++; 
          }  
      } 
      if(chisl>0 && znak>0){   
          parol1_text1.textContent = ''; 
          if(parol1.value == parol2.value){ 
              parol2_text2.textContent=''; 
              knopO4ka.removeAttribute('disabled', ''); 
          } 
          else{ 
              parol2_text2.textContent='Пароли не совпадают!'; 
              knopO4ka.setAttribute('disabled', ''); 
          }      
           
      } 
      else if(chisl>0 && znak == 0){ 
          parol1_text1.textContent='пароль должен содержать символы "!",  "$", "*"'; 
          knopO4ka.setAttribute('disabled', ''); 
      } 
      else if(chisl==0 && znak >0){    
          parol1_text1.textContent='пароль должен содержать минимум одну цифру'; 
          knopO4ka.setAttribute('disabled', '');             
      } 
      else{ 
          parol1_text1.textContent='пароль должен содержать минимум одну цифру и символы "!",  "$", "*"'; 
          knopO4ka.setAttribute('disabled', ''); 
      } 
  }   
  
  if(parol3.value.length<7){ 
    parol3_text3.textContent='Минимум 7 символов!'; 
    knopO4ka.setAttribute('disabled', ''); 
  } 
  else{ 
    let chisl = 0; 
    let znak = 0; 
    for (i=0; i<parol3.value.length; i++){ 
        if(parol3.value[i]/1==parol3.value[i]){ 
            chisl++; 
        } 
        if(parol3.value[i]=="!" || parol3.value[i]=="*" || parol3.value[i]=="$"){ 
            znak++; 
        }  
    } 
    if(chisl>0 && znak>0){   
        parol3_text3.textContent = '';         
    } 
    else if(chisl>0 && znak == 0){ 
        parol3_text3.textContent='пароль должен содержать символы "!",  "$", "*"'; 
        knopO4ka.setAttribute('disabled', ''); 
    } 
    else if(chisl==0 && znak >0){    
        parol3_text3.textContent='пароль должен содержать минимум одну цифру'; 
        knopO4ka.setAttribute('disabled', '');             
    } 
    else{ 
        parol3_text3.textContent='пароль должен содержать минимум одну цифру и символы "!",  "$", "*"'; 
        knopO4ka.setAttribute('disabled', ''); 
    } 
  }   
}
