import React from 'react'
import { SafeAreaView , Text, StyleSheet, Platform, StatusBar} from 'react-native'

export const Screen = ({children}) => {
  return (
    <SafeAreaView style={StyleSheet.screen}>
    {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen : {
    paddingTop : Platform.OS == 'android' ? StatusBar.height : 0
  }
});