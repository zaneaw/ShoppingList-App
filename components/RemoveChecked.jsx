import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function RemoveChecked({deleteCheckedItems}) {
  return (
    <TouchableOpacity style={styles.removeCheckedButton} onPress={() => deleteCheckedItems()}>
        <Text style={styles.text}>Remove Selected</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
  removeCheckedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    borderWidth: 2,
    borderColor: 'cornflowerblue',
    paddingVertical: 8,
    marginBottom: 1,
  },
  text: {
    fontSize: 20,
  }
})
