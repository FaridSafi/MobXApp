import React from "react";
import { Text, Button, View } from "react-native";
import { observer, inject } from "mobx-react/native";

@inject("counterStore")
@observer
class CounterScreen extends React.Component {
  componentWillReact() {
    console.log("reacting");
  }
  render() {
    console.log("rendering Counter");

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.props.counterStore.counter}</Text>
      </View>
    );
  }
}

export default CounterScreen;
