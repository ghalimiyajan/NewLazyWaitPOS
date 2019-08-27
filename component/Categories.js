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
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 16, backgroundColor: '#E4E4E4', flexDirection: 'row' }}>
                {/* *****Home******* */}
                <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('Dashboard')}>
                    <View style={[styles.categoriesBoxes, { alignItems: 'center', justifyContent: 'center', alignContent: 'center' }]}>
                        <Text>All</Text>
                    </View>
                </TouchableOpacity>
                {/* *********Nav list******* */}
                <ScrollView horizontal={true} showsVerticalScrollIndicator={false} style={{ flex: 0.6, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity><TouchableOpacity>
                            <View style={styles.categoriesBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}></View>
                                <ScrollView style={styles.cashierBoxesText}>
                                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Burger</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
