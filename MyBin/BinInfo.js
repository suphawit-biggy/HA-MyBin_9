import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  Modal,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
var styles = require('./styles');

var BinImg = React.createClass({
  getInitialState() {
    return {
      curCount: 0,
    }
  },
  render() {
    fetch('http://smartbin.devfunction.com/api/?team_id=9&secret=NN7Vtb')
      .then((response) => response.json())
      .then((responseJSON) => {
        if (this.props.name == 'general') {
          this.setState({
            curCount: responseJSON.data.bin_statistics.general
          })
        } else if (this.props.name == 'compostable') {
          this.setState({
            curCount: responseJSON.data.bin_statistics.compostable
          })
        }
        else if (this.props.name == 'recycle') {
          this.setState({
            curCount: responseJSON.data.bin_statistics.recycle
          })
        }
        else {
          this.setState({
            curCount: responseJSON.data.bin_statistics.hazardous
          })
        }
      })
      .catch((error) => alert(error.message))
    if (this.props.name == 'general') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/general.png')}>
          <Text style={styles.textInsideBin}>{this.state.curCount}</Text>
        </Image>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/compostable.png')}>
          <Text style={styles.textInsideBin}>{this.state.curCount}</Text>
        </Image>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/recycle.png')}>
          <Text style={styles.textInsideBin}>{this.state.curCount}</Text>
        </Image>
      )
    } else {
      return (
        <Image
          style={styles.imgBin}
          source={require('./images/bin/hazardous.png')}>
          <Text style={styles.textInsideBin}>{this.state.curCount}</Text>
        </Image>
      )
    }
  }
})
var ItemList = React.createClass({
  getInitialState() {
    return {
      plasticFoodBags: '',
      plasticFoodContainers: '',
      straw: '',
      candyBags: '',
      snackBags: '',
      noodlesBags: '',
      noodlesCups: '',
      tissue: '',
      paperCups: '',
      foodScraps: '',
      fruitPeels: '',
      bottles: '',
      plasticBottles: '',
      milkBottles: '',
      glasses: '',
      shatteredGlass: '',
      tinCans: '',
      beverageCans: '',
      wastePaper: '',
      plasticBags: '',
      insecticides: '',
      pesticides: '',
      thinners: '',
      drugs: '',
      artistsMaterials: '',
      cosmetics: '',
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
          tissue: responseJSON.data.waste_statistics.Tissue,
          paperCups: responseJSON.data.waste_statistics.paperCups,
          foodScraps: responseJSON.data.waste_statistics.foodScraps,
          fruitPeels: responseJSON.data.waste_statistics.fruitPeels,
          bottles: responseJSON.data.waste_statistics.Bottles,
          plasticBottles: responseJSON.data.waste_statistics.plasticBottles,
          milkBottles: responseJSON.data.waste_statistics.milkBottles,
          glasses: responseJSON.data.waste_statistics.Glasses,
          shatteredGlass: responseJSON.data.waste_statistics.shatteredGlass,
          tinCans: responseJSON.data.waste_statistics.tinCans,
          beverageCans: responseJSON.data.waste_statistics.beverageCans,
          wastePaper: responseJSON.data.waste_statistics.wastePaper,
          plasticBags: responseJSON.data.waste_statistics.plasticBags,
          insecticides: responseJSON.data.waste_statistics.Insecticides,
          pesticides: responseJSON.data.waste_statistics.Pesticides,
          thinners: responseJSON.data.waste_statistics.Thinners,
          drugs: responseJSON.data.waste_statistics.Drugs,
          artistsMaterials: responseJSON.data.waste_statistics.artistsMaterials,
          cosmetics: responseJSON.data.waste_statistics.Cosmetics,
        })
      })
      .catch((error) => alert(error.message))
    if (this.props.name == 'general') {
      return (
        <View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/plasticFoodBags.png')}>
            </Image>
            <Text>{this.props.lang.waste.plasticFoodBags} : {this.state.plasticFoodBags}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/plasticFoodContainers.png')}>
            </Image>
            <Text>{this.props.lang.waste.plasticFoodContainers} : {this.state.plasticFoodContainers}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/straw.png')}>
            </Image>
            <Text>{this.props.lang.waste.straw} : {this.state.straw}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/snackBags.png')}>
            </Image>
            <Text>{this.props.lang.waste.snackBags} : {this.state.snackBags}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/candyBags.png')}>
            </Image>
            <Text>{this.props.lang.waste.candyBags} : {this.state.candyBags}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/noodlesBags.png')}>
            </Image>
            <Text>{this.props.lang.waste.noodlesBags} : {this.state.noodlesBags}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/noodlesCups.png')}>
            </Image>
            <Text>{this.props.lang.waste.noodlesCups} : {this.state.noodlesCups}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/tissue.png')}>
            </Image>
            <Text>{this.props.lang.waste.tissue} : {this.state.tissue}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/paperCups.png')}>
            </Image>
            <Text>{this.props.lang.waste.paperCups} : {this.state.paperCups}</Text>
          </View>
        </View>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/foodScraps.png')}>
            </Image>
            <Text>{this.props.lang.waste.foodScraps} : {this.state.foodScraps}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/fruitPeels.png')}>
            </Image>
            <Text>{this.props.lang.waste.fruitPeels} : {this.state.fruitPeels}</Text>
          </View>
        </View>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/bottles.png')}>
            </Image>
            <Text>{this.props.lang.waste.bottles} : {this.state.bottles}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/plasticBottles.png')}>
            </Image>
            <Text>{this.props.lang.waste.plasticBottles} : {this.state.plasticBottles}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/milkBottles.png')}>
            </Image>
            <Text>{this.props.lang.waste.milkBottles} : {this.state.milkBottles}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/glasses.png')}>
            </Image>
            <Text>{this.props.lang.waste.glasses} : {this.state.glasses}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/shatteredGlass.png')}>
            </Image>
            <Text>{this.props.lang.waste.shatteredGlass} : {this.state.shatteredGlass}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/tinCans.png')}>
            </Image>
            <Text>{this.props.lang.waste.tinCans} : {this.state.tinCans}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/beverageCans.png')}>
            </Image>
            <Text>{this.props.lang.waste.beverageCans} : {this.state.beverageCans}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/wastePaper.png')}>
            </Image>
            <Text>{this.props.lang.waste.wastePaper} : {this.state.wastePaper}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/plasticBags.png')}>
            </Image>
            <Text>{this.props.lang.waste.plasticBags} : {this.state.plasticBags}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/insecticides.png')}>
            </Image>
            <Text>{this.props.lang.waste.insecticides} : {this.state.insecticides}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/pesticides.png')}>
            </Image>
            <Text>{this.props.lang.waste.pesticides} : {this.state.pesticides}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/thinners.png')}>
            </Image>
            <Text>{this.props.lang.waste.thinners} : {this.state.thinners}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/drugs.png')}>
            </Image>
            <Text>{this.props.lang.waste.drugs} : {this.state.drugs}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/artistsMaterials.png')}>
            </Image>
            <Text>{this.props.lang.waste.artistsMaterials} : {this.state.artistsMaterials}</Text>
          </View>
          <View style={styles.binInfoWasteList}>
            <Image
              style={styles.binInfoWastePic}
              source={require('./images/waste/cosmetics.png')}>
            </Image>
            <Text>{this.props.lang.waste.cosmetics} : {this.state.cosmetics}</Text>
          </View>
        </View>
      )
    }
  }
})

export default class BinInfo extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      curCount: 0,
    }
  }


  _getName() {
    if (this.props.name == 'general') {
      return (
        <Text>{this.props.lang.main.text.general}</Text>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Text>{this.props.lang.main.text.compostable}</Text>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Text>{this.props.lang.main.text.recycle}</Text>
      )
    } else if (this.props.name == 'hazardous') {
      return (
        <Text>{this.props.lang.main.text.hazardous}</Text>
      )
    }
  }
  _getInfo() {
    if (this.props.name == 'general') {
      return (
        <Text>{this.props.lang.main.text.generalInfo}</Text>
      )
    } else if (this.props.name == 'compostable') {
      return (
        <Text>{this.props.lang.main.text.compostableInfo}</Text>
      )
    } else if (this.props.name == 'recycle') {
      return (
        <Text>{this.props.lang.main.text.recycleInfo}</Text>
      )
    } else if (this.props.name == 'hazardous') {
      return (
        <Text>{this.props.lang.main.text.hazardousInfo}</Text>
      )
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <TouchableHighlight
              onPress={() => this.props.func()}>
              <Image
                style={styles.backButton}
                source={require('./images/Button/back.png')} />
            </TouchableHighlight>
            <Text style={styles.topTitleText}>
              {this._getName()}
            </Text>
          </View>
        </View>
        <View style={styles.upperContent}>
          <View style={[styles.binsRow, { marginTop: 20 }]}>
            <View style={styles.bin}>
              <BinImg name={this.props.name} />
            </View>
            <View style={[styles.bin, { marginTop: 15, borderWidth: 1, borderRadius: 10 }]}>
              <Text style={[styles.text, { margin: 10 }]}>
                {this._getInfo()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.wasteTable}>
          <ItemList name={this.props.name} lang={this.props.lang} />
        </View>
      </ScrollView>
    )
  }
}

module.exports = BinInfo;