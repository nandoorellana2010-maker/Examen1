import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useContextReceta } from '../Providers/ProviderReceta'
import { Receta } from '../Models/Receta'
import { ContextRecetaActual } from '../Contexts/ContextReceta'

export default function ListaRecetas() {
  
  const {recetaLista, recetaEliminar} = useContextReceta()
  const receta = useContext(ContextRecetaActual)

  function eliminar() {
          if (!receta) {
            throw new Error('Opcion invalida')
          }
    
      }
  
      useEffect(()=> {
      console.log(recetaLista)    
      },
      [recetaLista])

  return (
    <View>
            <Text>Recetas Guardadas</Text>

            {
                recetaLista.map((receta: Receta) => (
                    <View key={receta.id}>
                        <Text>Id receta: {receta.id}</Text>
                        <Text>Nombre de la receta: {receta.nombreReceta}</Text>
                        <Text>Ingredientes: {receta.ingredientesReceta}</Text>
                        <Text>Fecha de creacion: {receta.fechaCreacion}</Text>
                        <Button title='Eliminar receta' onPress={() => recetaEliminar(receta.id)}></Button>
                    </View>

                ))
            }
        </View>
  )
}