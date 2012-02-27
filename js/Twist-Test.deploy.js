smalltalk.addPackage('Twist-Test', {});
smalltalk.addClass('TwitterTextTests', smalltalk.TestCase, [], 'Twist-Test');
smalltalk.addMethod(
unescape('_testSimpleText'),
smalltalk.method({
selector: unescape('testSimpleText'),
fn: function () {
    var self = this;
    var t = nil;
    var text = nil;
    text = unescape("This%20is%20a%20sample%20tweet%21");
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [text]);
    smalltalk.send(self, "_assert_equals_", [text, smalltalk.send(t, "_text", [])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoHashtags'),
smalltalk.method({
selector: unescape('testNoHashtags'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no hashtags"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_hashtags", []), "_size", [])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneHashtag'),
smalltalk.method({
selector: unescape('testOneHashtag'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20has%20one%20hashtag%20%23smalltalk")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_hashtags", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("%23smalltalk"), smalltalk.send(smalltalk.send(t, "_hashtags", []), "_at_", [1])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoMentions'),
smalltalk.method({
selector: unescape('testNoMentions'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no mentions"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_mentions", []), "_size", [])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneMention'),
smalltalk.method({
selector: unescape('testOneMention'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20mentions%20one%20user%3A%20@AmberSmalltalk")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_mentions", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("@AmberSmalltalk"), smalltalk.send(smalltalk.send(t, "_mentions", []), "_at_", [1])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoLinks'),
smalltalk.method({
selector: unescape('testNoLinks'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no links"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_links", []), "_size", [])]);
    return self;
}
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneLink'),
smalltalk.method({
selector: unescape('testOneLink'),
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20has%20one%20http%3A//bit.ly/123")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_links", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("http%3A//bit.ly/123"), smalltalk.send(smalltalk.send(t, "_links", []), "_at_", [1])]);
    return self;
}
}),
smalltalk.TwitterTextTests);



smalltalk.addClass('TwistModelTests', smalltalk.TestCase, [], 'Twist-Test');
smalltalk.addMethod(
unescape('_testCorrectFeedUrl'),
smalltalk.method({
selector: unescape('testCorrectFeedUrl'),
fn: function () {
    var self = this;
    var model = nil;
    model = smalltalk.send(smalltalk.TwistModel || TwistModel, "_new", []);
    smalltalk.send(model, "_setUsername_", ["testbot"]);
    smalltalk.send(self, "_assert_equals_", [unescape("http%3A//twitter.com/status/user_timeline/testbot.json%3Fcount%3D10%26callback%3D%3F"), smalltalk.send(model, "_feedUrl", [])]);
    return self;
}
}),
smalltalk.TwistModelTests);



