import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = ({goal, removeGoal}) => {
    return (
        <TouchableOpacity onPress={() => removeGoal(goal.item)}>
            <View style={styles.goalItem}>
                <Text>
                    {goal.item}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    }
});

export default GoalItem;