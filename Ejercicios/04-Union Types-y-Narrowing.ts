// Escribí una función formatearId que:
// • Acepte id: string | number
// • Si es string → retorne en mayúsculas
// • Si es number → retorne 'ID-' + el número
// • Tipo de retorno: string

type Id = string | number;
const formatearId = (id: Id): string =>
    typeof id === "string" ? id.toUpperCase() : `ID-${id}`;


console.log(formatearId("25ok"));

