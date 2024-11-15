'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function checkSorted(arr) {
    return arr.every((value, index, array) => 
                     index === 0 || value >= array[index - 1]);
}

function main() {
    const tc = readline();


    for (let i = 1; i <= tc; i++) {
        solve();
    }

}

function solve(){
    let n = parseInt(readline());

    let arr = [0, ...readline().split(" ").map(Number)];

    let cnt = 0, mx = arr[1];

    let ans1 = [], ans2 = [];

    ans1.push(arr[1]);

    for(let i = 2; i <= n; i++){
        if(arr[i] < arr[i - 1]){
            cnt = i; break;
        }

        cnt = i + 1;
        ans1.push(arr[i]);
    }

    if(cnt <= n){
        for(let i = cnt; i <= n; i++){
            ans2.push(arr[i]);
        }
    }

    if(ans2.length == 0){
        console.log("Yes"); return;
    }

    if(checkSorted(ans2)){
        for(let i = 0; i < ans2.length; i++){
            if(ans1[0] < ans2[i]){
                console.log("No");
                return;
            }
        }

        console.log("Yes");
    }
    else{
        console.log("No");
    }


}
