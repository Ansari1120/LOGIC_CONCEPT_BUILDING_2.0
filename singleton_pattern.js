const singleton = (function () {
  let instance;
  function createInstance() {
    return {
      name: "Singleton Instance",
    };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();
console.log(instance1 === instance2); // true

//The singleton pattern ensures that only one instance of a class is created,
//useful for managing shared resources or configurations.

//Ensuring only one instance of a class is created can be challenging.
