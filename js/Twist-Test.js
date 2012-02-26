smalltalk.addPackage('Twist-Test', {});
smalltalk.addClass('TwistModelTests', smalltalk.TestCase, [], 'Twist-Test');
smalltalk.addMethod(
unescape('_testCorrectFeedUrl'),
smalltalk.method({
selector: unescape('testCorrectFeedUrl'),
category: 'tests',
fn: function (){
var self=this;
var model=nil;
(model=smalltalk.send((smalltalk.TwistModel || TwistModel), "_new", []));
smalltalk.send(model, "_stUsername_", ["testbot"]);
smalltalk.send(self, "_assert_equals_", [unescape("http%3A//twitter.com/status/user_timeline/testbot.json%3Fcount%3D10%26callback%3D%3F"), smalltalk.send(model, "_feedUrl", [])]);
return self;},
args: [],
source: unescape('testCorrectFeedUrl%0A%09%22Ensure%20that%20if%20we%20set%20TwistModel%20username%2C%20the%20feedUrl%20is%20correct%22%0A%09%7C%20model%20%7C%0A%09model%20%3A%3D%20TwistModel%20new.%0A%09model%20stUsername%3A%20%27testbot%27.%0A%09self%20assert%3A%20%27http%3A//twitter.com/status/user_timeline/testbot.json%3Fcount%3D10%26callback%3D%3F%27%20equals%3A%20model%20feedUrl.'),
messageSends: ["new", "stUsername:", "assert:equals:", "feedUrl"],
referencedClasses: ["TwistModel"]
}),
smalltalk.TwistModelTests);

smalltalk.addMethod(
unescape('_testFailure'),
smalltalk.method({
selector: unescape('testFailure'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_deny_", [true]);
return self;},
args: [],
source: unescape('testFailure%0A%09self%20deny%3A%20true.'),
messageSends: ["deny:"],
referencedClasses: []
}),
smalltalk.TwistModelTests);



