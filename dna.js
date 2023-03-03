const remADN = adnString => {
    if (adnString === '') {
      return '';
    }
    
    var adnBase = ['C', 'T', 'A', 'G'];
    var result = '';
    
    for (var i = 0; i < adnString.length; i++) {
      var base = adnString[i];
      
      if (adnBase.indexOf(base) !== -1) {
        result += base;
      }
    }
    
    return result;
  }

  var adnString = 'CTAGctagctagCG';
  var nADNString = remADN(adnString);
  console.log(nADNString); // output: "CTAGCG"

  module.exports = remADN;