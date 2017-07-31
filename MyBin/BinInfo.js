import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  Modal
} from 'react-native';
import EN from './Lang_EN.json';
import TH from './Lang_TH.json';
var styles = require('./styles');

var langCode = '@MyBin:Lang'

var BinImg = React.createClass({
  render() {
    if (this.props.name == 'general') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/general.png')}
        />
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/recycle.png')}
        />
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/compostable.png')}
        />
      )
    } else {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/hazardous.png')}
        />
      )
    }
  }
})
export default class BinInfo extends Component {
  constructor() {
    super()
    this._start()
    this.state = {
      EN: true,
      lang: EN,
      visible: false,
    }
    this._start = this._start.bind(this)
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
    var temp = this.props.visible
    this.setState({
      visible: temp
    })
  }

  _getName() {
    if (this.props.name == 'general') {
      return (
        <Text>{this.state.lang.main.text.general}</Text>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Text>{this.state.lang.main.text.compostable}</Text>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Text>{this.state.lang.main.text.recycle}</Text>
      )
    } else if (this.props.name == 'hazardous') {
      return (
        <Text>{this.state.lang.main.text.hazardous}</Text>
      )
    }
  }
  _getInfo() {
    if (this.props.name == 'general') {
      return (
        <Text>{this.state.lang.main.text.generalInfo}</Text>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Text>{this.state.lang.main.text.compostableInfo}</Text>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Text>{this.state.lang.main.text.recycleInfo}</Text>
      )
    } else if (this.props.name == 'hazardous') {
      return (
        <Text>{this.state.lang.main.text.hazardousInfo}</Text>
      )
    }
  }
  render() {
    return (
      <View>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this._getName()}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.binsRow}>
            <View style={styles.bin}>
              <BinImg name={this.props.name} />
            </View>
            <View style={styles.bin}>
              <Text style={styles.text}>
                {this._getInfo()}
              </Text>
            </View>
          </View>
          <View style={styles.wasteTable}>
            <Text>Table</Text>
          </View>
        </View>
      </View>
    )
  }
}

module.exports = BinInfo;