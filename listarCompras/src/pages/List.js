import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class Lista extends Component {
    static navigationOptions = {
        title: 'Listar Itens',
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                {/* <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}></ScrollView>
                    <View>
                        <Text>
                            Lista
                        </Text>
                    </View>
                </SafeAreaView> */}

                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Text>
                        Lista
                    </Text>
                    <Button
                        title='Cadastrar mais Produtos'
                        onPress={() => {
                            this.props.navigation.navigate('Home');
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