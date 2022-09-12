import React from 'react';
import {View} from 'react-native';
import Title from 'components/Title';
import Seprator from 'components/Separator';
import {COLORS} from 'styles';
import {styles} from './styles';

const CaseStudies = () => (
  <View style={styles.container}>
    <Title style={styles.title} text="Case studies" />
    <Seprator align="flex-start" color={COLORS.white} />
  </View>
);

export default CaseStudies;
