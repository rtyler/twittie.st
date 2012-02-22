smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwistModel', smalltalk.Object, ['username'], 'Twist');
smalltalk.addMethod(
unescape('_feedUrl'),
smalltalk.method({
selector: unescape('feedUrl'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("http%3A//twitter.com/status/user_timeline/"), "__comma", [self['@username']]), "__comma", [unescape(".json%3Fcount%3D10%26callback%3D%3F")]);
return self;}
}),
smalltalk.TwistModel);

smalltalk.addMethod(
unescape('_username_'),
smalltalk.method({
selector: unescape('username%3A'),
fn: function (aName){
var self=this;
(self['@username']=aName);
return self;}
}),
smalltalk.TwistModel);



