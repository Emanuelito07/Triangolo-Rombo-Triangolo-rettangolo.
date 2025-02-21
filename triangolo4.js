let AltezzaTriangolo = 10;

function LeVariPartiDelTriangoli(numeri) {
    for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
        let Spazio = '';
        if (numeri == 2 || numeri == 3 || numeri == 4) {
            for (let Spazi = 1; Spazi <= AltezzaTriangolo - Righe; Spazi++) {
                Spazio += ' ';
            }
            for (let Spazi = 1; Spazi <= Righe; Spazi++) {
                Spazio += '* ';
            }
        } else {
            for (let Spazi = 1; Spazi <= Righe; Spazi++) {
                Spazio += '* ';
            }
        }
        console.log(Spazio);
    }
    if (numeri == 3 || numeri == 4) {
        for (let Righe2 = AltezzaTriangolo - 1; Righe2 >= 1; Righe2--) {
            let Spazio = '';
            for (let Spazi = 1; Spazi <= AltezzaTriangolo - Righe2; Spazi++) {
               Spazio += ' ';
            } if (numeri == 3) {
                for (let Spazi = 1; Spazi <= Righe2 / 2; Spazi++) {
                    Spazio += '* ';
                }
            } else {
                for (let Spazi = 1; Spazi < Righe2 + 1; Spazi++) {
                    Spazio += '* ';
                }
            }
            console.log(Spazio);
        }
    }
}



























/*
let AltezzaTriangolo = 10;

function LeVariPartiDelTriangoli(numeri) {
    for (let Righe = 1; Righe <= AltezzaTriangolo; Righe++) {
        let Spazio = '';

        let SpaziVuoti = (numeri == 2 || numeri == 3 || numeri == 4) ? AltezzaTriangolo -
        Righe : 1;
        let Asterischi = Righe;

        for (let Spazi = 1; Spazi <= SpaziVuoti; Spazi++) {
            Spazio += ' ';
        }
        for (let Spazi = 1; Spazi <= Asterischi; Spazi++) {
            Spazio += '* ';
        }
        console.log(Spazio);
    }

    if (numeri == 3 || numeri == 4) {
        for (let Righe = AltezzaTriangolo - 1; Righe >= 1; Righe--) {
            let Spazio = '';

            let SpaziVuoti = AltezzaTriangolo - Righe;
            let Asterischi = (numeri == 3) ? Math.ceil(Righe / 2) : Righe;

            for (let Spazi = 1; Spazi <= SpaziVuoti; Spazi++) {
                Spazio += ' ';
            }
            for (let Spazi = 1; Spazi <= Asterischi; Spazi++) {
                Spazio += '* ';
            }
            console.log(Spazio);
        }
    }
    console.log(' ');
} */