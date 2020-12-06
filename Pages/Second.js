import React from 'react';
import { View, Text, Button } from 'react-native';
import MyContext from '../MyContext';

export default function Second() {
    return (
        <MyContext.Consumer>
            {
                context => (
                    <>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Button title="+" onPress={() => { context.incrementCount() }} />
                            <Text>{context.count}</Text>
                            <Button title="-" onPress={() => { context.decrementCount() }} />
                        </View>
                    </>
                )
            }

        </MyContext.Consumer>
    )
}