function factorial(n) {
  let szam = parseInt(n);
  let eredmeny = 1;  
  for (let i = 1; i <= szam; i++) {
    eredmeny *= i;  
  }
  return eredmeny;  
}