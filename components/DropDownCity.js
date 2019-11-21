import React,{Component} from 'react'
import { Select,Option,OptionList, updatePosition } from 'react-native-material-dropdown';
import { View, Text, StyleSheet, AppRegistry } from 'react-native'


export default class DropdownCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: '',
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _canada(province) {
    return this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <View style={{ height: 10 }}/>

          <Text>Selected Canada's province: {this.state.canada}</Text>
          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

