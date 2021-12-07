function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays(){
    
    let ul = document.querySelector('#days');
  
    for(let i = 0; i<dezDaysList.length; i+=1){
        let days = dezDaysList[i];
        let listDays = document.createElement("li");

        listDays.innerText = days;
        listDays.className = "day";

        if(listDays.innerText == 24 || listDays.innerText == 25 || listDays.innerText == 31){
            listDays.className += " holiday";
        }

        if(listDays.innerText == 3 || listDays.innerText == 10 || listDays.innerText == 17 || listDays.innerText == 24 || listDays.innerText == 31){
            listDays.className += " friday";
        }

        ul.appendChild(listDays);
    
    }  
  }

  createDays();


  function createButtonHolidays(param){
    let button = document.createElement("button");
    button.innerHTML = param;
    button.idName = "btn-holiday";

    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(button);
    
    button.addEventListener("click", changeBackgroundHolidays);
}

createButtonHolidays("Feriados");

  function changeBackgroundHolidays(){
      let listDays = document.querySelectorAll('.holiday');
      for(let i=0;i<listDays.length;i+=1){
          if(listDays[i].style.backgroundColor === "blue"){
            listDays[i].style.backgroundColor = "rgb(238,238,238)"; 
          }else{
            listDays[i].style.backgroundColor = "blue";
          }
      }
  }

  function createButtonFridays(param){
    let button = document.createElement("button");
    button.innerHTML = param;
    button.idName = "btn-friday";

    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(button);
    
    button.addEventListener("click", transformFridays);
}

    let fridays = [3, 10, 17, 24, 31];

    function transformFridays(){
        let listDays = document.querySelectorAll('.friday');
        for(let i=0;i<listDays.length;i+=1){
            if(listDays[i].innerText == "SEXTOU :D"){
                listDays[i].innerText = fridays[i];
            }else{
                listDays[i].innerText =  "SEXTOU :D";
            }
        }
    }

createButtonFridays("Sexta-Feira");

    function zoomIn(event){
        let listDays = document.querySelectorAll('.day');
        listDays.addEventListener('mouseover', zoomIn);
        
    }

    function zoomOut(event){

    }