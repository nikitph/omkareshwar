// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Fonts, Colors, Metrics } from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  legendText: {
    marginTop: Metrics.navBarHeight,
    color: 'black',
    textAlign: 'left',
    fontWeight: '100',
    fontFamily:'futura',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
