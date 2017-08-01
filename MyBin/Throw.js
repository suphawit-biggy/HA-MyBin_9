import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  AsyncStorage,
  ListView,
  Alert,
  TouchableHighlight
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
      name: '',
    }
    this._start = this._start.bind(this)
    this.throwIt = this.throwIt.bind(this)
    this._getItemName = this._getItemName.bind(this)
  }

  async _start() {
    const value = await AsyncStorage.getItem(langCode)
    this._getItemName()
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
  _getItemName() {
    if (this.props.num == 0) {
      this.setState({ name: this.state.lang.waste.artistsMaterials })
    } else if (this.props.num == 1) {
      this.setState({ name: this.state.lang.waste.beverageCans })
    } else if (this.props.num == 2) {
      this.setState({ name: this.state.lang.waste.bottles })
    } else if (this.props.num == 3) {
      this.setState({ name: this.state.lang.waste.candyBags })
    } else if (this.props.num == 4) {
      this.setState({ name: this.state.lang.waste.cosmetics })
    } else if (this.props.num == 5) {
      this.setState({ name: this.state.lang.waste.drugs })
    } else if (this.props.num == 6) {
      this.setState({ name: this.state.lang.waste.foodScraps })
    } else if (this.props.num == 7) {
      this.setState({ name: this.state.lang.waste.fruitPeels })
    } else if (this.props.num == 8) {
      this.setState({ name: this.state.lang.waste.glasses })
    } else if (this.props.num == 9) {
      this.setState({ name: this.state.lang.waste.insecticides })
    } else if (this.props.num == 10) {
      this.setState({ name: this.state.lang.waste.milkBottles })
    } else if (this.props.num == 11) {
      this.setState({ name: this.state.lang.waste.noodlesBags })
    } else if (this.props.num == 12) {
      this.setState({ name: this.state.lang.waste.noodlesCups })
    } else if (this.props.num == 13) {
      this.setState({ name: this.state.lang.waste.paperCups })
    } else if (this.props.num == 14) {
      this.setState({ name: this.state.lang.waste.pesticides })
    } else if (this.props.num == 15) {
      this.setState({ name: this.state.lang.waste.plasticBags })
    } else if (this.props.num == 16) {
      this.setState({ name: this.state.lang.waste.plasticBottles })
    } else if (this.props.num == 17) {
      this.setState({ name: this.state.lang.waste.plasticFoodBags })
    } else if (this.props.num == 18) {
      this.setState({ name: this.state.lang.waste.plasticFoodContainers })
    } else if (this.props.num == 19) {
      this.setState({ name: this.state.lang.waste.shatteredGlass })
    } else if (this.props.num == 20) {
      this.setState({ name: this.state.lang.waste.snackBags })
    } else if (this.props.num == 21) {
      this.setState({ name: this.state.lang.waste.straw })
    } else if (this.props.num == 22) {
      this.setState({ name: this.state.lang.waste.thinners })
    } else if (this.props.num == 23) {
      this.setState({ name: this.state.lang.waste.tinCans })
    } else if (this.props.num == 24) {
      this.setState({ name: this.state.lang.waste.tissue })
    } else if (this.props.num == 25) {
      this.setState({ name: this.state.lang.waste.wastePaper })
    }
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

  throwIt() {
    //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
    //เลข 6 7 ไปหน้า throw - Compostable
    //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
    //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
    if (this.props.num == 0) {
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "artistsMaterials",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 1) {
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "beverageCans",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 2) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "bottles",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 3) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "candyBags",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 4) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "cosmetics",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 5) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "drugs",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 6) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "foodScraps",
              selected: 1
            }],
          bin_statistics: {
            compostable: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 7) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "fruitPeels",
              selected: 1
            }],
          bin_statistics: {
            compostable: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 8) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "glasses",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 9) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "Insecticides",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 10) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "milkBottles",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 11) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "noodlesBags",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 12) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "noodlesCups",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 13) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "paperCups",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 14) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "Pesticides",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 15) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "plasticBags",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 16) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "plasticBottles",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 17) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "plasticFoodBags",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 18) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "plasticFoodContainers",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 19) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "shatteredGlass",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 20) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "snackBags",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 21) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "straw",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 22) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "Thinners",
              selected: 1
            }],
          bin_statistics: {
            hazardous: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 23) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "tinCans",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 24) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "Tissue",
              selected: 1
            }],
          bin_statistics: {
            general: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    } else if (this.props.num == 11) {
      //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
      //เลข 6 7 ไปหน้า throw - Compostable
      //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
      //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 9,
          secret: 'NN7Vtb',
          waste_statistics: [
            {
              category: "wastePaper",
              selected: 1
            }],
          bin_statistics: {
            recycle: 1
          }
        })
      })
        .catch((error) => alert(error.message))
    }

    this.props.func()

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageRow}>
          <View style={styles.TitleRow}>
            <TouchableHighlight
              onPress={() => this.props.func()}>
              <Image
                style={styles.backButton}
                source={require('./images/Button/back.png')} />
            </TouchableHighlight>
            <Text style={styles.topTitleText}>
              {this.state.name}
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
            <View style={[styles.bin, { margin: 15, borderWidth: 2, borderRadius: 10, borderColor: '#ffA500' }]}>
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
                { text: this.state.lang.comfirmPopUp.button.no, onPress: () => console.log('Cancel Pressed') },
                { text: this.state.lang.comfirmPopUp.button.yes, onPress: () => this.throwIt() },
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