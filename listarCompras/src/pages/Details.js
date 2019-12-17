import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class Details extends Component {
    static navigationOptions = {
        title: 'Cadastrar Itens',
    };

    constructor() {
        super();

        this.state = {
            name: '',
        }
    }

    changeName(name) {
        this.setState({ name });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <Text style={styles.title}>
                    Cadastrar Itens
                </Text>
                <TextInput placeholder="Insira o nome do produto"
                    style={styles.input}
                    onChangeText={(name) => this.changeName(name)}
                    value={this.state.name}
                />
                <TouchableHighlight
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('List', { name: this.state.name })
                    }}
                >
                    <Text style={styles.textButton}>Ver Lista</Text>
                </TouchableHighlight>
            </View>
        );
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
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderColor: '#898989',
        borderWidth: 2,
        padding: 10,
        width: 300,
    },
    btn: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#f44336'
    },
    textButton: {
        color: '#fff'
    }
});