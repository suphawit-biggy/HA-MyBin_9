import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  Modal,
  ScrollView,
  TouchableHighlight,
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
var ItemList = React.createClass({
  getInitialState(){
    return{
      plasticFoodBags:'',
      plasticFoodContainers:'',
      straw:'',
      candyBags:'',
      snackBags:'',
      noodlesBags:'',
      noodlesCups:'',
      tissue:'',
      paperCups:'',
      foodScraps:'',
      fruitPeels:'',
      bottles:'',
      plasticBottles:'',
      milkBottles:'',
      glasses:'',
      shatteredGlass:'',
      tinCans:'',
      beverageCans:'',
      wastePaper:'',
      plasticBags:'',
      insecticides:'',
      pesticides:'',
      thinners:'',
      drugs:'',
      artistsMaterials:'',
      cosmetics:'',
    }
  },
  render() {
    fetch('http://smartbin.devfunction.com/api/?team_id=9&secret=NN7Vtb')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          plasticFoodBags: responseJSON.data.waste_statistics.plasticFoodBags,
          plasticFoodContainers: responseJSON.data.waste_statistics.plasticFoodContainers,
          straw: responseJSON.data.waste_statistics.straw,
          snackBags: responseJSON.data.waste_statistics.snackBags,
          candyBags: responseJSON.data.waste_statistics.candyBags,
          noodlesBags: responseJSON.data.waste_statistics.noodlesBags,
          noodlesCups: responseJSON.data.waste_statistics.noodlesCups,
          tissue: responseJSON.data.waste_statistics.tissue,
          paperCups: responseJSON.data.waste_statistics.paperCups,
          foodScraps: responseJSON.data.waste_statistics.foodScraps,
          fruitPeels: responseJSON.data.waste_statistics.fruitPeels,
          bottles: responseJSON.data.waste_statistics.bottles,
          plasticBottles: responseJSON.data.waste_statistics.plasticBottles,
          milkBottles: responseJSON.data.waste_statistics.milkBottles,
          glasses: responseJSON.data.waste_statistics.glasses,
          shatteredGlass: responseJSON.data.waste_statistics.shatteredGlass,
          tinCans: responseJSON.data.waste_statistics.tinCans,
          beverageCans: responseJSON.data.waste_statistics.beverageCans,
          wastePaper: responseJSON.data.waste_statistics.wastePaper,
          plasticBags: responseJSON.data.waste_statistics.plasticBags,
          insecticides: responseJSON.data.waste_statistics.insecticides,
          pesticides: responseJSON.data.waste_statistics.pesticides,
          thinners: responseJSON.data.waste_statistics.thinners,
          drugs: responseJSON.data.waste_statistics.drugs,
          artistsMaterials: responseJSON.data.waste_statistics.artistsMaterials,
          cosmetics: responseJSON.data.waste_statistics.cosmetics,

        })
      })
      .catch((error) => alert(error.message))
    if (this.props.name == 'general') {
      return (
        <View>
          <Text>{this.props.lang.waste.plasticFoodBags} : {this.state.plasticFoodBags}</Text>
          <Text>{this.props.lang.waste.plasticFoodContainers} : {this.state.plasticFoodContainers}</Text>
          <Text>{this.props.lang.waste.straw} : {this.state.straw}</Text>
          <Text>{this.props.lang.waste.snackBags} : {this.state.snackBags}</Text>
          <Text>{this.props.lang.waste.candyBags} : {this.state.candyBags}</Text>
          <Text>{this.props.lang.waste.noodlesBags} : {this.state.noodlesBags}</Text>
          <Text>{this.props.lang.waste.noodlesCups} : {this.state.noodlesCups}</Text>
          <Text>{this.props.lang.waste.tissue} : {this.state.tissue}</Text>
          <Text>{this.props.lang.waste.paperCups} : {this.state.paperCups}</Text>
        </View>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <View>
          <Text>{this.props.lang.waste.foodScraps} : {this.state.foodScraps}</Text>
          <Text>{this.props.lang.waste.fruitPeels} : {this.state.fruitPeels}</Text>
        </View>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <View>
          <Text>{this.props.lang.waste.bottles} : {this.state.bottles}</Text>
          <Text>{this.props.lang.waste.plasticBottles} : {this.state.plasticBottles}</Text>
          <Text>{this.props.lang.waste.milkBottles} : {this.state.milkBottles}</Text>
          <Text>{this.props.lang.waste.glasses} : {this.state.glasses}</Text>
          <Text>{this.props.lang.waste.shatteredGlass} : {this.state.shatteredGlass}</Text>
          <Text>{this.props.lang.waste.tinCans} : {this.state.tinCans}</Text>
          <Text>{this.props.lang.waste.beverageCans} : {this.state.beverageCans}</Text>
          <Text>{this.props.lang.waste.wastePaper} : {this.state.wastePaper}</Text>
          <Text>{this.props.lang.waste.plasticBags} : {this.state.plasticBags}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>{this.props.lang.waste.insecticides} : {this.state.bottles}</Text>
          <Text>{this.props.lang.waste.pesticides} : {this.state.plasticBottles}</Text>
          <Text>{this.props.lang.waste.thinners} : {this.state.milkBottles}</Text>
          <Text>{this.props.lang.waste.drugs} : {this.state.glasses}</Text>
          <Text>{this.props.lang.waste.artistsMaterials} : {this.state.shatteredGlass}</Text>
          <Text>{this.props.lang.waste.cosmetics} : {this.state.tinCans}</Text>

        </View>
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
      <ScrollView style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <Text style={styles.topTitleText}>
              {this._getName()}
            </Text>
          </View>
        </View>
        <View style={styles.upperContent}>
          <View style={[styles.binsRow , { marginTop : 20 }] }>
            <View style={styles.bin}>
              <BinImg name={this.props.name} />
            </View>
            <View style={[styles.bin,{ marginTop : 15 , borderWidth : 1 , borderRadius:10}]}>
              <Text style={[styles.text , {margin : 10}]}>
                {this._getInfo()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.wasteTable}>
            <Text>Table</Text>
            <ItemList name={this.props.name} lang={this.state.lang}/>
          </View>
      </ScrollView>
    )
  }
}

module.exports = BinInfo;