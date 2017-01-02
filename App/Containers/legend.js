// @flow

import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Metrics} from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'

// Styles
import styles from './Styles/legendStyle'

// I18n
import I18n from 'react-native-i18n'

class legend extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.legendText}>Omkareshwar Jyotirlinga also has its own history and stories.Three of them are prominent. The first
            story is about Vindhya Parvat (Mountain). Once upon a time Narada (son of Lord Brahma), known for his
            non-stop cosmic travel, visited Vindhya parvat. In his spicy way Narad told Vindhya Parvat about the
            greatness of Mount Meru. This made Vindhya jealous of Meru and he decided to be bigger than Meru. Vindhya
            started worship of Lord Shiva to become greater than Meru. Vindhya Parvat practiced severe penance and
            worshipped parthivlinga (A linga made from physical material) along with Lord Omkareshwar for nearly six
            months. As a result, Lord Shiva was pleased and blessed him with his desired boon. On a request of all the
            gods and the sages Lord Shiva made two parts of the lingas. One half is called Omkareshwara and the other
            Mamaleshwar or Amareshwar. Lord Shiva gave the boon of growing, but took a promise that Vindhya will never
            be a problem to Shiva's devotees. Vindhya began to grow, but did not keep his promise. It even obstructed
            the sun and the moon. All deities approached sage Agastya for help. Agastya along with his wife came to
            Vindhya, and convinced him that he would not grow until the sage and his wife returned. They never returned
            and Vindhya is there as it was when they left. The sage and his wife stayed in Srisailam which is regarded
            as Dakshina Kashi and one of the Dwadash Jyotirlinga. {"\n"}{"\n"}

            The second story relates to Mandhata and his son's penance. King Mandhata of Ikshvaku clan (an ancestor of
            Lord Ram) worshipped Lord Shiva here till the Lord manifested himself as a Jyotirlinga. Some scholars also
            narrate the story about Mandhata's sons-Ambarish and Muchukunda, who had practiced severe penance and
            austerities here and pleased Lord Shiva. Because of this the mountain is named Mandhata.{"\n"}{"\n"}

            The third story from Hindu scriptures says that once upon a time there was a great war between Devas and
            Danavas(demon), in which Danavas won. This was a major setback for Devas and hence Devas prayed to Lord
            Shiva. Pleased with their prayer, Lord Shiva emerged in the form of Omkareshwar Jyotirlinga and defeated
            Danavas.
            {"\n"}{"\n"}
            Adi Shankara's Cave - Omkareshwar is said to be the place where Sri Adi Sankara met his Guru Govindapada in
            a cave. This cave can be found even today just below the Shiva temple where an image of Adi Shankara has
            been installed. -- Wikipedia</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(legend)
