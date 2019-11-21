import React from 'react'
import { Dropdown } from 'react-native-material-dropdown';
import { View, StyleSheet } from 'react-native'

let data = [
  {
    value: 'Rent',
  },
  {
    value: 'Food/Groceries',
  },
  {
    value: 'Electricity',
  },
  {
    value: 'Telephone/Mobile/Internet',
  },
  {
    value: 'Household goods',
  },
  {
    value: 'Transportation',
  },
  {
    value: 'Clothing',
  },
  {
    value: 'Leisure activities, traveling',
  },
  {
    value: 'Charity',
  },
  {
    value: 'Books, newspapers, magazines',
  },
  {
    value: 'Sport and sports goods',
  },
  {
    value: 'Education, health and beauty',
  },
  {
    value: 'Health and pharmaceuticals',
  },
  {
    value: 'Other utility expenses',
  }];


const CaterogyList = ({ category, onChangeHandler }) => (

  <View style={styles.inputContainer}>
    <Dropdown style={styles.input}
      label='Category List'
      placeholder="Select your expense category here"
      data={data}
      value={category}
      onChangeText={onChangeHandler}
    />
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    padding: 10,
    marginLeft: 100,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    width: 250
  },
  input: {
    height: 60,
    width: 100,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})



export default CaterogyList


