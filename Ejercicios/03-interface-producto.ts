// Creá una interface Producto con:
// • id: (requerido)
// • nombre: (requerido)
// • precio: (requerido)
// • descripcion ?: (opcional)
// • readonly stock: 
interface Producto {
    id: number
    nombre: string
    precio: number
    descripcion?: string
    readonly stock: number
}
