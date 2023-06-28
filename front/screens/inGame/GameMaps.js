import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

function GameMaps({ route }) {
    const {_id, hero, force, charisme, endurance, sante} = route.params || {};

    let getImgHero;
    if (hero === 'male') {
        getImgHero = require('../../assets/game/avatar_homme.png');
    } else {
        getImgHero = require('../../assets/game/avatar_femme.png');
    }

    const [location, setLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let { coords } = await Location.getCurrentPositionAsync({});
                setLocation(coords);
            } else {
                throw new Error('Permission refusée');
            }
        })();
    }, []);

    // Dézoomer la carte
    const zoomOut = () => {
        mapRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    };

    // Zoomer la carte
    const zoomIn = () => {
        mapRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421,
        });
    };


    return (
        <View style={styles.container}>
            {location && (
                    <MapView
                        ref={mapRef} // Ajoutez cette ligne pour lier la référence à votre MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            userInterfaceStyle: 'dark',
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title="Vous êtes ici"
                            description="Votre position actuelle"
                        />

                    <View style={styles.infoPerso}>
                        <View>
                            <Image source={getImgHero} style={{ width: 100, height: 100 }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 }}>Force: {force}</Text>
                            <Text style={{ fontSize: 20 }}>Charisme: {charisme}</Text>
                            <Text style={{ fontSize: 20 }}>Endurance: {endurance}</Text>
                            <Text style={{ fontSize: 20 }}>Santé: {sante}</Text>
                        </View>
                    </View>

                    </MapView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    infoPerso: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
});

export default GameMaps;
