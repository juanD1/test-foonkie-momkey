import React from 'react';
import {View, ScrollView} from 'react-native';
import CaseStudies from './components/CaseStudies';
import Welcome from './components/Welcome';

const Home = () => (
  <View>
    <ScrollView>
      <Welcome />
      <CaseStudies />
    </ScrollView>
  </View>
);

export default Home;
