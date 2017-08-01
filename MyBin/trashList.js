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
import Throw from './Throw';

var styles = require('./styles');

export default class TrashList extends Component {
  constructor() {
    super()
    this.state = {
      throw: false,
      name: '',
      num: 0,
    }
    this._throwVisible = this._throwVisible
  }


  _handleTouch(trashNumber) {
    //เลข 3 11 12 13 17 18 20 21 24 ไปหน้า throw - General
    //เลข 6 7 ไปหน้า throw - Compostable
    //เลข 1 2 8 10 15 16 19 23 25 ไปหน้า throw - Recycle
    //เลข 0 4 5 9 14 22 ไปหน้า throw - Hazardous
    this.setState({
      num:trashNumber
    })
    if(trashNumber == 3||trashNumber == 11||trashNumber == 12||trashNumber == 13||trashNumber == 17||trashNumber == 18||trashNumber == 20||trashNumber == 21||trashNumber == 24){
      this.setState({
        name:'general',
        throw: true,
      })
    }else if(trashNumber == 6||trashNumber == 7){
      this.setState({
        name:'compostable',
        throw: true,
      })
    }else if(trashNumber == 1||trashNumber == 2||trashNumber == 8||trashNumber == 10||trashNumber == 15||trashNumber == 16||trashNumber == 19||trashNumber == 23||trashNumber == 25){
      this.setState({
        name:'recycle',
        throw: true,
      })
    }else{
      this.setState({
        name:'hazardous',
        throw: true,
      })
    }
  }
  _throwVisible(){
    this.setState({
      throw: !this.state.throw,
    })
    this.props.func()
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
              source={require('./images/Button/back.png')}/>
            </TouchableHighlight>
            <Text style={styles.topTitleText}>
              {this.props.lang.main.text.waste}
            </Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => this._handleTouch(0)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/artistsMaterials.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.artistsMaterials}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(1)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/beverageCans.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.beverageCans}</Text>
              </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(2)}>
            <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/bottles.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.bottles}</Text>
              
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(3)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/candyBags.png')}>
            </Image>
            <View style={styles.wasteItem}>
               <Text style={styles.text}>{this.props.lang.waste.candyBags}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(4)}>  
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/cosmetics.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.cosmetics}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(5)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/drugs.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.drugs}</Text>
            </View>
          </View>
        </TouchableHighlight>  
        <TouchableHighlight onPress={() => this._handleTouch(6)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/foodScraps.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.foodScraps}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(7)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/fruitPeels.png')}>
            </Image>
            <View style={styles.wasteItem}>             
                <Text style={styles.text}>{this.props.lang.waste.fruitPeels}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(8)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/glasses.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.glasses}</Text>
             
            </View>
          </View> 
        </TouchableHighlight>  
        <TouchableHighlight onPress={() => this._handleTouch(9)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/insecticides.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.insecticides}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(10)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/milkBottles.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.milkBottles}</Text>
              
            </View>
          </View>
        </TouchableHighlight>  
        <TouchableHighlight onPress={() => this._handleTouch(11)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/noodlesBags.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.noodlesBags}</Text>
           
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(12)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/noodlesCups.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.noodlesCups}</Text>
              
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(13)}> 
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/paperCups.png')}>
            </Image>
            <View style={styles.wasteItem}>
                <Text style={styles.text}>{this.props.lang.waste.paperCups}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(14)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/pesticides.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.pesticides}</Text>
    
            </View>
          </View>
        </TouchableHighlight>
            <TouchableHighlight onPress={() => this._handleTouch(15)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/plasticBags.png')}>
            </Image>
            <View style={styles.wasteItem}>
  
                <Text style={styles.text}>{this.props.lang.waste.plasticBags}</Text>
              
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._handleTouch(16)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/plasticBottles.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.plasticBottles}</Text>
              
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._handleTouch(17)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/plasticFoodBags.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.plasticFoodBags}</Text>
              
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._handleTouch(18)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/plasticFoodContainers.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.plasticFoodContainers}</Text>
              
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._handleTouch(19)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/shatteredGlass.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.shatteredGlass}</Text>
              
            </View>
          </View>
          </TouchableHighlight> 
          <TouchableHighlight onPress={() => this._handleTouch(20)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/snackBags.png')}>
            </Image>
            <View style={styles.wasteItem}>
             
                <Text style={styles.text}>{this.props.lang.waste.snackBags}</Text>
         
            </View>
          </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => this._handleTouch(21)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/straw.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.straw}</Text>
            
            </View>
          </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this._handleTouch(22)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/thinners.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.thinners}</Text>
              
            </View>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._handleTouch(23)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/tinCans.png')}>
            </Image>
            <View style={styles.wasteItem}>
              
                <Text style={styles.text}>{this.props.lang.waste.tinCans}</Text>
           
            </View>
          </View>
             </TouchableHighlight>
        <TouchableHighlight onPress={() => this._handleTouch(24)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/tissue.png')}>
            </Image>
            <View style={styles.wasteItem}> 
             <Text style={styles.text}>{this.props.lang.waste.tissue}</Text>
            </View>
          </View>
         </TouchableHighlight>  
        <TouchableHighlight onPress={() => this._handleTouch(25)}>
          <View style={styles.wasteList}>
            <Image
              style={styles.wastePic}
              source={require('./images/waste/wastePaper.png')}>
            </Image>
            <View style={styles.wasteItem}>            
                <Text style={styles.text}>{this.props.lang.waste.wastePaper}</Text>
            </View>
          </View>
         </TouchableHighlight> 
        <Modal visible={this.state.throw}
          onRequestClose={() => {
            this.setState({ throw: false })
          }}
          animationType={"slide"}
        >
          <Throw lang={this.props.lang} name={this.state.name} num={this.state.num} func={this._throwVisible.bind(this)}/>
        </Modal>
      </ScrollView>
    )
  }
}

module.exports = TrashList;