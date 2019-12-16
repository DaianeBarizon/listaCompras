import React from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Router from './Router';

const App = () => {
    return (
        <>
            <StatusBar style={styles.scrollView} barStyle="dark-content" />
            <Router />
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
});

export default App;
