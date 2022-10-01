import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function RemoveChecked({deleteCheckedItems}) {
  return (
    <TouchableOpacity style={styles.removeCheckedButton} onPress={() => deleteCheckedItems()}>
        <Text>Remove Selected</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
  removeCheckedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
})
