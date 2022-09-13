import React from 'react';
import {View, ScrollView} from 'react-native';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Welcome from './components/Welcome';

const Home = () => (
  <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Welcome />
      <CaseStudies />
      <ContactUs />
    </ScrollView>
  </View>
);

export default Home;
