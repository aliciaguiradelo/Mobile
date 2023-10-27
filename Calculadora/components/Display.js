import { View, Text, StyleSheet } from 'react-native'

export default props => {
  return(
    <View style={displayStyles.display}>
      <Text style={displayStyles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  )
}

const displayStyles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#484846'
  },
  displayValue: {
    color: '#fff',
    fontSize: 55
  }
})