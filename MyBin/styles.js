var React = require('react-native');
var {StyleSheet} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  languageRow: {
      flexDirection: 'row',
  },
  language: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  languageButton: {

  },
  text: {
    fontFamily: 'Arial',
    fontSize: 14
  },
  titleText: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold',
  },
  binsRow: {
    flexDirection: 'row',
    margin: 10,
  },
  bin: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
  },
  imgBin: {
    width: 60, 
    height: 110,
  },
  infoButton: {
    
  },
  throwButton: {
    paddingTop: 10,
    flex: 1,
    
  }
});