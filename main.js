var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');
if(x <= z && x>= y) {
    alert('Среднее число ' + x);
}else if(x <= z && x>= y) {
    alert('Среднее число ' + x)
}else if(y <= z && y>= x) {
    alert('Среднее число ' + y);
}else if(y <= x && y>= z) {
    alert('Среднее число ' + y)
}else if(z <= y && y>= x) {
    alert('Среднее число ' + z)
}else if(z <= x && z>= y) {
    alert('Среднее число ' + z)
}
