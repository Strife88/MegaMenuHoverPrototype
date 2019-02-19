var arrayOfObjects = [
  {
    "Text": "Лекарственные препараты",
    "Icon": 11
  },
  {
    "Text": "БАДы",
    "Icon": 10
  },
  {
    "Text": "Мама и малыш ",
    "Icon": 9
  },
  {
    "Text": "Бытовая химия и гигиена",
    "Icon": 8
  },
  {
    "Text": "Косметика",
    "Icon": 7
  },
  {
    "Text": "Витамины и антиоксиданты",
    "Icon": 6
  },
  {
    "Text": "Спорт и фитнес",
    "Icon": 5
  },
  {
    "Text": "Медицинские изделия",
    "Icon": 4
  },
  {
    "Text": "Оптика",
    "Icon": 3
  },
  {
    "Text": "Медицинские приборы",
    "Icon": 2
  }
];

var secondLevelCatItems = [
  {
    "Text": "Для сердца и сосудов"
  },
  {
    "Text": "Желудочно-кишечный тракт"
  },
  {
    "Text": "Гинекология и контрацептивы"
  },
  {
    "Text": "Урология"
  },
  {
    "Text": "Неврология"
  },
  {
    "Text": "От простуды"
  },
  {
    "Text": "Противовирусные средства"
  },
  {
    "Text": "Дыхательная система"
  },
  {
    "Text": "Онкология"
  },
  {
    "Text": "Дерматология"
  },
  {
    "Text": "Стоматология"
  },
  {
    "Text": "Органы чувств (зрение, слух)"
  },
  {
    "Text": "Гомеопатия"
  },
  {
    "Text": "Гормональные препараты"
  },
  {
    "Text": "наружные средства (мази, крема, пластыри)"
  },
  {
    "Text": "Иммунитет"
  },
  {
    "Text": "От аллергии"
  },
  {
    "Text": "Обезболивающие средства"
  },
  {
    "Text": "Болезни крови"
  },
  {
    "Text": "Опорно-двигательный аппарат"
  },
  {
    "Text": "Антибактериальные средства"
  },
  {
    "Text": "Противопаразитарные препараты"
  },
  {
    "Text": "Лекарственные травы"
  },
  {
    "Text": "Лечение зависимостей"
  },
  {
    "Text": "Разное"
  }
];

console.log(arrayOfObjects[1].Text);
console.log(arrayOfObjects[1].Icon);
            
            

var createTag = function(tag,parent,classname1,classname2,text,parentNumber,idenifier) {
 var element = document.createElement(tag);
 if(classname1) {
 element.classList.add(classname1);
 }
 if(classname2) {
 element.classList.add(classname2);  
 }
 if(text){
 element.innerHTML = text;
 }
 var container = document.getElementsByClassName(parent);
 if(parentNumber) {
     container[parentNumber].appendChild(element);   
 }
 else {
 container[0].appendChild(element);
 if(idenifier){
 element.setAttribute("id",idenifier);
 }
 }
};


    for(i=0;i<arrayOfObjects.length;i++) {
createTag('div','RowGroup',"",'RowElement');
createTag('div','RowElement',"Icon","Icon"+arrayOfObjects[i].Icon,"",i);
createTag('h2','RowElement',"","",arrayOfObjects[i].Text,i);
createTag('div','RowElement',"Icon","icon-small","",i)
}


    for(i=0;i<secondLevelCatItems.length;i++) {
createTag('div','RowGroupSecond',"secondGroup",'RowElement');
createTag('h2','secondGroup',"","",secondLevelCatItems[i].Text,i);
createTag('div','secondGroup',"Icon","icon-small","",i)
}


