import React, { useState, Component } from 'react'
import { Text, View, Picker, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
// import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select'

// import {Picker} from 'react-native'

const Info = ({ navigation }) => {

    // var data = [{
    //     value: 'Banana',
    // }, {
    //     value: 'Mango',
    // }, {
    //     value: 'Pear',
    // }];

    const [drop, setdrop] = useState('');
    const [selectedValue, setSelectedValue] = useState("Select your goal");
    const [check, setcheck] = useState("Select");
    const [expence, setexpence] = useState("Select");
    return (
        <SafeAreaView style={{ backgroundColor: 'lightgrey', flex: 1, backgroundColor: '#61BFFF' }}>
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#61BFFF', height: 70, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center', justifyContent: 'center' }}  >
                <TouchableOpacity style={styles.countstyle1}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countlinestyle} />

                <TouchableOpacity style={styles.countstyle1}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countlinestyle} />

                <TouchableOpacity style={styles.countstyle}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countlinestyle} />

                <TouchableOpacity style={styles.countstyle}>
                    <Text>4</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <View >
                <Text style={{ fontSize: 20, margin: 20, marginTop: 40, color: 'black', fontWeight: 'bold' }}>Personal Information</Text>
            </View>

            <View >
                <Text style={{ fontSize: 15, margin: 20, marginTop: 0, color: 'black', }}>Please fill in the information below and your goal for digital saving</Text>
            </View>

            {/* <Dropdown
                label='Favorite Fruit'
                data={data}
            /> */}
            <RNPickerSelect
                onValueChange={(value) => setdrop(value)}

                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}

            />


            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 300, marginLeft: 20 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select your goal" value="Select your goal" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Picker
                selectedValue={check}
                style={{ height: 50, width: 300, marginLeft: 20 }}
                onValueChange={(itemValue, itemIndex) => setcheck(itemValue)}
            >
                <Picker.Item label="Select Value Monthly income" value="Select Value Monthly income" />
                <Picker.Item label="100k" value="ABC" />
                <Picker.Item label="200k" value="XYZ" />

            </Picker>

            <Picker
                selectedValue={expence}
                style={{ height: 50, width: 300, marginLeft: 20 }}
                onValueChange={(itemValue, itemIndex) => setexpence(itemValue)}
            >
                <Picker.Item label="Select your Monthly expences" value="Select Value Monthly income" />
                <Picker.Item label="50k" value="ABC" />
                <Picker.Item label="80k" value="XYZ" />

            </Picker>



            <View style={{ margin: 20, height: 50 }}>

                <TouchableOpacity style={{ height: 50, marginTop: 50, borderRadius: 15, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => navigation.navigate('Appoinment')}
                    >
                    <Text style={{ fontSize: 20 }}>Next</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    trackStyle: {
        backgroundColor: 'red',
        height: 100,
    },
    countstyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countstyle1: {
        width: 40,
        height: 40,
        backgroundColor: 'tomato',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countlinestyle: {
        width: 20,
        height: 3,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Info;