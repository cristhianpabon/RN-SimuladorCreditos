import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

import Stack from './Components/Stack';
import BtnPrimary from './Components/BtnPrimary';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
} from 'react-native';

const App = () => {

  const [monto,setMonto] = useState(5000);
  const [plazo,setPlazo] = useState(3);
  const [cuota,setCuota] = useState(0);

  const calcularCuota = () => {
     setCuota((monto/plazo).toFixed(2));
  }

  return (
    <ScrollView style={styles.contenedor}>
      <LinearGradient colors={['#003C64', '#003C64', '#003C64', '#075080']} style={styles.menu}>
        <Text style={styles.titulo}>
          Simulá tu crédito
        </Text>

        <Stack
          label={'MONTO TOTAL'}
          minimo={5000}
          maximo={50000}
          minimoLabel={'$5000'}
          maximoLabel={'$50000'}
          monto={monto}
          setMonto={setMonto}
          calcularCuota={calcularCuota}
        />
        <Stack
          label={'PLAZO'}
          minimo={3}
          maximo={24}
          minimoLabel={'3'}
          maximoLabel={'24'}
          plazo={plazo}
          setPlazo={setPlazo}
          calcularCuota={calcularCuota}
        />

      <View style={styles.cuota}>
          <Text style={styles.cuotaTexto}>
            CUOTA FIJA POR MES
          </Text>
          <Text style={styles.cuotaNumero}>
            ${cuota}
          </Text>
        </View>

        <BtnPrimary
          texto={'OBTENÉ CRÉDITO'}
          fondo={'#00AB8F'}
        />
        <BtnPrimary
          texto={'VER DETALLE DE CUOTAS'}
          fondo={'#0A5588'}
        />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#075080',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
    paddingHorizontal: 30,
    paddingBottom:100,
  },
  menu: {
    padding: 40,
    marginBottom: 60,
    flex: 1,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  cuota: {
    backgroundColor: '#00365B',
    paddingVertical: 20,
  },
  cuotaTexto: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cuotaNumero: {
    fontSize:44,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default App;
