const remADN = require ('./dna');

test ('Para la siguiente cadena CTAGctagCT se espera recibir CTAGCT', () => {
    expect(remADN('CTAGctagCT')).toBe('CTAGCT');
})

test ('Para la siguiente cadena CTAGctagCTAGAG se espera recibir CTAGCT', () => {
    expect(remADN('CTAGctagCTAGAG')).toBe('CTAGCTAGAG');
})

// test ('Para la siguiente cadena CTAGctagCT se espera recibir CTAGCT', () => {
//     expect(remADN('CTAGctagCT')).toBe('CTAG'); //debe arrojar como  resultado erroneo 
// })