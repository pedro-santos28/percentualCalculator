import {useState, useEffect} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function PercetualCalculator() {

  const [value, setValue] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [finalValue, setFinalValue] = useState(0)

  handleCalculateDiscount = () => {
    if(value <= 0){
      Alert.alert("the value must be higher than 0")
      setFinalValue(0)
    }
    if(discount < 0 || discount > 100){
      Alert.alert("the discount percentage must be within 0% and 100%")
      setFinalValue(0)
    }else{
      let temp = value - (value * (discount/100))
      setFinalValue(temp)
    }
  }

  useEffect(() => {
    if(isNaN(finalValue)){
      Alert.alert("Invalid values, try again.")
      setFinalValue(0)
    }
  }, [finalValue])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Percentual Calculator </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Value (R$)</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input} 
        /> 
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Discount (%)</Text>
        <TextInput
          value={discount}
          onChangeText={setDiscount}
          style={styles.input}  
        /> 
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={handleCalculateDiscount}> 
        <Text style={styles.btnText}> Calculate </Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Final value: <Text style={styles.finalValue}> R$ {finalValue} </Text> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: '700'
  },
  inputContainer: {
    marginVertical: 10,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    width: 300,
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 10
  },
   input: {
     marginVertical: 5,
     borderWidth: 1,
     borderRadius: 5,
     fontSize: 20,
     padding: 5
   },
   inputText: {
     fontSize: 20,
     fontWeight: '500'
   },
   btnContainer: {
     padding: 13,
     borderWidth: 1,
     borderColor: 'white',
     width: 300,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'green',
     borderRadius: 10,
     marginVertical: 5
   },
   btnText: {
     color: 'white',
     fontSize: 20
   },
   finalValue: {
     color: 'green'
   }
    
});
