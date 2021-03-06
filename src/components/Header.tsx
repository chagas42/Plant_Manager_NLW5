import React from 'react'; 
import { 
    View,
    StyleSheet, 
    Text, 
    Image
 } from 'react-native'; 
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; 

import UserImg from '../assets/celso.jpeg'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Header = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting} >Olá,</Text>
                <Text style={styles.userName}>Júnior</Text>
            </View>

            <Image 
                style={styles.image}
                source={UserImg}
            />

        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 20, 
        marginTop: getStatusBarHeight(),
    }, 
    image: {
        width: 70, 
        height: 70, 
        borderRadius: 40
    },
    greeting: {
        fontSize: 32, 
        color: colors.heading, 
        fontFamily: fonts.text, 
    }, 
    userName: {
        fontSize: 32, 
        fontFamily: fonts.heading, 
        color: colors.heading, 
        lineHeight: 40
    }, 

}); 