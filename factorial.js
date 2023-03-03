const fac = num => {
    if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * fac(num - 1);
      }
}

 
//console.log(fac(4));


module.exports = fac;