import React from "react";
import {ScrollView,View, StyleSheet, Text,  Image, TouchableOpacity } from "react-native";

export default ScrHome = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/user.png")}
                />
                <Text style={styles.info}>Asistencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/administrator-male.png")}
                />
                <Text style={styles.info}>Alumnos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/cottage.png")}
                />
                <Text style={styles.info}>Escuelas</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/pie-chart.png")}
                />
                <Text style={styles.info}>Materias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/shop.png")}
                />
                <Text style={styles.info}>T. Practicos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/product.png")}
                />
                <Text style={styles.info}>Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/traffic-jam.png")}
                />
                <Text style={styles.info}>Año</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/visual-game-boy.png")}
                />
                <Text style={styles.info}>Mi Perfil</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.menuBox}>
                <Image
                    style={styles.icon}
                    source={require("../img/ico/menu/family.png")}
                />
                <Text style={styles.info}>Mi Perfil</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    menuBox: {
        backgroundColor: "#DCDCDC",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
    },
    icon: {
        width: 60,
        height: 60,
    },
    info: {
        fontSize: 18,
        color: "#696969",
    },
});
