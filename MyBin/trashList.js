import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  AsyncStorage,
  Navigator,
  Modal,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import EN from './Lang_EN.json';
import TH from './Lang_TH.json';

var styles = require('./styles');

var langCode = '@MyBin:Lang'
export default class trashList extends Component {
  constructor() {
    super()
    this._start()
    this.state = {
      EN: true,
      lang: EN,
    }
    this._changeLang = this._changeLang.bind(this)
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

  _handleTouch(trashNumber) {
    //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
    //เลข 6 7 ไปหน้า throw - Compostable
    //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
    //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this.state.lang.main.text.waste}
            </Text>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/artistsMaterials.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(0)}>
              <Text style={styles.text}>{this.state.lang.waste.artistsMaterials}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/beverageCans.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(1)}>
              <Text style={styles.text}>{this.state.lang.waste.beverageCans}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/bottles.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(2)}>
              <Text style={styles.text}>{this.state.lang.waste.bottles}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/candyBags.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(3)}>
              <Text style={styles.text}>{this.state.lang.waste.candyBags}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/cosmetics.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(4)}>
              <Text style={styles.text}>{this.state.lang.waste.cosmetics}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/drugs.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(5)}>
              <Text style={styles.text}>{this.state.lang.waste.drugs}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/foodScraps.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(6)}>
              <Text style={styles.text}>{this.state.lang.waste.foodScraps}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/fruitPeels.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(7)}>
              <Text style={styles.text}>{this.state.lang.waste.fruitPeels}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/glasses.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(8)}>
              <Text style={styles.text}>{this.state.lang.waste.glasses}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/insecticides.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(9)}>
              <Text style={styles.text}>{this.state.lang.waste.insecticides}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/milkBottles.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(10)}>
              <Text style={styles.text}>{this.state.lang.waste.milkBottles}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/noodlesBags.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(11)}>
              <Text style={styles.text}>{this.state.lang.waste.noodlesBags}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/noodlesCups.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(12)}>
              <Text style={styles.text}>{this.state.lang.waste.noodlesCups}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/paperCups.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(13)}>
              <Text style={styles.text}>{this.state.lang.waste.paperCups}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/pesticides.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(14)}>
              <Text style={styles.text}>{this.state.lang.waste.pesticides}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/plasticBags.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(15)}>
              <Text style={styles.text}>{this.state.lang.waste.plasticBags}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/plasticBottles.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(16)}>
              <Text style={styles.text}>{this.state.lang.waste.plasticBottles}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/plasticFoodBags.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(17)}>
              <Text style={styles.text}>{this.state.lang.waste.plasticFoodBags}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/plasticFoodContainers.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(18)}>
              <Text style={styles.text}>{this.state.lang.waste.plasticFoodContainers}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/shatteredGlass.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(19)}>
              <Text style={styles.text}>{this.state.lang.waste.shatteredGlass}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/snackBags.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(20)}>
              <Text style={styles.text}>{this.state.lang.waste.snackBags}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/straw.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(21)}>
              <Text style={styles.text}>{this.state.lang.waste.straw}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/thinners.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(22)}>
              <Text style={styles.text}>{this.state.lang.waste.thinners}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/tinCans.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(23)}>
              <Text style={styles.text}>{this.state.lang.waste.tinCans}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/tissue.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(24)}>
              <Text style={styles.text}>{this.state.lang.waste.tissue}</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.wasteList}>
          <Image
            style={styles.wastePic}
            source={require('./images/waste/wastePaper.png')}>
          </Image>
          <View style={styles.wasteItem}>
            <TouchableHighlight onPress={this._handleTouch(25)}>
              <Text style={styles.text}>{this.state.lang.waste.wastePaper}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    )
  }
}

module.exports = trashList;