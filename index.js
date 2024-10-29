var arr = [3, 5, 10, 15, 23, 22, 25, 35, 56];
var arr1 = [];
for (i in arr) {
  if (arr[i] % 5 == 0) {
    arr1[arr1.length] = arr[i];
    // console.log(arr[i]);
  }
}
console.log(arr1);//[ 5, 10, 15, 25, 35 ]
var arrr = ["htmL", "csS", "javaScrIPT", "react", "angulaR", "noDE", "EXPREss"];
var arrr1 = [];
for (i in arrr) {
  if (arrr[i][arrr[i].length - 1] == arrr[i][arrr[i].length - 1].toUpperCase())
    arrr1[arrr1.length] = arrr[i];
}
console.log(arrr1);//[ 'htmL', 'csS', 'javaScrIPT', 'angulaR', 'noDE' ]
var arr2 = ["html", "css", "js", "react", "angular"];
var arr22 = [];
for (i in arr2)
  if (i % 2 == 0) {
    arr22[arr22.length] = arr2[i];
  }
console.log(arr22);//[ 'html', 'js', 'angular' ]
