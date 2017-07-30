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
      general:false,
      recycle:false,
      compostable:false,
      hazadous:false,
    }
    this._changeLang = this._changeLang.bind(this)
    this._start = this._start.bind(this)
    this._showGeneral = this._showGeneral.bind(this)
    this._showRecycle = this._showRecycle.bind(this)
    this._showCompostable = this._showCompostable.bind(this)
    this._showHazadous = this._showHazadous.bind(this)
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
  _showGeneral(){
    this.setState({
      general:true,
    })
  }
  _showRecycle(){
    this.setState({
      recycle:true,
    })
  }
  _showCompostable(){
    this.setState({
      compostable:true,
    })
  }
  _showHazadous(){
    this.setState({
      hazadous:true,
    })
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
              source={require('./images/bin/g.png')}
            />
            <Button style={styles.infoButton}
              title={this.state.lang.main.button.info}
              onPress={this._showGeneral}
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
              onPress={this._showRecycle}
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
              onPress={this._showCompostable}
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
              onPress={this._showHazadous}
            />
          </View>
        </View>
        <View style={styles.throwButton}>
            <Button
                title={this.state.lang.main.button.throw}
                />
        </View>
        <Modal visible={this.state.general} 
          onRequestClose={() => {this.setState({general:false})}}
          animationType={"slide"}
          >
          <BinInfo
            name='general'
            />
        </Modal>
        <Modal visible={this.state.recycle} 
          onRequestClose={() => {this.setState({recycle:false})}}
          animationType={"slide"}
          >
          <BinInfo
            name='recycle'
            />
        </Modal>
        <Modal visible={this.state.compostable} 
          onRequestClose={() => {this.setState({compostable:false})}}
          animationType={"slide"}
          >
          <BinInfo
            name='compostable'
            />
        </Modal>
        <Modal visible={this.state.hazadous} 
          onRequestClose={() => {this.setState({hazadous:false})}}
          animationType={"slide"}
          >
          <BinInfo
            name='hazadous'
            />
        </Modal>

      </View>
    )
  }
}

module.exports = Main;