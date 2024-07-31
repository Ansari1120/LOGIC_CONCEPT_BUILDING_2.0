function Subject() {
  this.observers = [];
}
Subject.prototype = {
  subscribe(observer) {
    this.observers.push(observer);
  },
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  },
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  },
};
function Observer(name) {
  this.name = name;
}
Observer.prototype.update = function (data) {
  console.log(`${this.name} received data: ${data}`);
};
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("New data available"); // "Observer 1 received data: New data available" "Observer 2 received data: New data available"

//The observer pattern allows you to manage state changes and notify multiple observers,
//improving code organization and maintainability.

//Managing state changes and notifying multiple components can be challenging.
