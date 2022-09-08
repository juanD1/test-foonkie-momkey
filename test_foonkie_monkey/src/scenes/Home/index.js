import React from 'react';
import {View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import logo from 'assets/imgs/logo.png';
import welcomeMonkey from 'assets/imgs/welcome-monkey.png';

const Home = () => (
  <>
    <View style={styles.header}>
      <Image source={logo} />
    </View>
    <View>
      <ScrollView>
        <View style={styles.welcome}>
          <View style={styles.seprator} />
          <Text style={styles.title}>
            Expert Samurais{'\n'}on Develop Secure apps{'\n'}with Sensitive
            data.
          </Text>
          <Text style={styles.content}>
            We are samurais code monkeys that masters the most recent data
            security protocols, encrypted methodologies and Blockchain
            development.
          </Text>
          <TouchableHighlight
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => console.log('BTN get in touch')}>
            <View>
              <Text style={styles.btnText}>Get in touch!</Text>
            </View>
          </TouchableHighlight>
          <Image style={styles.monkey} source={welcomeMonkey} />
        </View>
      </ScrollView>
    </View>
  </>
);

export default Home;
