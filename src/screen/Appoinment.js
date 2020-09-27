import React, { useState, Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
// import { Dropdown } from 'react-native-material-dropdown';
// import {Picker} from 'react-native-co'
import RNPickerSelect from 'react-native-picker-select'
// import DateTimePicker from "react-native-modal-datetime-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import {Picker} from 'react-native'

const Appoinment = ({ navigation }) => {

    // var data = [{
    //     value: 'Banana',
    // }, {
    //     value: 'Mango',
    // }, {
    //     value: 'Pear',
    // }];
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setdate] = useState('Select date dd/mm/yyyy');
    const [time, settime] = useState('Select time hh:mm');

    const [drop, setdrop] = useState('');
    const [selectedValue, setSelectedValue] = useState("Select your goal");
    const [check, setcheck] = useState("Select");
    const [expence, setexpence] = useState("Select");

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        let today = date;

        let datenew = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
        let timenew = today.getHours() + ":" + today.getMinutes();
        setdate(datenew);
        
        settime(timenew);

        console.log(datenew, timenew)
        hideDatePicker();
    };
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

                <TouchableOpacity style={styles.countstyle1}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countlinestyle} />

                <TouchableOpacity style={styles.countstyle}>
                    <Text>4</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <View >
                <Text style={{ fontSize: 20, margin: 20, marginTop: 40, color: 'black', fontWeight: 'bold' }}>Scedule Video call</Text>
            </View>

            <View >
                <Text style={{ fontSize: 15, margin: 20, marginTop: 0, color: 'black', }}>Choose the date and time that you prefered, we will send a link via email to make a video call on the schedule date and time</Text>
            </View>

            {/* <Dropdown
                label='Favorite Fruit'
                data={data}
            /> */}

            {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            {/* <Button title="Show time Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            /> */}

            <View
                style={{
                    height: 60,
                    backgroundColor: 'white',
                    // flexDirection: 'row',
                    padding: 5,
                    // alignItems: 'center',
                    borderRadius: 15,
                    margin: 20,
                    marginVertical: 0,
                    justifyContent: 'center'
                    // flex: 1,
                }}>
               
                <TouchableOpacity onPress={() => showDatePicker()}>
                   <Text style={{fontSize: 20}}>{date}</Text>
                </TouchableOpacity>
                
            </View>

            <View
                style={{
                    height: 60,
                    backgroundColor: 'white',
                    // flexDirection: 'row',
                    padding: 5,
                    // alignItems: 'center',
                    borderRadius: 15,
                    margin: 20,
                    marginVertical: 10,
                    justifyContent: 'center'
                    // flex: 1,
                }}>
               
                <TouchableOpacity onPress={() => showDatePicker()}>
                   <Text style={{fontSize: 20}}>{time}</Text>
                </TouchableOpacity>
                
            </View>



            <View style={{ margin: 20, height: 50 }}>

                <TouchableOpacity style={{ height: 50, marginTop: 50, borderRadius: 15, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}
                // onPress={}
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

export default Appoinment;