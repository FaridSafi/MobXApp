import React from "react";
import { TabNavigator } from "react-navigation";
import CounterScreen from "./src/components/CounterScreen";
import IncrementScreen from "./src/components/IncrementScreen";
import CounterStore from "./src/stores/CounterStore";
import { Provider } from "mobx-react/native";

const counterStore = new CounterStore();

const MainNavigator = TabNavigator({
  Increment: { screen: IncrementScreen },
  Counter: { screen: CounterScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider counterStore={counterStore}>
        <MainNavigator />
      </Provider>
    );
  }
}
