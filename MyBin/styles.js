var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88c542'
  },
  languageRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  language: {
    alignItems: 'flex-end',
    margin: 5,
    marginRight: 10
  },
  languageButton: {
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 13
  },
  textInsideBin: {
    marginTop: 40,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton:{
    width:40,
    height:40,
    marginTop : 10,
    alignItems : 'center'
  },
  TitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 10,
    height: 60,
  },
  topTitleText: {
    fontFamily: 'Arial',
    fontSize: 28,
    color: 'white',
    marginTop : 10 
  },
  upperContent: {
    margin: 5,
    borderRadius: 15,
    borderColor: '#30499b',
    borderWidth: 5,
    backgroundColor: '#f2f2f2'
  },
  titleText: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center'
  },
  binsRow: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 20

  },
  bin: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBin: {
    width: 60,
    height: 110,
    alignItems: 'center',
  },
  throwButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    margin: 5
  },
  wasteTable: {
    alignItems: 'center',
    borderColor: '#30499b',
    borderWidth: 5,
    flex: 1,
    borderRadius: 15,
    margin: 5,
    backgroundColor: '#f2f2f2'
  },
  wasteList: {
    flexDirection: 'row',
    borderColor: '#30499b',
    borderWidth: 5,
    flex: 1,
    borderRadius: 15,
    margin: 5,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2'
  },
  wastePic: {
    width: 50,
    height: 50,
    flexDirection: 'column'
  },
  wasteItem: {
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});