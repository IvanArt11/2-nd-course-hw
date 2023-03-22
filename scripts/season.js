const seasons = () => {
    let monthNumber= Number(prompt('Введите номер месяца'));
    if (monthNumber===1 || monthNumber===2 || monthNumber===12) {
        return alert('Зима');
    } else if (monthNumber>2 && monthNumber<=5) {
        return alert('Весна');
    } else if (monthNumber>5 && monthNumber<=8) {
        return alert('Лето');
    } else if (monthNumber>8 && monthNumber<=11) {
        return alert('Осень');
    } else {
        return alert('Некорректные данные');
    } 
}
