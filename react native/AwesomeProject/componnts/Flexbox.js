import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Flexbox = () => {
  return (
    <>
        <View style={styles.box1}>
            <View style={styles.view1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text}>3</Text>
            </View>
        </View>
        <View style={styles.box2}>
            <View style={styles.view4}>
                <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.view5}>
                <Text style={styles.text}>5</Text>
            </View>
        </View>
        <View style={styles.box3}>
            <View style={styles.view6}>
                <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.view7}>
                <Text style={styles.text}>7</Text>
            </View>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    text:{
        fontSize:25
    },
    view1:{
        backgroundColor:'skyblue',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2:{
        backgroundColor:'pink',
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view3:{
        backgroundColor:'yellow',
        flex:3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box1:{
        flexDirection:'row'
    },
    view4:{
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view5:{
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2:{
        alignItems:'stretch',
    },
    view6:{
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    view7:{
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    box3:{
        flexDirection:'row',
        alignItems:'stretch',
        flex:1
    }
})