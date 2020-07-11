import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const axios      = require( 'axios' );
const HTMLParser = require( 'fast-html-parser' );

export default class Home extends React.Component {
    componentDidMount() {

    axios.get( 'https://www.realmeye.com/player/SweetxPeas' )
        .then( function( response )
        {
            var html = ( response.data ).replace( /<script(.*?)<\/script>/g, "" );
            const root = HTMLParser.parse( html );

            // I say that we go throug with the selectors and code for now, and if we still find
            // it to be bad then we find a way to re-write the object.
            // Literally would be feeding an object into another to make a better one
            // (if we decide to persue)
            const player = root.querySelector( 'h1 span' ).childNodes[0].rawText;
            console.log( player );
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>This is home Page! Test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :
    {
        flex            : 1,
        backgroundColor : '#fff',
        alignItems      : 'center',
        justifyContent  : 'center',
    },
});


// This is what I learned from https://github.com/Nightfirecat/RealmEye-API/blob/master/index.php
//
// They are pretty much calling the route (https://www.realmeye.com/player/SweetxPeas) and then parsing through it to get the necessary information. This will definitely be interesting and rough to go through, but it could be rewarding. Maybe there will be a way to parse through it relatively quickly and maybe I can find a way to do this elsewhere??? For now lets get it done here.
// They have a good comprehensive list of items/characteristics that could be a good starting point.
