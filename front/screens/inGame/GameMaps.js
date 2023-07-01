import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Audio } from 'expo-av';

import mapStyle from './style/mapStyle.js';

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

    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        loadSound();

        // Nettoyage lors du démontage de l'écran
        return () => {
            unloadSound();
        };
    }, []);

    const loadSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync(); // Arrêter le son actuel s'il y en a un en cours
            }

            const { sound: newSound } = await Audio.Sound.createAsync(
                require('./feature/music/game_bgm.mp3'),
                { shouldPlay: true, isLooping: true },
                onPlaybackStatusUpdate // Ajouter la fonction de mise à jour de l'état de lecture
            );
            setSound(newSound);
            setIsPlaying(true);
        } catch (error) {
            console.log('Erreur lors du chargement du son', error);
        }
    };

    const unloadSound = async () => {
        try {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
                setSound(null);
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('Erreur lors du déchargement du son', error);
        }
    };

    const togglePlayback = async () => {
        try {
            if (sound) {
                if (isPlaying) {
                    await sound.pauseAsync();
                    setPosition(await sound.getStatusAsync().then(({ position }) => position)); // Sauvegarder la position actuelle de lecture
                } else {
                    await sound.playFromPositionAsync(position); // Reprendre la lecture à partir de la position sauvegardée
                }
                setIsPlaying(!isPlaying);
            }
        } catch (error) {
            console.log('Erreur lors de la gestion de la lecture', error);
        }
    };

    const onPlaybackStatusUpdate = async (status) => {
        if (status.didJustFinish) {
            // La musique s'est terminée, remettre la position de lecture à 0
            setPosition(0);
        }
    };

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
                        customMapStyle={mapStyle}
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
                            <Text style={styles.statis}>Statistiques</Text>
                            <Text style={styles.stat}>Force : {force}</Text>
                            <Text style={styles.stat}>Charisme : {charisme}</Text>
                            <Text style={styles.stat}>Endurance : {endurance}</Text>
                            <Text style={styles.stat}>Santé : {sante}</Text>
                            <Text style={styles.stat}>Genre : {hero}</Text>
                        </View>
                        <View style={styles.container_zoom}>
                            <TouchableOpacity style={styles.zoom_btn} onPress={zoomIn}>
                                <Text style={styles.zoom_text}>( + ) Zoom Map</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.zoom_btn} onPress={zoomOut}>
                                <Text style={styles.zoom_text}>( - ) Zoom Map</Text>
                            </TouchableOpacity>
                            <View style={styles.bottomContainer}>
                                <TouchableOpacity
                                    style={styles.playMusic_btn}
                                    onPress={togglePlayback}>
                                    <Text style={styles.playMusic_text}>{isPlaying ? '🔈' : '🔊'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.goHome_btn}
                                    onPress={goToHome}>
                                    <Text style={styles.goHome_text}>Accueil</Text>
                                </TouchableOpacity>
                            </View>
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
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
    },
    statis: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    stat: {
        color: '#FFFFFF',
        fontSize: 16,
    },

    container_zoom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
        borderLeftColor: '#FFFFFF',
        borderLeftWidth: 1,
    },
    zoom_btn: {
        backgroundColor: '#0e8210',
        borderRadius: 15,
        borderColor: '#14f819',
        borderWidth: 3,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        marginBottom: 10,
    },
    zoom_text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        bottom: 10,
        right: 10,
    },
    goHome_btn: {
        backgroundColor: '#0e8210',
        borderRadius: 15,
        borderColor: '#14f819',
        borderWidth: 3,
        fontWeight: 'bold',
        padding: 5,
        width: 80,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        marginBottom: 10,
    },
    goHome_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

    playMusic_btn: {
        backgroundColor: '#0e8210',
        borderRadius: 15,
        borderColor: '#14f819',
        borderWidth: 3,
        fontWeight: 'bold',
        padding: 5,
        width: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        marginBottom: 10,
    },
    playMusic_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default GameMaps;
