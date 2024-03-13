import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import { mapskey } from '../../utils/MapsApiKey';

export const ApiMap = () => {
  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition] = useState({ latitude: -23.6666, longitude: -46.5322 });

  // Função assíncrona para capturar a localização atual do dispositivo
  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const captureLocation = await getCurrentPositionAsync();
      setInitialPosition(captureLocation);
    }
  }

  // Efeito para capturar a localização inicial e atualizar quando houver alterações
  useEffect(() => {
    CapturarLocalizacao();
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, async (Response) => {
      await setInitialPosition(Response)
      mapReference.current?.animateCamera({
        pitch: 60,
        center: Response.coords
      })
      console.log(Response)
    })
  }, []);

  // Efeito para recarregar a visualização do mapa quando a posição inicial é atualizada
  useEffect(() => {
    RecarregarVisualizacaoMapa();
  }, [initialPosition]);

  // Função para ajustar a visualização do mapa para incluir as coordenadas inicial e final
  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      const coordinates = [
        { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
        { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
      ];

      // Ajusta a visualização do mapa para incluir as coordenadas especificadas
      mapReference.current.fitToCoordinates(
        coordinates,
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      );
    }
  }

  return (
    <View style={styles.container}>
      {initialPosition ? (
        // Componente MapView que renderiza o mapa
        <MapView
          ref={mapReference}
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.0050,
            longitudeDelta: 0.0050,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={beautifulMapStyle} // Estilo personalizado do mapa
          style={styles.map}
        >
          {/* Marcador para a posição inicial */}
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
            }}
            title='posicao inicial'
            pinColor={'green'}
            description='estou aqui'
          />
          {/* Componente MapViewDirections para desenhar a rota entre a posição inicial e final */}
          <MapViewDirections
            origin={initialPosition.coords}
            destination={finalPosition}
            strokeWidth={5}
            strokeColor='#993399'
            apikey={mapskey}
          />
          {/* Marcador para a posição final */}
          <Marker
            coordinate={finalPosition}
            title='posicao final'
            pinColor={'purple'}
            description='estou aqui'
          />
        </MapView>
      ) : (
        // Exibido quando a localização inicial ainda não foi capturada
        <>
          <Text>Localização não encontrada</Text>
          <ActivityIndicator />
        </>
      )}
    </View>
  );
}

// Estilos CSS para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%"
  },
});

// Estilo personalizado para o mapa
const beautifulMapStyle = [
  // Estilo do mapa omitido por brevidade
];
