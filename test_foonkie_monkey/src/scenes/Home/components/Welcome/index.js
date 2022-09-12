import React from 'react';
import {View, Image} from 'react-native';
import logo from 'assets/imgs/logo.png';
import welcomeMonkey from 'assets/imgs/welcome-monkey.png';
import Title from 'components/Title';
import MessageEmailBtn from 'components/MessageEmailBtn';
import SimpleText from 'components/SimpleText';
import {styles} from './styles';
import Seprator from 'components/Separator';

const Welcome = () => (
  <>
    <View style={styles.welcome}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <Seprator />
      <Title text={'Expert Samurais\non Develop Secure apps\nwith Sensitive'} />
      <SimpleText
        style={styles.textContent}
        text="We are samurais code monkeys that masters the most recent data security protocols, encrypted methodologies and Blockchain development."
      />
      <MessageEmailBtn />
      <Image style={styles.monkey} source={welcomeMonkey} />
    </View>
  </>
);

export default Welcome;
