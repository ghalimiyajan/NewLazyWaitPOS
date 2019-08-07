import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

 class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ selected: !this.state.selected })}>
                    <View style={{ backgroundColor: this.state.selected == true ? "#59C9BF" : '#fff', borderColor: this.state.selected == true ? "rgba(0,0,0,0)" : '#707070', width: 20, height: 20, borderWidth: 0.5 }} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default Checkbox;
