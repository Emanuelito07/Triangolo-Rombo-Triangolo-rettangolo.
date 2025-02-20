let AltezzaTriangolo = 10;
let CosaScegli = ['TriangoloRettangoloVersoSinistra', 'Rombo', 'TriangoloIsoscele', 'TriangoloRettangoloVersoDestra'];
/* in agiounta puoi fare:
'TriangoloIsoscele', TriangoloRettangoloVersoDestra, Rombo,
TriangoloRettangoloVersoSinistra, */

function IvariTriangoli() {
    if (CosaScegli.includes('Rombo')) {
        for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
            let righe = '';
            for (let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++) {
                righe += ' ';
            }
            for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
                righe += '*';
            }
            console.log(righe);
        }
        for (let Righe = AltezzaTriangolo - 1; Righe >= 1; Righe--) {
            let righe = '';
            for (let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++) {
                righe += ' ';
            }
            for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
                righe += '*';
            }
            console.log(righe);
        }
        console.log(' ');
    } if (CosaScegli.includes('Isoscele')) {
        for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
            let righe = '';
            for (let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++) {
                righe += ' ';
            }
            for (let Segno = 1; Segno <= 2 * Righe - 1; Segno++) {
                righe += '*';
            }
            console.log(righe);
        }
        console.log(' ');
    } if (CosaScegli.includes('RettangoloDx')) {
        for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
            let righe = '';
            for (let Spazio = 1; Spazio <= AltezzaTriangolo - 1; Spazio++) {
                righe += ' ';
            }
            for (let Segno = 1; Segno <= Righe; Segno++) {
                righe += '*';
            }
            console.log(righe);
        }
        console.log(' ');
    } if (CosaScegli.includes('RettangoloSx')) {
        for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
            let righe = '';
            for (let Spazio = 1; Spazio <= AltezzaTriangolo - Righe; Spazio++) {
                righe += ' ';
            }
            for (let Segno = 1; Segno <= Righe; Segno++) {
                righe += '*';
            }
            console.log(righe);
        }
        console.log(' ');
    }
}
IvariTriangoli();

/*  dopo che ho ben chiaro questo codice lo step successivo è quello di fare
una funzione e dire con due loop quanti parti del triangolo vuoi mettre se
ne metti tre succederà che sarà un triangolo isoscele e sotto rettangolo,
con 4 sarà un rombo, e via così. */