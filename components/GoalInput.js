import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = ({addGoalHandler, visible, setIsAddMode}) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addHandler = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('')
        setIsAddMode(false)
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addHandler}/>
                    <Button title="Cancel" color='red' onPress={() => {
                        setIsAddMode(false)
                        setEnteredGoal('')
                    }}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    }
});

export default GoalInput;