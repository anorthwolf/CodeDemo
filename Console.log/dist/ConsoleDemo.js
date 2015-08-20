
//Firebug（是firefox下的一个扩展,能够调试所有网站语言）
//first provided the console API and the documentation in its wiki is the closest thing to a standard there is.



//------------Start -----1.Simple logging------------------------------------------------------------

//         //Clear the console.
//         console.clear()
//
//
//         //Syntax
//         // console.log(obj1 [, obj2, ..., objN]);
//         // console.log(msg [, subst1, ..., substN]);
//         console.log(1);
//
//
//
//
var myvar = 1;
void 0;
void 0;
void 0;
void 0;
//         //[Firebug-only]
//         //Note: console.exception() is an alias for console.error(); they are functionally identical.
//         //console.exception(myvar,"excetion");
//
//         //An alias for log(); this was added to improve compatibility with existing sites already using debug().
//         //However, you should use console.log() instead.
//         console.debug(myvar, "debug!");
//
//
//
//         //Logs a stack trace (which is interactive in browsers).
//         function foo() {
//           function bar() {
//             console.trace();
//           }
//           bar();
//         }
//         //calls it:
//         foo();
//
//
//
//         //Complex eg:
//         //1.console.log(obj1 [, obj2, ..., objN]);
//         var o1 = 1;
//         var o2 = "abc";
//         var o3 = function(){
//             var a=1;
//             var b= "hello";
//         };
//         console.log(o1,o2,o3);
//
//2.console.log(msg [, subst1, ..., substN]);
void 0;
void 0;
void 0;
void 0;
// %o	Outputs a hyperlink to a JavaScript object. Clicking the link opens an inspector.
// %O	Formats the value as an expandable JavaScript Object
// %d or %i	Outputs an integer.
// %s	Outputs a string.
// %f	Outputs a floating-point value. Formatting is not yet supported.

//Styling console output
//You can use the "%c" directive to apply a CSS style to console output:
void 0;//加CSS样式

//------------End -----1.Simple logging------------------------------------------------------------






//------------Start -----2.Checking and counting------------------------------------------------------------


//Assert:
////Writes an error message to the console if the assertion is false.
// var obj1 = "optional p1";
// var obj2 = "optional p2";
// console.assert(obj1===2,
//     "I am failed message."
//     ,obj1,obj2);
//

// //If the assertion is true, nothing will happen.
// var obj1 = "optional p1";
// var obj2 = "optional p2";
// var a = 1;
// var b = 1;
// console.assert(a==b,
//     "I am failed message."
//     ,obj1,obj2);
//


//count() :
//Logs the number of times that this particular call to count() has been called
// If label is supplied, this function logs the number of times count() has been called with that particular label.
// If label is omitted, the function logs the number of times count() has been called at this particular line.

// function greet() {
//   console.count(); //无参看这行被call几次
//   return "hi " + user;
// }
//
// var user = "bob";
// greet();
// user = "alice";
// greet();
// greet();
// console.count();//此行单算

//     function greet() {
//       console.count(user);//按lable分组计数，不算单个行
//       return "hi " + user;
//     }
//
//     var user = "bob";
//     greet();
//     user = "alice";
//     greet();
//     greet();
//     console.count("alice");//note: 这个计入分组


//------------End -----2.Checking and counting------------------------------------------------------------




//------------Start -----3.Formatted logging------------------------------------------------------------


//Group:
// console.log("This is the outer level");
//     console.group();//分组缩进，默认不折叠
//     console.log("Level 2");
//         // console.group();
//         // console.group();
//         // console.group();
//         console.groupCollapsed();//默认折叠
//         console.log("Level 3");
//         console.warn("More of level 3");
//         console.groupEnd();//回上级
//     console.log("Back to level 2");
//     console.groupEnd();
// console.debug("Back to the outer level");





//Table:
//console.table(data [, columns]);


// // an array of strings
// console.table(["apples", "oranges", "bananas"]);

// // an object whose properties are strings
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// var me = new Person("John", "Smith");
// console.table(me);

//
// var persons = [
//     { firstName: 'Jane', lastName: 'Bond' },
//     { firstName: 'Lars', lastName: 'Croft', age: 72 }
// ];
//
// // Equivalent:
// console.table(persons);
// console.table(persons, ['firstName', 'lastName', 'age','aaa']);


//
//         // an array of objects, logging only firstName
//         function Person(firstName, lastName) {
//           this.firstName = firstName;
//           this.lastName = lastName;
//         }
//         var john = new Person("John", "Smith");
//         var jane = new Person("Jane", "Doe");
//         var emily = new Person("Emily", "Jones");
//
//         console.table([john, jane, emily], ["firstName"]);




//dir
// var persons = [
//     { firstName: 'Jane', lastName: 'Bond' },
//     { firstName: 'Lars', lastName: 'Croft', age: 72 }
// ];
//
// console.log(persons);
//
// console.dir(persons);//a hierarchical listing with disclosure triangles that let you see the contents of child objects.
// //Print a representation of the object to the console. In browsers that representation can be explored interactively (in Node.js, it can’t).
// console.dirxml(persons);
// //Print the XML source tree of an HTML or XML element.


//------------End -----3.Formatted logging------------------------------------------------------------




//------------Start -----4.Profiling and timing------------------------------------------------------------

//Timing介绍：
//to calculate the duration of a specific operation
// console.time("answer time");//给个参数做唯一标示
// alert("Click to continue");
// console.timeEnd("answer time");

//milliseconds
//Up to 10,000 timers per page.
//成对可嵌套


// var Loop1 = function(){
//     var array= new Array(500000);
//     for (var i = array.length - 1; i >= 0; i--) {
//         array[i] = new Object();
// }};
// var Loop2 = function(){
//     var array= new Array(1000000);
//     for (var i = array.length - 1; i >= 0; i--) {
//         array[i] = new Object();
// }};
//

//
//         console.profile("my profile1");//查看性能，可嵌套
//
//             console.time("timer A2");
//
//                 console.time("timer a1");
//                 Loop1();
//
//                 console.timeStamp("hello.........timeStamp.......");
//                 //Log a time stamp with the given label. May be logged to the console or a timeline.
//
//                 console.timeEnd("timer a1");
//
//                 Loop2();
//             console.timeEnd("timer A2");
//
//         console.profileEnd("my profile1");//匹配规则：参数名匹配成功结束监控；参数错误此句无效；无参结束最近那个profile监控
//
//


//------------End -----4.Profiling and timing------------------------------------------------------------


