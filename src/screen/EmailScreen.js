import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import { create } from 'react-test-renderer';
import Icon from 'react-native-vector-icons/Fontisto'

const EmailScreen = ({ navigation }) => {

    const [emailId, setemailId] = useState('');

    const btnSignInPress = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(emailId==''){
            alert('Please enter valid email')
        }
        else{
            if (reg.test(emailId) === false) {
                console.log("Email is Not Correct");
                alert("Please enter valid emailid")
             return false;
             }else{
                // console.log("Email is  Correct");
                navigation.navigate('Password')
             }
            }
        }


    return (
        <SafeAreaView style={{ backgroundColor: 'lightgrey', flex: 1 }}>
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#61BFFF', height: 70, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center', justifyContent: 'center' }}  >
                <TouchableOpacity style={styles.countstyle}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countlinestyle} />

                <TouchableOpacity style={styles.countstyle}>
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
                <Text style={{ fontSize: 40, margin: 20, marginVertical: 10, color: 'black', fontWeight: 'bold' }}>Welcom to{'\n'}GIN {<Text style={{ color: 'blue' }}> Finans</Text>}</Text>
            </View>

            <View >
                <Text style={{ fontSize: 20, margin: 20, marginTop: 0, color: 'black', fontWeight: 'bold' }}>Welcom to The Bank of The Future Manage and track your account on the go</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View
                    style={{
                        height: 60,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        padding: 5,
                        alignItems: 'center',
                        borderRadius: 15,
                        margin: 20,
                        marginTop: 0,
                        // flex: 1,
                    }}>
                    <Icon name="email" style={{ fontSize: 20 }} />
                    <TextInput placeholder="Search" 
                     label="Email-id" value={emailId}
                     onChangeText={setemailId}
                    style={{ fontSize: 18, marginVertical: 5, borderRadius: 10, paddingLeft: 15, width: '90%', backgroundColor: 'white', }}
                        keyboardType={"email-address"}
                         />
                </View>

                <View style={{ margin: 20, height: 50 }}>
                    {/* <Button title="Next" 
                    height= {50}/> */}
                    <TouchableOpacity style={{ height: 50, borderRadius: 15, backgroundColor: '#61BFFF', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => btnSignInPress() }>
                            {/* navigation.navigate('Password') */}
                        <Text style={{ fontSize: 20 }}>Next</Text>
                    </TouchableOpacity>
                </View>

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
    countlinestyle: {
        width: 20,
        height: 3,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EmailScreen;