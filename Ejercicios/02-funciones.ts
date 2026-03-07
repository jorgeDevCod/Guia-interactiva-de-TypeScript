// Escribí una función calcularIVA que:
// • Reciba precio: number
// • Reciba porcentaje: number con default 21
// • Retorne un number con precio + IVA

interface Operacion {
    precio: number
    porcentaje?: number;
}

const calculaIva = ({ precio, porcentaje = 21 }: Operacion): number => precio + (precio * porcentaje / 100)

console.log(calculaIva({ precio: 100 }));

