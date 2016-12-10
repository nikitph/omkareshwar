// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 20,
    marginHorizontal: 0,
    marginVertical: 4,
    borderColor:'white',
    borderWidth:1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'flex-start'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '100',
    fontFamily:'futura',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
