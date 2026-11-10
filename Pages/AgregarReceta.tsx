import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextReceta } from '../Providers/ProviderReceta'
import { Receta } from '../Models/Receta'
import ListaRecetas from './ListaRecetas'

export default function AgregarReceta() {
    const {recetaLista, recetaAgregar} = useContextReceta()

    const [nombreReceta, setNombreReceta] = useState('')
    const [ingredientesReceta, setIngredientesReceta] = useState('')
    const [fechaCreacion, setFechaCreacion] = useState('')

    function agregar() {
        let receta : Receta = {
            id: ListaRecetas.length +1,
            nombreReceta: nombreReceta,
            ingredientesReceta: ingredientesReceta,
            fechaCreacion: fechaCreacion
        }
        recetaAgregar(receta)
    }

    useEffect(()=> {
    console.log(recetaLista)    
    },
    [recetaLista])

  return (
    <View>
      <View>
            <Text>Agregar Usuarios</Text>

            <TextInput placeholder='Nombre de la receta'
                value={nombreReceta}
                onChangeText={setNombreReceta}
            ></TextInput>

            <TextInput placeholder='Agregue sus ingredientes aqui'
                value={ingredientesReceta}
                onChangeText={setIngredientesReceta}
            ></TextInput>

            <TextInput placeholder='Fecha de creacion'
                value={fechaCreacion}
                onChangeText={setFechaCreacion}
            ></TextInput>

            <Button title='Agregar Usuario' onPress={agregar}></Button>

        </View>
    </View>
  )
}