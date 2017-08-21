 //console.log(process.argv[2])
var suma = 0;
 for (i=2;i<process.argv.length;i++){
   suma += Number(process.argv[i]);
   //console.log("numero "+i+ " :" + process.argv[i]);
 }
 console.log(suma);
