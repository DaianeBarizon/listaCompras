import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableHighlight,
    Button,
    Alert,
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
            nome: '',
            quant: '',
            price: '',
            itens: []
        }
    };

    cadastrarItens = () => {
        this.setState({
            itens: [...this.state.itens, {
                name: this.state.name, quant: this.state.quant, price: this.state.price
            }],
            name: '',
            quant: '',
            price: ''
        });

        Alert.alert('Cadastrado com Sucesso!');
    };

    /* handleDelete = index => {
        let item = [...this.state.itens]
        item.splice(index, 1)
        this.setState({
            itens: item
        })
    }; */

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <Text style={styles.title}>
                    Cadastrar Itens
                </Text>
                <TextInput placeholder="Insira o nome do produto"
                    style={styles.input}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput placeholder="Insira a quantidade do produto"
                    style={styles.input}
                    onChangeText={(quant) => this.setState({ quant })}
                    value={this.state.quant}
                />
                <TextInput placeholder="Insira o preço da unidade"
                    style={styles.input}
                    onChangeText={(price) => this.setState({ price })}
                    value={this.state.price}
                />
                <Button
                    title='Cadastrar'
                    type='outline'
                    color='#f44336'
                    onPress={this.cadastrarItens}
                />
                <View style={styles.empty}></View>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={() => this.props.navigation.navigate('List', {
                        itens: this.state.itens
                    })}>
                    <Text style={styles.textButton}>VER LISTA</Text>
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
        marginBottom: 25,
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