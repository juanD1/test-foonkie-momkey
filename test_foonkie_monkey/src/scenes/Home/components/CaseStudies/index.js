import React from 'react';
import {View} from 'react-native';
import Title from 'components/Title';
import Seprator from 'components/Separator';
import {COLORS} from 'styles';
import {styles} from './styles';
import CaseStudiesList from './components/CaseStudiesList';

const CaseStudies = () => (
  <View style={styles.container}>
    <Title style={styles.title} text="Case studies" />
    <Seprator align="flex-start" color={COLORS.white} />
    <CaseStudiesList />
  </View>
);

export default CaseStudies;
