import { observable } from "mobx";

export default class CounterStore {
  @observable counter = 0;

  increment = () => {
    this.counter++;
  };
}
