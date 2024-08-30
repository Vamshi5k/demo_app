import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <TouchableOpacity>
                    <Image 
                        source={{ uri: 'https://img.freepik.com/premium-photo/man-with-scarf-his-head-is-walking-down-street_737852-60290.jpg?ga=GA1.1.1134253357.1725012030&semt=ais_hybrid' }} 
                        style={styles.userImage}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.userName}>Vamshi Animela</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Icon name="bell-badge-outline" size={30} color={'black'} />  
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 13,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginBottom: 2
        
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default Header;
