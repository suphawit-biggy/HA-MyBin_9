import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  Navigator,
  Modal
} from 'react-native';
import EN from './Lang_EN.json';
import TH from './Lang_TH.json';
import BinInfo from './BinInfo';
var styles = require('./styles');

var langCode ='@MyBin:Lang'
export default class Main extends Component {
  constructor(){
    super()
    this._start()
    this.state = {
      EN: true,
      lang: EN,
      binInfo:false,
      binInfoName:'',
    }
    this._changeLang = this._changeLang.bind(this)
    this._start = this._start.bind(this)
    this._showBinInfo = this._showBinInfo.bind(this)

  }

  async _start(){
     const value = await AsyncStorage.getItem(langCode)
     if (value !== null){
       if(value =='1'){
         this.setState({
           EN:false,
           lang:EN
         })
       }else{
         this.setState({
           EN:true,
           lang:TH
         })
       }
     }
  }
  async _changeLang(){
    this.setState({
      EN: !this.state.EN,
    })
    if(this.state.EN){
      await AsyncStorage.setItem(langCode, '1')
      this.setState({
        lang:EN
      })
    }else{
      await AsyncStorage.setItem(langCode, '0')
      this.setState({
        lang:TH
      })
    }
  }
  _showBinInfo(name){
    if(name =='general'){
      this.setState({
        binInfo:true,
        binInfoName:'general'
      })
    }else if(name=='recycle'){
      this.setState({
        binInfo:true,
        binInfoName:'recycle'
      })
    }else if(name=='compostable'){
      this.setState({
        binInfo:true,
        binInfoName:'compostable'
      })
    }else{
      this.setState({
        binInfo:true,
        binInfoName:'compostable'
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this.state.lang.topBar.text.main}
            </Text>
          </View>
          <View style={styles.language}>
            <Button style={styles.languageButton}
              title={this.state.EN? 'EN':'TH'}
              onPress={this._changeLang}
             />
          </View>
        </View>
        <Text style={styles.titleText}>
            {this.state.lang.main.text.bin}
        </Text>
        <View style={styles.binsRow}>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.general}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/general.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              onPress={() =>{this._showBinInfo('general')}}
              />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.recycle}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/recycle.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              onPress={() =>{this._showBinInfo('recycle')}}
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.compostable}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/compostable.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              onPress={() =>{this._showBinInfo('compostable')}}
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.hazadous}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/hazadous.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              onPress={() =>{this._showBinInfo('hazadous')}}
            />
          </View>
        </View>
        <View style={styles.throwButton}>
            <Button
                title={this.state.lang.main.button.throw}
                />
        </View>
        <Modal visible={this.state.binInfo} 
          onRequestClose={() => {this.setState({binInfo:false})}}
          animationType={"slide"}
          >
          <BinInfo
            name={this.state.binInfoName}
            />
        </Modal>

      </View>
    )
  }
}

module.exports = Main;