import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  AsyncStorage
} from 'react-native';
import EN from './Lang_EN.json';
import TH from './Lang_TH.json';
var styles = require('./styles');

var langCode ='@MyBin:Lang'
export default class MyBin extends Component {
  constructor(){
    super()
    this._start()
    this.state = {
      EN: true,
      lang: EN,
    }
    this._changeLang = this._changeLang.bind(this)
    this._start = this._start.bind(this)
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageRow}>
          <View style={{flex: 9}}>
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
              source={require('./images/bin/g.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.recycle}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/b.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.compostable}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/y.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            {this.state.lang.main.text.hazadous}
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/r.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
            />
          </View>
        </View>
        <View style={styles.throwButton}>
            <Button
                title={this.state.lang.main.button.throw}
                />
        </View>
      </View>
    )
  }
}

module.exports = MyBin;