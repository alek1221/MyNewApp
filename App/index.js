import React, {Component} from 'react';
import {FlatList, Text, View, AppRegistry, StyleSheet, Navigator } from 'react-native';


export default class App extends Component {
    render () {
        return (

            <Navigator initialRoute = {{if: 'Page1'}}
                       renderScene = {this.navigatorRenderScene} />
        );
    }
    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'Page1':
                return ( <Page1 navigator = {navigator} /> );
            case  'Page2':
                return ( <Page2 navigator = {navigator} /> );
        }
    }
}
class Page1 extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.textView} >This is page 1</Text>
                <Text onPress ={ ()=> this.props.navigator.push({ id: 'Page2' }) } >go to page 2</Text>
            </View>
        )
    }
}
class Page2 extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.textView} >This is page 2</Text>
                <Text onPress ={ ()=> this.props.navigator.push({ id: 'Page1' }) } >go to page 1</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            fontSize: 30
        },
    textView: {

        width: 150,
        textAlignVertical:'center',
        padding: 10,
        color: '#000'

    }
    }
);


