import React from 'react';
import {View, ScrollView} from 'react-native';
import Welcome from './components/Welcome';

const Home = () => (
  <View>
    <ScrollView>
      <Welcome />
    </ScrollView>
  </View>
);

export default Home;
