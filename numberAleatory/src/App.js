import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const App = () => {

    const [number, setNumber] = useState(0)

    function handleNumber() {
        const newNumber = Math.floor(Math.random() * 6 + 1);

        setNumber(newNumber)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{number}</Text>
            <TouchableOpacity onPress={handleNumber} style={style.botao}>
                <Text style={style.textButtom}>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        fontSize: 75,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero: {
        fontSize: 38,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    botao: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
    textButtom: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default App;