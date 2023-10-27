import { Component, useState } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// or any files within the Snack
import Display from './components/Display'
import Button from './components/Button'

export default App => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState('')
  const [values, setValues] = useState([0, 0])
  const [position, setPosition] = useState(0)
  const [isPercentage, setIsPercentage] = useState(false)

  addDigit = n => { 
    if (n === '.' && displayValue.includes('.'))  {
      return
    }
    const isDecimal = n ==='.'
    const clear = !isDecimal && (displayValue === '0' || clearDisplay)
    const current = clear ? '' : displayValue
    const displayVal = current + n
    setDisplayValue(displayVal)
    setClearDisplay(false)

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const vals = [...values]
      values[position] = newValue
      setValues([vals])
    }
  }

  addOperation = op => {
    if (position === 0) {
      setOperation(op)
      setPosition(position)
      setClearDisplay(true)
      setIsPercentage(op === '%')
    } else {
      const isEquals = op === '='
      const vals = [...values]
      if (isPercentage) {
        vals[0] = (vals[0]/ 100) * vals[1]
      } else {
        try {
        vals[0] = eval(`${vals[0]} ${operation} ${vals[1]}`)
      } catch (e) {
          alert(e)
        }
      }
      
      values[1] = 0
      setDisplayValue(values[0])
      setOperation(isEquals ? null : operation)
      setPosition(isEquals ? 0 : 1)
      setClearDisplay(true)
    }
  }

  clearMemory = n => {
    this.setState({...initialState})
  }

  setNegativePositive = () => {
    const clear = displayValue === '0' || clearDisplay
    const current = clear ? '' : displayValue
    const newValue = parseFloat(current) * -1

    setDisplayValue(newValue)
    setClearDisplay(clearDisplay)
  }

    return (
      <View style={styles.container}>
        <Display value={displayValue} />
        <View style={styles.buttons}>
          <Button label='C' onClick={clearMemory} otherButtons />
          <Button label='+/-' onClick={setNegativePositive} otherButtons />
          <Button label='%' onClick={addOperation} otherButtons />
          <Button label='/' onClick={addOperation} operation />
          <Button label='7' onClick={addDigit}/>
          <Button label='8' onClick={addDigit}/>
          <Button label='9' onClick={addDigit}/>
          <Button label='*' onClick={addOperation} operation />
          <Button label='4' onClick={addDigit}/>
          <Button label='5' onClick={addDigit}/>
          <Button label='6' onClick={addDigit}/>
          <Button label='-' onClick={addOperation} operation />
          <Button label='1' onClick={addDigit}/>
          <Button label='2' onClick={addDigit}/>
          <Button label='3' onClick={addDigit}/>
          <Button label='+' onClick={addOperation} operation />
          <Button label='0' onClick={addDigit} zero />
          <Button label='.' onClick={addDigit} />
          <Button label='=' onClick={addOperation} operation />
        </View>
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
