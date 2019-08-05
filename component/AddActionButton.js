import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ****************************pages **********************************//
import styles from '../style/styleSheet';
import Dictionary from '../services/dictionary';

// ****************************Libraries******************************//
import { Icon } from 'expo';

let lan = 'en';


class AddActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <TouchableOpacity style={{ flex: 0.1 }}>
                <View style={{ flex: 1, backgroundColor: '#3FAEA3', borderBottomEndRadius: 16, borderBottomStartRadius: 16, justifyContent: 'center', height: '100%', width:'100%' }}>
                    <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.ADD[lan]}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}
export default AddActionButton
