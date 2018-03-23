import React from "react";
import { Text, Button, View } from "react-native";
import { inject } from "mobx-react/native";

@inject("counterStore")
class IncrementScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Increment"
          onPress={this.props.counterStore.increment}
        />
      </View>
    );
  }
}

export default IncrementScreen;
