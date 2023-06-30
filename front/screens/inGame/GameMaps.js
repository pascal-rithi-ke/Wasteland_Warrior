import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

function GameMaps({ route, navigation }) {
    const { id_user, _id, id_partie, hero, email, username, statut, game_statut, force, charisme, endurance, sante } = route.params || {};

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

    // Ajoutez ces deux lignes pour gérer le niveau de zoom
    const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
    const [longitudeDelta, setLongitudeDelta] = useState(0.0421);

    const zoomIn = () => {
        setLatitudeDelta(prevLatitudeDelta => prevLatitudeDelta * 0.09);
        setLongitudeDelta(prevLongitudeDelta => prevLongitudeDelta * 0.09);
    };

    const zoomOut = () => {
        setLatitudeDelta(prevLatitudeDelta => prevLatitudeDelta * 5);
        setLongitudeDelta(prevLongitudeDelta => prevLongitudeDelta * 5);
    };

    useEffect(() => {
        if (location) {
            mapRef.current.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
            });
        }
    }, [latitudeDelta, longitudeDelta]);

    const [showStartButton, setShowStartButton] = useState(false);
    const handleShowStartButton = () => {
        setShowStartButton(!showStartButton);
    };
    const handleStartHistory = () => {
        setShowStartButton(false);
        navigation.navigate('Start_Game', { id_user, hero, force, charisme, endurance, sante });
    };

    const historiquePartie = {
        _id: id_partie,
        id_user: id_user,
        characteristics: {
            force: force,
            charisme: charisme,
            endurance: endurance,
            sante: sante,
        },
        game_statut: game_statut,
        hero: hero,
    };

    const goToHome = () => {
        navigation.navigate('Home', { email, username, statut, _id: id_user, historique_partie: historiquePartie });
    };

    return (
        <View style={styles.container}>
            {location && (
                <>
                    <MapView
                        ref={mapRef} // Ajoutez cette ligne pour lier la référence à votre MapView
                        style={styles.map}
                        userInterfaceStyle="dark"
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title="Vous êtes ici"
                            description="Votre position actuelle"
                        />
                        <Marker
                            coordinate={{ latitude: 37.786694, longitude: -122.407314 }}
                            onPress={handleShowStartButton}
                            title="Le monde d'aujourd'hui">
                            <View style={styles.markerContainer}>
                                <View style={styles.marker}>
                                    <Text style={styles.markerText}>Chapitre 1</Text>
                                </View>
                            </View>
                        </Marker>
                    </MapView>
                    {showStartButton && (
                        <TouchableOpacity style={styles.markerStart_histoire} onPress={handleStartHistory}>
                            <Text style={styles.markerStart_btn}>Commencer</Text>
                        </TouchableOpacity>
                    )}
                    <View style={styles.infoPerso}>
                        <Image source={getImgHero} style={styles.heroImg} />
                        <View style={styles.container_stat}>
                            <Text style={styles.stat}>Force : {force}</Text>
                            <Text style={styles.stat}>Charisme : {charisme}</Text>
                            <Text style={styles.stat}>Endurance : {endurance}</Text>
                            <Text style={styles.stat}>Santé : {sante}</Text>
                        </View>
                        <View style={styles.container_zoom}>
                            <TouchableOpacity style={styles.zoom_btn} onPress={zoomIn}>
                                <Text style={styles.zoom_text}>(+) Zoom Map</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.zoom_btn} onPress={zoomOut}>
                                <Text style={styles.zoom_text}>(-) Zoom Map</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.goHome_btn}
                                onPress={goToHome}>
                                <Text style={styles.goHome_text}>Accueil</Text>
                            </TouchableOpacity>
                            {historiquePartie.game_statut === 'en cours' && (
                                <Text style={styles.game_statut}>Partie en cours</Text>
                            )}
                        </View>
                    </View>
                </>
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
        padding: 10,
    },
    heroImg: {
        width: 100,
        height: 100,
    },

    markerContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    marker: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 5,
        borderRadius: 10,
    },
    markerText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    markerStart_histoire: {
        backgroundColor: '#000000',
        padding: 5,
        textAlign: 'center',
    },
    markerStart_btn: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    container_stat: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingRight: 5,
    },
    stat: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    container_zoom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#FFFFFF',
    },
    zoom_btn: {
        backgroundColor: '#000000',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    zoom_text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    goHome_btn: {
        backgroundColor: '#000000',
        padding: 5,
        borderRadius: 10,
    },
    goHome_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    game_statut: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default GameMaps;
