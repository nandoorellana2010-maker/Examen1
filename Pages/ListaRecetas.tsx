import { View, Text } from 'react-native'

import React from 'react'
import { useContextReceta } from '../Providers/ProviderReceta'
import { Receta } from '../Models/Receta'

export default function ListaRecetas() {
  
  const {recetaLista} = useContextReceta()

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
                    </View>

                ))
            }
        </View>
  )
}