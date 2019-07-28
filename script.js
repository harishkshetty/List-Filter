function checkDuplicates(e) {
    let serachlist = document.getElementById('holder').value;
    let list = [];
    list = [500, 700, 650, 690, 7000, 7001, 7002, 7003, 7004, 7005, 0, 1, 2, 3, 4];
    const duplicates = [];
    let value = serachlist.split(',');

    for (let index = 0; index < value.length; index++) {
        if (value[index].includes('-')) {
            let seriesValue = value[index].split('-');
            while (seriesValue[0] <= seriesValue[1]) {
                let convertedNumber = Number(seriesValue[0]);
                if (list.indexOf(convertedNumber) !== -1) {
                    duplicates.push(convertedNumber)
                } else {
                    list.push(convertedNumber)
                }
                seriesValue[0] = convertedNumber + 1;
            }
        } else {
            let convertedNumber = Number(value[index]);
            if (list.indexOf(convertedNumber) !== -1) {
                duplicates.push(convertedNumber);
            } else {
                list.push(convertedNumber)
            }
        }
    }
var parent=document.getElementById('wrap');
var child=document.createElement('h3');
var  textnode=document.createTextNode(`Duplicates: ${duplicates}`);
child.appendChild(textnode)
parent.appendChild(child)
var newlist=document.createElement('h3');
var textnode1=document.createTextNode(`New List: ${list}`);
newlist.appendChild(textnode1);
parent.appendChild(newlist)
console.log(parent,"s")

};