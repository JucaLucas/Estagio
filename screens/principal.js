import React from "react"
import { StyleSheet, View, Text } from 'react-native';

export default function Principal() {
  return(
    <View style={styles.container}>

         <View> 
          <Text> Principal! </Text>
         </View>
         
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});