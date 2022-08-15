import React, { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'

function ScrollRefresh() {

    const [refreshing,setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true)
        // setTimeout(() => console.log('hello world'),10000)       //anything you want to do on refresh
        setRefreshing(false)
    }

    return (
        // scrollview helps us to scroll if the elements are more then the height of the page
      <ScrollView /*horizontal={true} makes the scroll iin horizontal direstion*/
        refreshControl={
            <RefreshControl
            refreshing={refreshing}   /*triggers onRefresh*/
            onRefresh={onRefresh} 
            colors={['green']}
            />
        }>            
        <View style={styles.box}>
            <Text>1</Text>
        </View>
        <View style={styles.box}>
            <Text>2</Text>
        </View>
        <View style={styles.box}>
            <Text>3</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    box:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    }
})


export default ScrollRefresh