import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  ListView,
  Alert
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
    } else if (this.props.name == 'compostable') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/compostable.png')}
        />
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/recycle.png')}
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

  _getTrashName() {
    return (
      <Text>{this.props.trashName}</Text>
    )
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

  _getAmount() {
    if (this.props.name == 'general') {
      return (
        <Text>{this.state.lang.main.text.compostable}</Text>
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

  _throwIt() {
    fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 9,
        secret: 'NN7Vtb',
        waste_statistics:
        {
          category: this._getInfo(),
          selected: 1
        }
      })
    })
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this._getTrashName()}
            </Text>
          </View>
        </View>

        <View style={styles.upperContent}>
          <View style={[styles.binsRow, { marginTop: 20 }]}>
            <View style={styles.bin}>
              <Text>
                {this._getAmount()}
              </Text>
              <BinImg name={this.props.name} />
            </View>
            <View style={[styles.bin, { marginTop: 15, borderWidth: 1, borderRadius: 10 }]}>
              <Text style={[styles.text, { margin: 10 }]}>
                {this._getInfo()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.throwButton}>
          <Button
            color='#3d5afe'
            title={this.state.lang.throw.button.throwIt}
            onPress={() => Alert.alert(
              this.state.lang.comfirmPopUp.text.comfirmation,
              this.state.lang.comfirmPopUp.text.ruSure,
              [
                { text: this.state.lang.comfirmPopUp.button.yes, onPress: () => this.throwIt() },
                { text: this.state.lang.comfirmPopUp.button.no, onPress: () => console.log('Cancel Pressed') },
              ],
              { cancelable: false }
            )}
          />
        </View>
      </View>
    )
  }
}

module.exports = BinInfo;