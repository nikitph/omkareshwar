// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable';


// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.omka4} style={styles.backgroundImage} resizeMode='cover'/>
        <ScrollView style={styles.container}>
          <View style={styles.lefted}>
            <Text style={styles.leftSectionText}>
              Omkareshwar
              Land of the lord
            </Text>
          </View>
          <View style={{flex:1, flexDirection:'row'}}>

            <Animatable.View style={{flex:1,marginVertical: 4,
              marginHorizontal:20}} animation="slideInLeft">

          <RoundedButton onPress={NavigationActions.legend}>
Legend          </RoundedButton>

          <RoundedButton onPress={NavigationActions.transport}>
Transportation          </RoundedButton>

          <RoundedButton onPress={NavigationActions.apiTesting}>
Services          </RoundedButton>

          <RoundedButton onPress={NavigationActions.theme}>
Activites          </RoundedButton>

          <RoundedButton onPress={NavigationActions.mapviewExample}>
Nearby          </RoundedButton>
              </Animatable.View>
              <Text style={{flex:1, color:'transparent'}} >
                abc
              </Text>
              </View>

        </ScrollView>
      </View>
    )
  }
}
