import { View, Text, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { Receta } from '../Models/Receta'
import { ContextReceta } from '../Contexts/ContextReceta'
import { Plantilla } from '../Models/Plantilla'

export default function ProviderReceta(prop: Plantilla) {
    const [recetaLista, setRecetaLista] = useState<Receta[]>([])

    function recetaAgregar(receta: Receta) {
        setRecetaLista([...recetaLista, receta])
        Alert.alert('Creacion de Receta, Receta Agregada')
    }

    function recetaEliminar(idReceta: number) {
      setRecetaLista((actual) => {
        const indice = actual.findIndex((item) => item.id === idReceta)
        if (indice === -1) return actual

          return actual.filter((_,index) => index !== indice)
      })
      Alert.alert('Eliminación de la Receta, Receta Eliminada')
    }
  return (
    <ContextReceta.Provider
    value={{recetaLista, recetaAgregar, recetaEliminar}}>
        {prop.children}
    </ContextReceta.Provider>
  )

}
export const useContextReceta = () => {
  return useContext(ContextReceta)
}