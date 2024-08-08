export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}

// creando un id aleatorio
export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now()
    return `${fecha}${random}`
}

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleString('es-ES', opciones)
} 