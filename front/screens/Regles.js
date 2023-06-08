import { View, ScrollView, Text, StyleSheet } from 'react-native';

function Regles() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Règles du jeu</Text>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.regleContainer}>
                <Text style={styles.regle}>
                    -L’objectif est simple : vous créer un personnage, et il partira à
                    l’aventure, l’objectif est de terminer l’histoire sans perdre la vie.
                </Text>
                <Text style={styles.regle}>
                    -Vous pouvez ajouter manuellement vos caractéristiques ou les générer aléatoirement.
                </Text>
                <Text style={styles.regle}>
                    -Votre personnage passera par des étapes 1,2,3,4 plus au moins selon le chapitre joué. Les étapes montrent l’avancé dans l’histoire, plus vous
                    êtes loin, plus les choix sont difficiles et peuvent être plus dangereux
                    pour le joueur. A l’inverse, le début est plus facile.
                </Text>
                <Text style={styles.regle}>
                    Chaque étapes contient des scénarios, seules certains scénarios seront
                    proposés aléatoirement au personnage. Il peut y avoir deux types de
                    scénarios :
                </Text>
                <Text style={styles.regle_explication}>
                    1- les scénarios à choix : le joueur se voit choisir un ou plusieurs choix
                    en fonction de la situation et de ses statistiques (on peut par exemple
                    imaginé qu’un joueur ayant beaucoup de charisme dans certaines
                    situations permettra l’apparition d’un choix spécial). En fonction du
                    choix fait par le joueur, il peut gagner du temps (sauter une étapes)
                    mais avec contrepartie, gagner en statistiques, ou encore perdre
                    directement la partie
                </Text>
                <Text style={styles.regle_explication}>
                    2- Scénario de la destiné : Le joueur ne peut pas avoir de choix et doit
                    assumer son sort, qu’il soit positif ou négatif.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    regleContainer: {
        width: '85%',
    },
    regle: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'justify',
    },
    regle_explication: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'justify',
        marginLeft: 10,
    }
});
export default Regles;