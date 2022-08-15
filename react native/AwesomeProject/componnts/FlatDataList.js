import React, { useState } from 'react'
import { FlatList, StyleSheet, View,Text, SectionList } from 'react-native'

function FlatDataList() {

  initialItem = [
    {name:'Item1'},
    {name:'Item2'},
    {name:'Item3'},
    {name:'Item4'},
    {name:'Item5'},
    {name:'Item6'},
    {name:'Item7'},
    {name:'Item8'},
    {name:'Item9'},
  ]
  const [items,setItems] = useState(initialItem)

  const DATA = [
    {
      title:'title1',
      data:['Item 1-1','Item 1-2','Item 1-3']
    },
    {
      title:'title2',
      data:['Item 2-1','Item 2-2','Item 2-3']
    },
    {
      title:'title3',
      data:['Item 3-1','Item 3-2','Item 3-3']
    },
    {
      title:'title4',
      data:['Item 4-1','Item 4-2','Item 4-3']
    }
  ]

  return (
    <View>
    {/*  <FlatList style={styles.item_body}  
      //horizontal numColumns={2}
        data={items}
        keyExtractor = {(item,index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          //we can use the referesh contril inside it even
        )}
      />
*/}
      <SectionList style={styles.sectionList} 
        keyExtractor = {(item,index) => index.toString()}
        sections={DATA}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
          renderItem={({item}) => (
              <Text style={styles.text}>{item}</Text>
          )}
      />
    </View>
  )
}

export default FlatDataList



const styles = StyleSheet.create({
    item_body:{
        height: '100%',
        width: '100%',
        backgroundColor:'pink'
    },
    item:{
      height:100,
      width:'100%',
      margin:10,
      color:'black',
      backgroundColor:'green',
      justifyContent: 'center',
      alignItems:'center'

    },
    text:{
      fontSize:50,
      fontWeight:'bold'
    }
})