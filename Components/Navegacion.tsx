import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AgregarReceta from '../Pages/AgregarReceta'
import ListaRecetas from '../Pages/ListaRecetas'


export default function Navegacion() {
    const tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen component={AgregarReceta} name='Agregar Receta'></tab.Screen>
            <tab.Screen component={ListaRecetas} name='Listar Recetas'></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
  )
}