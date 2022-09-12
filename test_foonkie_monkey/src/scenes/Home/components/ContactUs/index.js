import React from 'react';
import {Image, View} from 'react-native';
import Title from 'components/Title';
import MessageEmailBtn from 'components/MessageEmailBtn';
import Separator from 'components/Separator';
import SimpleText from 'components/SimpleText';
import CallUsMonkey from 'assets/imgs/call-us-monkey.png';
import logo from 'assets/imgs/logo.png';
import {styles} from './styles';

const ContactUs = () => (
  <View style={styles.container}>
    <Image style={styles.monkeyCallUs} source={CallUsMonkey} />
    <Title style={styles.title} text={'Let’s work\ntogether!'} />
    <MessageEmailBtn />
    <Separator style={styles.separator} />
    <Image style={styles.logo} source={logo} />
    <SimpleText style={styles.location} text="Bogotá:" />
    <SimpleText style={styles.address} text="Calle 106 # 54-15 of. 307/308" />
    <SimpleText style={styles.location} text="Harpenden, UK:" />
    <SimpleText style={styles.address} text="Harpenden Hall, Southdown Rd" />
    <SimpleText style={styles.location} text="Miami, USA:" />
    <SimpleText style={styles.address} text="990 Biscayne Blvd #501" />
  </View>
);

export default ContactUs;
