import { View, Text } from 'react-native'
import React from 'react'
import { useContextReceta } from '../Providers/ProviderReceta'

export default function AgregarReceta() {
    const {recetaLista, recetaAgregar} = useContextReceta()
  return (
    <View>
      <Text>AgregarReceta</Text>
    </View>
  )
}