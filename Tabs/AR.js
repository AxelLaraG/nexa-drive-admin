import React from 'react';
import { NativeModules, Button, Alert } from 'react-native';

const { UnityModule } = NativeModules;

export default function AR() {
  const openUnity = () => {
    if (UnityModule && UnityModule.launchUnity) {
      try {
        UnityModule.launchUnity();
      } catch (e) {
        console.error('Error al lanzar Unity:', e);
        Alert.alert('Error', 'No se pudo abrir Unity');
      }
    } else {
      Alert.alert('Error', 'Módulo Unity no disponible');
      console.warn('UnityModule no encontrado o no tiene launchUnity');
    }
  };

  return <Button title="Abrir RA" onPress={openUnity} />;
}
