import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const stylesconditionText = StyleSheet.create({
  Tittle: {
    color: '#CBFC01',
    fontSize: 61.75,
    fontFamily: 'Roboto',
    lineHeight: 72.36,
    fontWeight: 'black',
    wordWrap: 'break-word',
    width: 439,
    height: 72,
    top: 400,
    left: 170,
    transform: [{ rotate: '-90deg' }],
    
  },
  SubTittle: {
    color: '#FFFFFF',
    fontSize: 28.52,
    lineHeight: 33.42,
    fontFamily: 'Roboto',
    fontWeight: 'black',
    wordWrap: 'break-word',
    width: 270,
    height: 33,
    top: -10,
    left: 20,
  },
  Condition: {
    color: '#FFFFFF',
    fontSize: 15.02,
    fontFamily: 'Roboto-regular',
    wordWrap: 'break-word',
    lineHeight: 17.6,
    width: 237,
    height: 450,
    top: 10,
    left: 20,
  },
  Agree: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'black',
    wordWrap: 'break-word',
    lineHeight: 19.33,
    width: 178,
    height: 14,
    top: 10,
    left: 20,
  },
    
    
});

const StylesConditionText = () => {
  return (
    <View style={stylesconditionText.container}>
      <Text style={stylesconditionText.Tittle}>User conditions</Text>
      <Text style={stylesconditionText.SubTittle}>Please read carefully</Text>
      <Text style={stylesconditionText.Condition}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </Text>
      <Text style={stylesconditionText.Agree}>Do you agree with our conditions  and services?</Text>
    </View>
  );
};

export default StylesConditionText;

