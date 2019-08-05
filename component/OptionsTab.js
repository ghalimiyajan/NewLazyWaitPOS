import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class OptionsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    _selected() {
        this.setState({ selected: true, })
        return (
            <TouchableOpacity onPress={()=> this.setState({selected:false})}>
                <View style={{ width: 35, height: 20, backgroundColor: '#48C4B7', borderRadius: 10 }}>
                    <Text>Hello</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <TouchableOpacity onPress={()=> this._selected()}>
                <View style={{ width: 35, height:20, borderColor: '#707070', borderRadius: 10, backgroundColor: '#fff' }}>
                    <Text> OptionsTab </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default OptionsTab;
