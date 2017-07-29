import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native';

var styles = require('./styles');

export default class MyBin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageRow}>
          <View style={{flex: 9}}>
          </View>
          <View style={styles.language}>
            <Button style={styles.languageButton}
              title="EN"
              />
          </View>
        </View>
        <Text style={styles.titleText}>
            BIN
        </Text>
        <View style={styles.binsRow}>
          <View style={styles.bin}>
            <Text style={styles.text}>
            General
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/g.png')}
            />
            <Button style={styles.infoButton}
              title="Info"
              />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            Recycle
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/b.png')}
            />
            <Button style={styles.infoButton}
              title="Info"
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            Compostable
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/y.png')}
            />
            <Button style={styles.infoButton}
              title="Info"
            />
          </View>
          <View style={styles.bin}>
            <Text style={styles.text}>
            Hazadous
            </Text>
            <Image
              style={styles.imgBin}
              source={require('./images/bin/r.png')}
            />
            <Button style={styles.infoButton}
              title="Info"
            />
          </View>
        </View>
        <View style={styles.throwButton}>
            <Button
                title="Throw!"
                />
        </View>
      </View>
    );
  }
}

module.exports = MyBin;