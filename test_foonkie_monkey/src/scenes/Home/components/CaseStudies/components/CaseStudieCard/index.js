import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Title from 'components/Title';
import SimpleText from 'components/SimpleText';
import Button from 'components/Button';
import {styles} from './styles';

const CaseStudieCard = ({item}) => (
  <View style={styles.container}>
    <Image source={item.img} />
    <View style={styles.infoContainer}>
      <Title style={styles.title} text={item.title} />
      <SimpleText style={styles.description} text={item.description} />
      <Button style={styles.btn} text="View Project" />
    </View>
  </View>
);

CaseStudieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    industry: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default CaseStudieCard;
