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

export default class Details extends Component {
    static navigationOptions = {
        title: 'Cadastrar Itens',
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Text>
                        Details
                    </Text>
                    <Button
                        title='Ver Lista'
                        onPress={() => {
                            this.props.navigation.navigate('List')
                        }} />
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