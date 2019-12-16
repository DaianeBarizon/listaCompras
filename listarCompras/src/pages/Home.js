import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Text>
                        Home
                    </Text>
                    <Button
                        title='Inserir Item'
                        onPress={() => {
                            this.props.navigation.navigate('Details')
                        }}
                    />
                    <Button
                        title='Listar Itens'
                        onPress={() => {
                            this.props.navigation.navigate('List')
                        }}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        backgroundColor: Colors.white,
    },
});