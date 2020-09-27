import React, {
    useState

} from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert, SafeAreaView, TextInput, Button, Image } from 'react-native'
import { create } from 'react-test-renderer';
import Icon from 'react-native-vector-icons/Fontisto'
import PassMeter from "react-native-passmeter";



const Password = ({ navigation }) => {

    const [password, setPassword] = useState('');

    function hasLowerCase(str) {
        console.log("hello")
        return (/[a-z]/.test(str));
    }
    function hasUpperCase(str) {
        console.log("hello")
        return (/[A-Z]/.test(str));
    }
    function hasNumCase(str) {
        console.log("hello")
        return (/[0-9]/.test(str));
    }

    const checkcondition = () => {
        password.length < 9 ? alert("Password length should be minimun 9") :
            hasLowerCase(password) ? hasUpperCase(password) ? hasNumCase(password) ? navigation.navigate('Info') : alert("Password should have min 1 number") : alert("Password should have min 1 upper case char") : alert("Password should have min 1 lower case char")
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgrey', flex: 1, backgroundColor: '#61BFFF' }}>
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#61BFFF', height: 70, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center', justifyContent: 'center' }}  >
                <TouchableOpacity style={styles.countstyle1}>
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
                <Text style={{ fontSize: 20, margin: 20, color: 'black', fontWeight: 'bold' }}>Create Password</Text>
                <Text style={{ fontSize: 15, margin: 20, marginTop: 0, fontWeight: 'bold' }}>Password will be used to login account</Text>
            </View>

            <View style={{ flex: 1 }}>
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
                    <TextInput
                        labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                        secureTextEntry
                        placeholder="Create Password" value={password}
                        fontSize={20}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={15}
                        clearButtonMode="always"

                    />




                </View>
                {/* <PassMeter
                        showLabels
                        password={password}
                        maxLength={MAX_LEN}
                        minLength={MIN_LEN}
                        labels={PASS_LABELS}
                    /> */}

                <Text style={{ marginLeft: 25, marginBottom: 20 }}>
                    Complexcity: {password.length < 9 ? "Very weak" : password.length < 11 ? 'normal' : "Strong"}
                </Text>


                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}  >
                    <Image style={{ width: 50, height: 50, }}
                        source={hasLowerCase(password) ? require('../assets/lowwerD.png') :
                            require('../assets/lower.png')}

                    />
                    <Image style={{ width: 50, height: 50, marginLeft: 10 }}
                        // source={require('../assets/upper.png')}
                        source={hasUpperCase(password) ? require('../assets/upperD.png') :
                            require('../assets/upper.png')}
                    />
                    <Image style={{ width: 50, height: 50, marginLeft: 10 }}
                        // source={require('../assets/number.png')}
                        source={hasNumCase(password) ? require('../assets/numD.png') :
                            require('../assets/number.png')}
                    />
                    <Image style={{ width: 50, height: 50, marginLeft: 10 }}
                        // source={require('../assets/char9.png')}
                        source={password.length > 8 ? require('../assets/char9D.png') :
                            require('../assets/char9.png')}
                    />
                </TouchableOpacity>


                <View style={{ margin: 20, height: 50 }}>

                    <TouchableOpacity style={{ height: 50, marginTop: 50, borderRadius: 15, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}
                        onPress={checkcondition}>
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

export default Password;