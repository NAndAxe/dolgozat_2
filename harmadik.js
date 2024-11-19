function myParseInt(str) {
    let szam = "";
    let regex = /\d+/gi;
    for (let i = 0; i < str.length +1; i++) {
        if (regex.test(str[i])){
            szam = szam + str[i];
        }
    }
    return parseInt(szam);
  }