import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';

/*************************************** Library ********************************************/

/*************************************** Pages ********************************************/
import styles from '../style/styleSheet';
import { Icon } from 'expo';
import storeInfo from '../jsons/storeinfo';
/*************************************** Variables ****************************************/
let personImage = 'https://placekitten.com/200/240';
export default class Sidebar extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: '1%', borderRadius: 16, backgroundColor: '#E4E4E4', justifyContent: 'center', flexDirection: 'row' }}>
                <ScrollView style={{ flex: 0.6, }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
