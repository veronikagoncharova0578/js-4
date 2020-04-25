let name = '';

do{
    name = prompt('введите имя короче 6 букв');
    if (name.length >= 6){
        break;
    }
    alert(name);
} while (name.length < 6);

