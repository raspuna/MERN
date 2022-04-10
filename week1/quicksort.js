//let a = [3,5,2,7,9]// 18, 4, 11, 372, -6] 
let a = [3,5,2,7,9,18,4,11,372,-6]; 

function swap(i, j) {
    console.log("swap",i,"(", a[i], ")->",j,"(", a[j],")");
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
function pivot(left, right) {
    //let i = 0;
    //let j = a.length - 1;
    const pivot = a[left];
    let i = left;
    let j = right;

    while(i<j) {
        while ( pivot < a[j] ) {
            j--;
        }
        while ( i<j && pivot >= a[i]) {
            i++;
        }
        swap(i, j);
    }
    a[left] = a[i];
    a[i] = pivot;
    console.log("i", i, a[i]);
    console.log("j", j, a[j]);
    return i;
}

function sort(i, j) {
    if (i>=j) {
        return;
    }
    console.log("sort", i, j)
    const p = pivot(i, j);
    console.log("pivot", p, a[p]);
    console.log(a);
    
    sort(i, p-1);
    sort(p+1, j);
}
function quicksort() {
    sort(0, a.length - 1);
}

console.log(a);
quicksort();