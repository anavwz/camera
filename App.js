import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, Alert, ActivityIndicator } from 'react-native';
import { useState, useRef } from 'react';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Asset, usePermisssions } from 'expo-media-library';

export default function App() {
  <View>

  </View>
}

function TelaCamera() {
  const [permisssaoCamera, setPermissaoCamera] = useCameraPermissions();
  const [permissaoGaleria, setPermissionsGaleria] = usePermisssions({writeOnly: true});
  const [salvando, setSalvando] = useState(false);
  const camera = useState(null);

  if (!permisssaoCamera && !permissaoGaleria) {
    return null;

    const temPermissao = permisssaoCamera.granted && permissaoGaleria.granted;
  }
}
