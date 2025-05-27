import { NativeModules, Button } from 'react-native';

const { UnityModule } = NativeModules;

export default function AR() {
  return (
    <Button title="Abrir RA" onPress={() => {
      try {
        UnityModule.launchUnity();
      } catch (e) {
        console.error('Error al lanzar Unity:', e);
      }
    }} />
  );
}
