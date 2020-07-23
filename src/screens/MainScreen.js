import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View style={styles.container}>
            <View>
            <AddTodo style={styles.viewContainer} onSubmit={addTodo} />
            </View>
            <FlatList
                data={todos}
                renderItem={({item}) => (<Todo todo={item}  onRemove={removeTodo} onOpen={openTodo}></Todo>)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 30
      },
})