var arr = [10,5,8,12,7,4,1];
var ter = [-2, -5, 7, 1, 2, 5, 3];
var arrMaks = [];
var arrMin = [10];
var jumlah1 = 0;
var jumlah2 = 0;

// function kecil ke besar
function kecilKeBesar(arr) {
    var l = arr.length;
    for (var i = l - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// menghitung maks
for (var i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i + 4]) {
        arrMaks.push(arr[0])
    }
    if (arr[3] > arr[i - 4]) {
        arrMaks.push(arr[3])
    }
}


// menghitung min
for (var k = 0; k < arr.length; k++) {
    if (arr[1] < arr[k]) {
        arrMin.push(arr[1])

    }
    if (arr[k] < arr[1]) {
       arrMin.push(arr[k])
    }
}


// jenis 
function JenisMin(array){
    for (var p = 1; p < array.length; p++) {
        
        if(array[p-1] != array[p]){
            jumlah1++;
        }
    }
}

function JenisMaks(array) {
    for (var p = 1; p < array.length; p++) {
        // console.log(array[p-1])
        if (array[p - 1] != array[p]) {
            jumlah2++;
        }
    }
}


// memanggil fungsi dan hasil dari fungsi
var hasil = [];
JenisMin(arrMin);
hasil.push(jumlah1);
JenisMaks(arrMaks);
hasil.push(jumlah2);

console.log("array Min : " +arrMin)
console.log("array Maks : " + arrMaks)

console.log("Hasil Nomer 1 : "+ kecilKeBesar(ter));
console.log("Hasil Nomer 2 : " +hasil[0] +","+hasil[1])

