
<script setup>
    import { ref } from 'vue';
    import { Alerta } from './'
    import cerrarModal from '../assets/img/cerrar.svg'

    const error = ref('')
    const total_disponible = ref(0)

    const emit = defineEmits([
        'cerrar-modal',
        'guardar-gasto',
        'eliminar-gasto',
        'update:nombre',
        'update:cantidad',
        'update:categoria',
    ])

    const props = defineProps({
        modal: {
            type: Object,
            required:true,
        },
        nombre: {
            type: String,
            required:true,
        },
        cantidad: {
            type: [String, Number],
            required:true,
        },
        categoria: {
            type: String,
            required:true,
        },
        disponible: {
            type: Number,
            required: true
        },
        id: {
            type: [String, null],
            required: true
        }
    })

    const old = props.cantidad

    const agregarGasto = () => {

        const { id, disponible, cantidad, categoria, nombre } = props
        
        // validar campos vacios
        if ([cantidad, categoria, nombre].includes('')){
            error.value = "Todos los campos son necesarios"
            setTimeout(()=> {
                error.value = ''
            }, 3000)
            return
        }
        
        // validar cantidad
        if (cantidad <= 0){
            error.value = "cantidad no valida"
            setTimeout(()=> {
                error.value = ''
            }, 3000)
            return
        }

        if (id) {
            if (cantidad > old + disponible){
                if (disponible < cantidad) {
                    error.value = "No puede gastar más de lo que tiene"
                    setTimeout(()=> {
                        error.value = ''
                    }, 3000)
                    return
                }
            }
        } else {
            // valida disponible
            if (disponible < cantidad) {
                error.value = "No puede gastar más de lo que tiene"
                setTimeout(()=> {
                    error.value = ''
                }, 3000)
                return
            }
        }

        

        emit('guardar-gasto')

    }

</script>


<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img 
                :src="cerrarModal"
                alt="Cerrar modal"
                @click="() => $emit('cerrar-modal')"
            >
        </div>
        <div class="contenedor contenedor-formulario"
            :class="[modal.animar ? 'animar' : 'cerrar']"
        >
            <form
                class="nuevo-gasto"
                @submit.prevent="agregarGasto"
            >
                <legend>{{ props.id ? 'Editar Gasto' : 'Añadir Gasto' }}</legend>

                <Alerta v-if="error">
                    {{ error }}
                </Alerta>

                <div class="campo">
                    <label for="nombre">Nombre Gasto:</label>
                    <input 
                        type="text"
                        id="nombre"
                        placeholder="Añade el nombre del gasto"
                        :value="nombre"
                        @input="$event => $emit('update:nombre', $event.target.value)"
                    >
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad:</label>
                    <input 
                        type="number"
                        id="cantidad"
                        placeholder="Cantidad del gasto, ej. 300"
                        :value="cantidad"
                        @input="$event => $emit('update:cantidad', +$event.target.value)"
                    >
                </div>
                <div class="campo">
                    <label for="categoria">Categoria:</label>
                    <select 
                        name="categoria" 
                        id="categoria"
                        :value="categoria"
                        @input="$event => $emit('update:categoria', $event.target.value)"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    :value="[props.id ? 'Editar Gasto' : 'Añadir Gasto']"
                >
                <button
                    v-if="props.id"
                    type="button"
                    class="btn-eliminar"
                    @click="$emit('eliminar-gasto')"
                >
                    Eliminar Gasto
                </button>
            </form>
        </div>
    </div>
</template>


<style scoped>
    .modal {
        position: fixed;
        background-color: rgb(0 0 0 / 0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .cerrar-modal {
        position: absolute;
        right: 3rem;
        top: 3rem;
    }

    .cerrar-modal img {
        width: 3rem;
        cursor: pointer;
    }

    .contenedor-formulario {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        opacity: 0;
    }
    
    .contenedor-formulario.animar {
        opacity: 1;
    }

    .contenedor-formulario.cerrar {
        opacity: 0;
    }


    .nuevo-gasto {
        margin: 2rem auto 0 auto;
        display: grid;
        gap: 2rem;
    }

    .nuevo-gasto legend {
        text-align: center;
        color: var(--blanco);
        font-size: 3rem;
        font-weight: 700;
    }

    .campo {
        display: grid;
        gap: 2rem;
    }

    .nuevo-gasto input,
    .nuevo-gasto select {
        background-color: var(--gris-claro);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
    }

    .nuevo-gasto label {
        color: var(--blanco);
        font-size: 3rem;
    }

    .nuevo-gasto input[type="submit"] {
        background-color: var(--azul);
        color: var(--blanco);
        font-weight: 700;
        cursor: pointer;
    }

    .nuevo-gasto input[type="submit"] {
        background-color: var(--azul);
    }

    .btn-eliminar {
        padding: 1rem;
        width: 100%;
        background-color: #ef4444;
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--blanco);
        border: none;
        border-radius: 1rem;
        cursor: pointer;
    }

</style>