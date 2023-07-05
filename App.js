import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default () => {

    const [goals, setGoals] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)


    const addGoalHandler = (enteredGoal) => {
        setGoals(currentGoals => [...currentGoals, enteredGoal])
    }

    const deleteGoal = (goal) => {
        setGoals(currentGoals => currentGoals.filter(existingGoal => existingGoal !== goal))
    }

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} setIsAddMode={setIsAddMode} addGoalHandler={addGoalHandler}/>
            <FlatList keyExtractor={(item, index) => index.toString()} data={goals} renderItem={goal => (
                <GoalItem goal={goal} removeGoal={deleteGoal}/>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
