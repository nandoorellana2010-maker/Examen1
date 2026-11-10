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
  return (
    <ContextReceta.Provider
    value={{recetaLista, recetaAgregar}}>
        {prop.children}
    </ContextReceta.Provider>
  )

}
export const useContextReceta = () => {
  return useContext(ContextReceta)
}