import { Text, View, ScrollView, Button, NativeModules, PermissionsAndroid, Alert } from "react-native"; // Asegúrate de importar Button, NativeModules, PermissionsAndroid, Alert
import React from "react";
import styles from "../Styles/Styles"; // Importa tus estilos

// Desestructura tu módulo nativo de Unity.
// Este nombre debe coincidir con el 'getName()' en tu UnityModule.kt
const { UnityModule } = NativeModules;

export default function AR() {

  // Función para solicitar permisos e iniciar la experiencia AR
  const handleStartAR = async () => {
    try {
      // 1. Solicitar Permiso de Cámara
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permiso de Cámara para Realidad Aumentada",
          message: "Necesitamos acceso a tu cámara para mostrar la experiencia de Realidad Aumentada.",
          buttonNeutral: "Preguntar más tarde",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permiso de cámara concedido. Iniciando AR...");
        // 2. Si el permiso es concedido, lanzar la actividad de Unity
        if (UnityModule) {
          UnityModule.startUnityAR();
        } else {
          console.warn('UnityModule no encontrado. Asegúrate de que el módulo nativo esté correctamente vinculado.');
          Alert.alert('Error', 'No se pudo iniciar la experiencia AR. El módulo de Unity no está disponible.');
        }
      } else {
        console.log("Permiso de cámara denegado.");
        Alert.alert('Permiso Denegado', 'No podemos iniciar la Realidad Aumentada sin el permiso de cámara.');
      }
    } catch (err) {
      console.warn("Error al solicitar permisos o iniciar AR:", err);
      Alert.alert('Error', 'Ocurrió un problema al iniciar la Realidad Aumentada.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      horizontal={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.formContainer}> {/* Usamos formContainer para el estilo de la tarjeta */}
          <Text style={styles.title}>Realidad Aumentada</Text>

          <View style={styles.form}> {/* Usamos form para alinear el botón */}
            <Button
                title="Iniciar Experiencia AR"
                onPress={handleStartAR}
                color="#007bff" // Puedes personalizar el color o usar tus estilos
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}