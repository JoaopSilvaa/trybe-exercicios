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

        listDays.addEventListener('mouseover', zoomIn);
        listDays.addEventListener('mouseout', zoomOut);
        listDays.addEventListener('click', putColor)
    
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
          if(listDays[i].style.backgroundColor === "white"){
            listDays[i].style.backgroundColor = "rgb(238,238,238)"; 
          }else{
            listDays[i].style.backgroundColor = "white";
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
       let day = event.target;
       day.style.fontSize = "40px";
        
    }

    function zoomOut(event){
        let day = event.target;
        day.style.fontSize = "20px";
    }

    function task(param){
        let myTasks = document.querySelector('.my-tasks');
        let task = document.createElement('span');

        task.innerHTML = param;
        myTasks.appendChild(task);
    }

    function legend(cor){
        let myTasks = document.querySelector('.my-tasks');

        let div = document.createElement('div');
        div.style.backgroundColor = cor;
        div.className = 'task';

        myTasks.appendChild(div);
    
        div.addEventListener('click', changeTask);
    }
    
    function changeTask(){
        let div = document.querySelectorAll('.task');

        for(let i = 0 ; i < div.length; i+=1){
            if(div[i].className == 'task selected'){
                div[i].className = 'task';
            }else{
                div[i].className = 'task selected';
            }
        }
    }
    
    task("cozinhar");
    legend('green');
    
    function putColor(event){
        let div = document.querySelectorAll('.task');
        let day = event.target;
        for(let i = 0 ; i < div.length; i+=1){
            if(day.style.color == div[i].style.backgroundColor){
                day.style.color = "rgb(119,119,119)";
            }else if(div[i].className == 'task selected'){
                day.style.color = div[i].style.backgroundColor;
            }
        }
    }

    function addCompromisso(){
        let ulContainer = document.querySelector('.task-list');
        let input = document.querySelector('#task-input');
        let btnAdd = document.querySelector('#btn-add');  
    
        btnAdd.addEventListener('click', function(){
            if(input.value.length > 0){
                let li = document.createElement('li');
                li.innerText = input.value;
                ulContainer.appendChild(li);
                input.value = '';
            }else{
                alert("ERRO!!! DIGITE ALGUMA COISA")
            }
        })

        input.addEventListener('keyup', function(event){
            if(event.key === 'Enter' && input.value.length>0){
                let li = document.createElement('li');
                li.innerText = input.value;
                ulContainer.appendChild(li);
                input.value = '';
            }
        })
    }

    addCompromisso();
