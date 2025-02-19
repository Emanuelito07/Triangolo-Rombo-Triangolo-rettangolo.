let AltezzaTriangolo = 10;

for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
    let righe = '';
    for(let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++){
        righe += ' '
    }
    for(let Segno = 1; Segno <= 2 * Righe - 1; Segno++){
        righe += '*'
    }
    console.log(righe);
}

console.log('');
console.log('');

AltezzaMetàRombo = 10;
for (let Righe = 1; Righe <= AltezzaMetàRombo; Righe++) {
    let righe = '';
    for (let Spazio = 1; Spazio <= AltezzaMetàRombo - Righe; Spazio++) {
        righe += ' '
    }
    for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
        righe += '*'
    }
    console.log(righe);
}
for (let Righe = AltezzaMetàRombo - 1; Righe >= 1; Righe--) {
    let righe = '';
    for (let Spazio = 1; Spazio <= AltezzaMetàRombo - Righe; Spazio++) {
        righe += ' '
    }
    for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
        righe += '*'
    }
    console.log(righe);
}

console.log('');
console.log('');

let AltezzaTriangoloRettangolo = 10;

for (let Righe = 1; Righe <= AltezzaTriangoloRettangolo; Righe++) {
    let righe = '';
    for(let Spazio = 1; Spazio <= AltezzaTriangoloRettangolo - 1; Spazio++){
        righe += ' '
    }
    for(let Segno = 1; Segno <= 2 * Righe - 1; Segno++){
        righe += '*'
    }
    console.log(righe);
}