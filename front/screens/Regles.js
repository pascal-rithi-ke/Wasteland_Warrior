import { View, ScrollView, Text, StyleSheet } from 'react-native';

function Regles() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Règles du jeu</Text>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.regleContainer}>
                <Text style={styles.regle}>
                    - L’objectif est simple : vous créez un personnage, et il partira à
                    l’aventure, l’objectif est de terminer l’histoire sans perdre la vie.
                </Text>
                <Text style={styles.regle}>
                    - Vous pouvez ajouter manuellement vos caractéristiques ou les générer aléatoirement.
                </Text>
                <Text style={styles.regle}>
                    - Votre personnage passera par différentes étapes selons vos choix. Les étapes montrent l’avancé dans l’histoire, plus vous
                    êtes loin, plus les choix seront difficiles et risqués pour le joueur. A l’inverse, le début est plus facile.
                </Text>
                <Text style={styles.regle}>
                    Chaque étape contient plusieurs scénarios, seules certains seront
                    proposés aléatoirement au personnage. Il peut y avoir deux types de
                    scénarios :
                </Text>
                <Text style={styles.regle_explication}>
                    1 - les scénarios à choix : le joueur se voit choisir un ou plusieurs choix
                    en fonction de la situation et de ses statistiques (on peut par exemple
                    imaginer qu’un joueur ayant beaucoup de charisme dans certaines
                    situations permettra l’apparition d’un choix spécial). En fonction du
                    choix fait par le joueur, il peut gagner du temps (sauter une étapes)
                    mais avec contrepartie, gagner en statistiques, ou encore perdre
                    directement la partie.
                </Text>
                <Text style={styles.regle_explication}>
                    2 - Scénario de la destiné : Le joueur ne peut pas avoir de choix et doit
                    assumer son sort, qu’il soit positif ou négatif.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#14f819',
        marginTop: 10,
        marginBottom: 20,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    regleContainer: {
        width: '85%',
    },
    regle: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white',
        textAlign: 'justify',
    },
    regle_explication: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'justify',
        color: 'white',
        marginLeft: 10,
    }
});
export default Regles;