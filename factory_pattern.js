function createUser(name, role) {
  return {
    name,
    role,
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am a ${this.role}`);
    },
  };
}
const admin = createUser("Alice", "admin");
const user = createUser("Bob", "user");
admin.sayHello(); // "Hello, my name is Alice and I am an admin"
user.sayHello(); // "Hello, my name is Bob and I am a user"

//The factory pattern allows you to create objects with complex
//initialization in a flexible and reusable way.

//Creating objects with complex initialization can be cumbersome.
