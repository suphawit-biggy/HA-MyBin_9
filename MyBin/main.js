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
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import EN from './Lang_EN.json';
import TH from './Lang_TH.json';
import BinInfo from './BinInfo';
import TrashList from './TrashList';
var styles = require('./styles');

var langCode = '@MyBin:Lang'
export default class Main extends Component {
  constructor() {
    super()
    this._start()
    this.state = {
      EN: true,
      lang: EN,
      binInfo: false,
      binInfoName: '',
      testText: '',
      general: 0,
      compostable: 0,
      recycle: 0,
      hazardous: 0,
      throw: false,
    }
    this._changeLang = this._changeLang.bind(this)
    this._start = this._start.bind(this)
    this._showBinInfo = this._showBinInfo.bind(this)
    this._updateBinInfo = this._updateBinInfo.bind(this)
    this._showThrow = this._showThrow.bind(this)
    this._closeBinInfo = this._closeBinInfo.bind(this)
  }

  _updateBinInfo() {
    fetch('http://smartbin.devfunction.com/api/?team_id=9&secret=NN7Vtb')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          general: responseJSON.data.bin_statistics.general,
          compostable: responseJSON.data.bin_statistics.compostable,
          recycle: responseJSON.data.bin_statistics.recycle,
          hazardous: responseJSON.data.bin_statistics.hazardous,
        })
      })
      .catch((error) => alert(error.message))
  }

  async _start() {
    const value = await AsyncStorage.getItem(langCode)
    if (value !== null) {
      if (value == '1') {
        this.setState({
          EN: false,
          lang: EN
        })
      } else {
        this.setState({
          EN: true,
          lang: TH
        })
      }
    }
    fetch('http://smartbin.devfunction.com/api/?team_id=9&secret=NN7Vtb')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          general: responseJSON.data.bin_statistics.general,
          compostable: responseJSON.data.bin_statistics.compostable,
          recycle: responseJSON.data.bin_statistics.recycle,
          hazardous: responseJSON.data.bin_statistics.hazardous,
        })
      })
      .catch((error) => alert(error.message))
  }

  async _changeLang() {
    this.setState({
      EN: !this.state.EN,
    })
    if (this.state.EN) {
      await AsyncStorage.setItem(langCode, '1')
      this.setState({
        lang: EN
      })
    } else {
      await AsyncStorage.setItem(langCode, '0')
      this.setState({
        lang: TH
      })
    }
  }

  _showBinInfo(name) {
    if (name == 'general') {
      this.setState({
        binInfo: true,
        binInfoName: 'general'
      })
    } else if (name == 'compostable') {
      this.setState({
        binInfo: true,
        binInfoName: 'compostable'
      })
    } else if (name == 'recycle') {
      this.setState({
        binInfo: true,
        binInfoName: 'recycle'
      })
    } else {
      this.setState({
        binInfo: true,
        binInfoName: 'hazardous'
      })
    }

  }
  _showThrow(){
    this.setState({
      throw: !this.state.throw,
    })
    this._updateBinInfo()
  }
  _closeBinInfo(){
    this.setState({
      binInfo: false,
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this.state.lang.topBar.text.main}
            </Text>
          </View>
          <View style={styles.language}>
            <Button style={styles.languageButton}
              title={this.state.EN ? 'EN' : 'TH'}
              onPress={this._changeLang}
              color='#f0a32f'
            />
          </View>
        </View>

        <View style={styles.upperContent}>
          <Text style={styles.titleText}>
            {this.state.lang.main.text.bin}
          </Text>
          <View style={styles.binsRow}>
            <View style={styles.bin}>
              <Text style={styles.text}>
                {this.state.lang.main.text.general}
              </Text>
               <TouchableOpacity onPress={() => { this._showBinInfo('general') }}>  
              <Image
                style={styles.imgBin}
                source={require('./images/bin/general.png')}>
                <Text style={styles.textInsideBin}>{this.state.general}</Text>
              </Image>
              </TouchableOpacity>
              <Button
                color='#ee3582'
                title={this.state.lang.main.button.info}
                onPress={() => { this._showBinInfo('general') }}
              />
            </View>
            <View style={styles.bin}>
                <Text style={styles.text}>
                  {this.state.lang.main.text.compostable}
                </Text>
              <TouchableOpacity onPress={() => { this._showBinInfo('compostable') }}>  
                <Image
                  style={styles.imgBin}
                  source={require('./images/bin/compostable.png')}>
                  <Text style={styles.textInsideBin}>{this.state.compostable}</Text>
                </Image>
              </TouchableOpacity> 
                <Button
                  color='#ee3582'
                  title={this.state.lang.main.button.info}
                  onPress={() => { this._showBinInfo('compostable') }}
                />
             
            </View>
            <View style={styles.bin}>
              <Text style={styles.text}>
                {this.state.lang.main.text.recycle}
              </Text>
            <TouchableOpacity onPress={() => { this._showBinInfo('recycle') }}>  
              <Image
                style={styles.imgBin}
                source={require('./images/bin/recycle.png')}>
                <Text style={styles.textInsideBin}>{this.state.recycle}</Text>
              </Image>
            </TouchableOpacity>
              <Button
                color='#ee3582'
                title={this.state.lang.main.button.info}
                onPress={() => { this._showBinInfo('recycle') }}
              />
            </View>
            <View style={styles.bin}>
              <Text style={styles.text}>
                {this.state.lang.main.text.hazardous}
              </Text>
            <TouchableOpacity onPress={() => { this._showBinInfo('hazardous') }}>  
              <Image
                style={styles.imgBin}
                source={require('./images/bin/hazardous.png')}>
                <Text style={styles.textInsideBin}>{this.state.hazardous}</Text>
              </Image>
            </TouchableOpacity>  
              <Button
                color='#ee3582'
                title={this.state.lang.main.button.info}
                onPress={() => { this._showBinInfo('hazardous') }}
              />
            </View>
          </View>
        </View>

        <View style={styles.throwButton}>
          <Button
            color='#3d5afe'
            title={this.state.lang.main.button.throw} 
            onPress={() => {this._showThrow()}}/>
        </View>

        <Modal visible={this.state.binInfo}
          onRequestClose={() => {
            this.setState({ binInfo: false })
            this._updateBinInfo()
          }}
          animationType={"fade"}
        >
          <BinInfo
            lang={this.state.lang} name={this.state.binInfoName} func={this._closeBinInfo.bind(this)}
          />
        </Modal>

        <Modal visible={this.state.throw}
          onRequestClose={() => {
            this.setState({ throw: false })
            this._updateBinInfo()
          }}
          animationType={"fade"}
        >
          <TrashList lang={this.state.lang} func={this._showThrow.bind(this)}/>
        </Modal>

      </ScrollView>
    )
  }
}

module.exports = Main;