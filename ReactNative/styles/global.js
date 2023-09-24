import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    stationInfoText:{
        fontWeight: 'bold',
        color: 'black',
    },
    captionText:{
        color:'#7a7a7a',
        fontWeight: 'bold',
    },
    stationInfoContainer:{
        backgroundColor: '#f0f1f1',
        borderRadius: 20,
        width: 350,
        padding: 15,
        elevation: 5,
    },
    buttonStyle:{
        width: 290,
        height: 50,
        borderRadius: 20,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f1f1',
        marginVertical: 9,
    },
    buttonText:{
        color:'#7db4f4',
        fontWeight: 'bold',
    },
    entertainmentText:{
        paddingHorizontal: 30,
        paddingVertical: 7,
        color:'#7a7a7a',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonTextWhite:{
        color:'white',
        fontWeight: 'bold',
    }
    
})