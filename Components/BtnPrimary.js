import React from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const BtnPrimary = ({texto,fondo}) => {

  return (
    <TouchableHighlight onPress={ () => console.log(texto) } style={[styles.btn, {backgroundColor: fondo}]}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  texto: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});

export default BtnPrimary;
