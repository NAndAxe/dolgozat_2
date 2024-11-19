function createArrayOfTiers(num) {
    let tomb = [];
    let strnum = num.toString();  
    let szam = 0;  
    for (let i = 0; i < strnum.length; i++) {
        szam = szam * 10 + parseInt(strnum[i]);
        szam = szam.toString();
        tomb.push(szam);  
    }
    return tomb;
}