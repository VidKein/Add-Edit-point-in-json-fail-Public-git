import { edit } from './module/edit.js';//edit
import { planing } from './module/planing.js'//planing
console.log(edit, planing);
    //Нивелирование - начальные точки(базовые)
    //Информацинный блок Нивелирования    
    let pointBaseNiv = document.querySelector("#levelingBasic"); 
    let levelingBaseLeng = document.querySelector("#levelingBasicLength");//количество
    let planingBaseNiv =  parsinWork(planing.baseNiv);
    if (isArrayEmpty(planingBaseNiv)) {
        let nouWork = document.createElement('div');
        nouWork.className = "pointJobs";
        nouWork.textContent = "No work leveling points"
        pointBaseNiv.appendChild(nouWork);
        console.log("Базовых точек для невилированию нет"); 
    } else {
        levelingBaseLeng.textContent = planingBaseNiv.length+1;
        planingBaseNiv.forEach(row => {
           if (row["position"] !== undefined) { 
            //Создаем новый div
            const jobDivNiv = document.createElement('div');
            jobDivNiv.className = 'pointJobs'; // Добавляем класс
            //Создаем доплнительные атрибуты
            jobDivNiv.setAttribute("data-name", "Base");
            jobDivNiv.setAttribute("data-jobs", "niv");
            jobDivNiv.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointBaseNiv.appendChild(jobDivNiv);
            }else{
            // Создаем новый div
            const jobDivNivError = document.createElement('div');
            jobDivNivError.className = 'pointJobsError'; // Добавляем класс
            jobDivNivError.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointBaseNiv.appendChild(jobDivNivError);
            //Добавляем span с финкцией изменения 
            let pointError = document.createElement('div');
            pointError.className = 'pointError';
            //Создаем доплнительные атрибуты
            jobDivNivError.setAttribute("data-name", "Base");
            jobDivNivError.setAttribute("data-jobs", "niv");
            jobDivNivError.appendChild(pointError);
            console.log("Базовые точки НИВ с числом - "+row["namber"]+" в базе не найдены"); 
            }  
        })
    }

    //Нивелирование - рабочие 
    //Информацинный блок Нивелирования
    let pointJobsNiv = document.querySelector("#levelingJobs"); 
    let levelingJobsLeng = document.querySelector("#levelingJobsLength");//количество
    let planingWorkNiv =  parsinWork(planing.niv);
    if (isArrayEmpty(planingWorkNiv)) { 
        let nouWork = document.createElement('div');
        nouWork.className = "pointJobs";
        nouWork.textContent = "No work leveling points"
        pointJobsNiv.appendChild(nouWork);
        console.log("Работы по невилированию нет");
    }else{
        levelingJobsLeng.textContent = planingWorkNiv.length+1;
        planingWorkNiv.forEach(row => {
           if (row["position"] !== undefined) { 
            //Создаем новый div
            const jobDivNiv = document.createElement('div');
            jobDivNiv.className = 'pointJobs'; // Добавляем класс
            //Создаем доплнительные атрибуты
            jobDivNiv.setAttribute("data-name", "poligons");
            jobDivNiv.setAttribute("data-jobs", "niv");
            jobDivNiv.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointJobsNiv.appendChild(jobDivNiv);
            }else{
            // Создаем новый div
            const jobDivNivError = document.createElement('div');
            jobDivNivError.className = 'pointJobsError'; // Добавляем класс
            jobDivNivError.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointJobsNiv.appendChild(jobDivNivError);
            //Добавляем span с финкцией изменения 
            let pointError = document.createElement('div');
            pointError.className = 'pointError';
            //Создаем доплнительные атрибуты
            jobDivNivError.setAttribute("data-name", "poligons");
            jobDivNivError.setAttribute("data-jobs", "niv");
            jobDivNivError.appendChild(pointError);
            console.log("Точки НИВ с числом - "+row["namber"]+" в базе не найдены"); 
            }  
        })  
    }

    //Тахеометрия - начальные точки(базовые)
    //Информацинный блок Нивелирования
    let pointBaseTax = document.querySelector("#tacheometryBasic"); 
    let tacheometryBaseLength = document.querySelector("#tacheometryBasicLength");//количество
    let planingBaseTrig =  parsinWork(planing.baseTrig); 
    if (isArrayEmpty(planingBaseTrig)) {
        let nouWork = document.createElement('div');
        nouWork.className = "pointJobs";
        nouWork.textContent = "No work tacheometry points"
        pointBaseTax.appendChild(nouWork);
        console.log("Базовых точек для тахеoметрии нет");
    }else{
        tacheometryBaseLength.textContent = planingBaseTrig.length+1;
        planingBaseTrig.forEach(row => {
           if (row["position"] !== undefined) {
            //Создаем новый div
            const jobDivTax = document.createElement('div');
            jobDivTax.className = 'pointJobs'; // Добавляем класс
            //Создаем доплнительные атрибуты
            jobDivTax.setAttribute("data-name", "Base");
            jobDivTax.setAttribute("data-jobs", "trig");
            jobDivTax.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointBaseTax.appendChild(jobDivTax);
            }else{
            // Создаем новый div
            const jobDivTaxError = document.createElement('div');
            jobDivTaxError.className = 'pointJobsError'; // Добавляем класс
            jobDivTaxError.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointBaseTax.appendChild(jobDivTaxError);
            //Добавляем span с финкцией изменения 
            let pointError = document.createElement('div');
            pointError.className = 'pointError';
            //Создаем доплнительные атрибуты
            jobDivTaxError.setAttribute("data-name", "Base");
            jobDivTaxError.setAttribute("data-jobs", "trig");
            jobDivTaxError.appendChild(pointError);
            console.log("Базовые точки ТАХ с числом - "+row["namber"]+" в базе не найдены"); 
            }  
        }) 
    }
    
    //Тахеометрия - рабочие 
    //Информацинный блок Нивелирования
    let pointJobsTax = document.querySelector("#tacheometryJobs"); 
    let tacheometryJobsLength = document.querySelector("#tacheometryJobsLength");//количество
    let planingWorkTax =  parsinWork(planing.trig); 
    if (isArrayEmpty(planingWorkTax)) {
        let nouWork = document.createElement('div');
        nouWork.className = "pointJobs";
        nouWork.textContent = "No work tacheometry points"
        pointJobsTax.appendChild(nouWork);
        console.log("Работы по тахеoметрии нет");
    }else{
        tacheometryJobsLength.textContent = planingWorkTax.length+1;
        planingWorkTax.forEach(row => {
           if (row["position"] !== undefined) {
            //Создаем новый div
            const jobDivTax = document.createElement('div');
            jobDivTax.className = 'pointJobs'; // Добавляем класс
            //Создаем доплнительные атрибуты
            jobDivTax.setAttribute("data-name", "poligons");
            jobDivTax.setAttribute("data-jobs", "trig");
            jobDivTax.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointJobsTax.appendChild(jobDivTax);
            }else{
            // Создаем новый div
            const jobDivTaxError = document.createElement('div');
            jobDivTaxError.className = 'pointJobsError'; // Добавляем класс
            jobDivTaxError.textContent = row["namber"]; // Устанавливаем текст внутри div
            //Добавляем div в контейнер
            pointJobsTax.appendChild(jobDivTaxError);
            //Добавляем span с финкцией изменения 
            let pointError = document.createElement('div');
            pointError.className = 'pointError';
            //Создаем доплнительные атрибуты
            jobDivTaxError.setAttribute("data-name", "poligons");
            jobDivTaxError.setAttribute("data-jobs", "trig");
            jobDivTaxError.appendChild(pointError);
            console.log("Точки ТАХ с числом - "+row["namber"]+" в базе не найдены"); 
            }  
        }) 
    }    

//Функция парсинга информации переданной из planing.js
function parsinWork(planing) {
    let arrayPoint = [];
    planing.forEach(point => {
        const parsedData = {};
        const regex = /namber:\s*([\w\d\(\)-]+)|position:\s*([\d\s,.]+)|vycka:\s*([\d.,]+)|date:\s*([\d.]+)|JTSK:\s*([\w\d\s]+)|positionType:\s*(\w+)/g;
        let match;
        while ((match = regex.exec(point)) !== null) {            
            if (match[1]) parsedData["namber"] = match[1];
            if (match[2]) parsedData["position"] = match[2]
                .split(/[,\s]+/) // Разделяем по запятым и пробелам
                .filter(num => num.trim() !== "") // Убираем пустые строки
                .map(Number); // Преобразуем в числа
            if (match[3]) parsedData["vycka"] = parseFloat(match[3].replace(',', '.'));;
            if (match[4]) parsedData["date"] = match[4];
            if (match[5]) parsedData["JTSK"] = match[5].trim();
            if (match[6]) parsedData["positionType"] = match[6];
        }
        arrayPoint.push(parsedData); 
    });
    return arrayPoint;
}


//Effects анимация accordion
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  //Toggle between adding and removing the "active" class to highlight the option that controls the panel
  this.classList.toggle("activeAccord");
  //Switch between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}   

///Действия при нажатии на РАБОЧИИ кнопки 
let importPoint = document.querySelector(".fullEdit");
for (let i = 0; i < importPoint.children.length; i++) {
    let childrenElement = importPoint.children[i];
    childrenElement.addEventListener("click",()=>{
        if (childrenElement.id ==="infoPointkBlock") {
            let infoPointkBlock = document.querySelector(".points-wrapper");
            let blockPoint = infoPointkBlock.children;
            for (let i = 0; i < blockPoint.length; i++) {
                let point = blockPoint[i].children;
                for (let i = 0; i < point.length; i++) {
                    if (point[i].className === "pointJobsError") {
                        point[i].addEventListener("click",()=>{
                            let namePointError = point[i].textContent;
                            let dataName = point[i].getAttribute('data-name');
                            let dataJobs = point[i].getAttribute('data-jobs');
                            let naminfoData = document.querySelector(".namePoint");
                            //Создаем новые атрибуты
                            naminfoData.setAttribute("data-name", dataName);
                            naminfoData.setAttribute("data-jobs", dataJobs);
                            naminfoData.innerText = namePointError;   
                            document.querySelector("#import").style.display = "block";
                            document.querySelector(".close-import").addEventListener("click", ()=>{document.querySelector("#import").style.display = "none";;
                        })
                        })
                    }
                }

            }
        }
    })
}

// Проверка пустого объекта
let obj = {1:"0"};
console.log(obj);
if (isCompletelyEmpty(planingBaseNiv)) {
    console.log("- обьект Пуст");
} else {
    console.log("- обьект Полон");
}
function isCompletelyEmpty(obj) {
    if (obj === null || obj === undefined) return true; // null или undefined
    if (typeof obj !== 'object') return true; // Не объект
    if (Array.isArray(obj)) return obj.length === 0; // Пустой массив
    if (Object.keys(obj).length === 0) return true; // Пустой объект

    // Глубокая проверка вложенных объектов
    return Object.values(obj).every(value => isCompletelyEmpty(value));
}

// Проверка пустого массива
let arr = ["0000"];
console.log(arr);
if (isArrayEmpty(arr)) {
    console.log("- массив Пуст");
} else {
    console.log("- массив Полон");
}
function isArrayEmpty(arr) {
    // Проверка на null, undefined и тип
    if (!arr || typeof arr !== 'object') return true;

    // Проверка на массив
    if (!Array.isArray(arr)) return true;

    // Проверка длины массива
    return arr.length === 0;
}

//Определение массив это или объект
console.log("- edit - "+getType(edit));
console.log("- planing - "+getType(planing));
console.log("- planing.baseNiv - "+getType(planing.baseNiv));
console.log("- planingBaseNiv - "+getType(planingBaseNiv));
console.log("- parsinWork - "+getType(parsinWork(planing.trig)));

function getType(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value !== null && typeof value === 'object') {
        return 'object';
    } else {
        return typeof value;
    }
}