let AltezzaTriangolo = 50;

function IvariTriangoli() {
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
    for (let Righe = AltezzaTriangolo - 1; Righe >= 1; Righe--) {
        let righe = '';
        for (let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++) {
            righe += ' '
        }
        for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
            righe += '*'
        }
        console.log(righe);
    }
    for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
        let righe = '';
        for(let Spazio = 1; Spazio <= AltezzaTriangolo - 1; Spazio++){
            righe += ' '
        }
        for(let Segno = 1; Segno <= Righe - 1; Segno++){
            righe += '*'
        }
        console.log(righe);
    }
}
IvariTriangoli();