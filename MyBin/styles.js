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
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'space-between',
  },
  language: {
    alignItems:'flex-end',
    margin: 5
  },
  languageButton: {
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 14
  },
  textInsideBin:{
    marginTop: 40,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  TitleRow: {
    flex:1,
    alignItems:'flex-start',
    paddingLeft:10
  },
  topTitleText: {
    fontFamily: 'Arial',
    fontSize: 28,
    color:'white'
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
    alignItems: 'center',
  },
  infoButton: {
    
  },
  throwButton: {
    paddingTop: 10,
    flex: 1,
  },
  wasteTable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});