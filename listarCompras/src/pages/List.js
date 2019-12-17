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

export default class List extends Component {
    static navigationOptions = {
        title: 'Listar Itens',
    };

    render() {
        const name = this.props.navigation.getParam('name');
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.empty}>
                    Lista
                </Text>
                <Text style={styles.list}>{JSON.stringify(name)}</Text>
                <Button
                    title='Cadastrar Mais'
                    type='outline'
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }} />
            </View>
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
    empty: {
        margin: 20,
        fontWeight: 'bold'
    },
    list: {
        fontWeight: 'bold',
        margin: 20,
    },
});