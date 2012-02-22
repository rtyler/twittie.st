smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwistModel', smalltalk.Object, ['username'], 'Twist');
smalltalk.addMethod(
unescape('_feedUrl'),
smalltalk.method({
selector: unescape('feedUrl'),
category: 'timeline',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("http%3A//twitter.com/status/user_timeline/"), "__comma", [self['@username']]), "__comma", [unescape(".json%3Fcount%3D10%26callback%3D%3F")]);
return self;},
args: [],
source: unescape('feedUrl%0A%09%22Return%20the%20Twitter%20feed%20URL%20for%20this%20user%22%0A%0A%09%5E%20%27http%3A//twitter.com/status/user_timeline/%27%2C%20username%2C%20%27.json%3Fcount%3D10%26callback%3D%3F%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.TwistModel);

smalltalk.addMethod(
unescape('_username_'),
smalltalk.method({
selector: unescape('username%3A'),
category: 'accessors',
fn: function (aName){
var self=this;
(self['@username']=aName);
return self;},
args: ["aName"],
source: unescape('username%3A%20aName%0A%09username%20%3A%3D%20aName.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwistModel);



