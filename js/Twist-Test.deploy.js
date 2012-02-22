smalltalk.addPackage('Twist-Test', {});
smalltalk.addClass('TwistModelTests', smalltalk.TestCase, [], 'Twist-Test');
smalltalk.addMethod(
unescape('_testCorrectFeedUrl'),
smalltalk.method({
selector: unescape('testCorrectFeedUrl'),
fn: function (){
var self=this;
var model=nil;
(model=smalltalk.send((smalltalk.TwistModel || TwistModel), "_new", []));
smalltalk.send(model, "_username_", ["testbot"]);
smalltalk.send(self, "_assert_equals_", [unescape("http%3A//twitter.com/status/user_timeline/testbot.json%3Fcount%3D10%26callback%3D%3F"), smalltalk.send(model, "_feedUrl", [])]);
return self;}
}),
smalltalk.TwistModelTests);



