/**
 * Created by ayang on 8/20/2015.
 */
var myvar = 1;
console.log(  myvar, "log!");
console.info( myvar, "info!");
console.warn( myvar, "warn!");
console.error(myvar, "error!");

var b = "abc";



var logger = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger()
    {
        if(oldConsoleLog == null)
            return;

        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = function disableLogger()
    {
        oldConsoleLog = console.log;
        window['console']['log'] = function() {};
    };

    return pub;
}();


var logsTest=  function() {
    console.log('hello');

    logger.disableLogger();
    console.log('hi', 'hiya');
    console.log('this wont show up in console');

    logger.enableLogger();
    console.log('This will show up!');
}();