/*
1. What do we mean when we say that classes are first-class values?
JavaScript classes can be treated like any JavaScript value.  They can be passed to and returned from functions, assigned to 
variables and used anywhere a value is expected.
*/
/* 2. What does the static modifier do? How would we call the method manufacturer?
The static modifier, manufacturer(), is a utility function that performs tasks relevant to the 
Television class.  It is designed to report data relevant to the Television class such as the name of the
manufacturer.  It is called using this syntax:

Television.manufacturer()

LS Answer:
The static modifier, when used with a method declaration, marks the method as static. 
That is, the method is defined directly on the class, not on the objects the class creates. 
We use it like this: Television.manufacturer();

The model method, on the other hand, is an instance method and must be called by an instance object:
let tv = new Television();
tv.model();
*/
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}