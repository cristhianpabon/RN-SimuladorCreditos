import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Stack = (props) => {

  const [valorInput,setValorInput] = useState(props.minimo.toString());

  const sliderValor = (value) => {
    if (props.monto) {
      props.setMonto(Math.round(value));
    } else if (props.plazo) {
      props.setPlazo(Math.round(value));
    }

    setValorInput(Math.round(value).toString());

    props.calcularCuota()
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{props.label}</Text>

        { props.monto ? (
          <>
          <View style={[styles.setBorders,styles.setHorizontal]}>
            <Text style={styles.inputText}>$</Text>
            <TextInput
              style={styles.input}
              value={valorInput}
              editable={false}
              onChangeText= {texto => inputValor(texto)}
            />
          </View>
          </>
        ) : (
          <>
          <View style={styles.setBorders}>
            <TextInput
              style={styles.input}
              value={valorInput}
              editable={false}
              onChangeText= {texto => inputValor(texto)}
            />
          </View>
          </>
        )}


      <Slider
      style={styles.slider}
      minimumValue={props.minimo}
      maximumValue={props.maximo}
      minimumTrackTintColor='#FFFFFF'
      maximumTrackTintColor='#FFFFFF'
      thumbTintColor='#FFFFFF'
      onValueChange= { value => sliderValor(value) }
      />

      <View style={styles.setHorizontal}>
        <Text style={styles.label}>{props.minimoLabel}</Text>
        <Text style={styles.label}>{props.maximoLabel}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom:10,
  },
  label: {
    fontSize: 21,
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginRight: 5,
    alignSelf: "center"
  },
  input: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  setBorders: {
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  setHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Stack;
