smalltalk.addPackage('Twist-Test', {});
smalltalk.addClass('TwitterTextTests', smalltalk.TestCase, [], 'Twist-Test');
smalltalk.addMethod(
unescape('_testSimpleText'),
smalltalk.method({
selector: unescape('testSimpleText'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    var text = nil;
    text = unescape("This%20is%20a%20sample%20tweet%21");
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [text]);
    smalltalk.send(self, "_assert_equals_", [text, smalltalk.send(t, "_text", [])]);
    return self;
},
args: [],
source: unescape('testSimpleText%0A%09%7C%20t%20text%20%7C%0A%09text%20%3A%3D%20%27This%20is%20a%20sample%20tweet%21%27.%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20text.%0A%09self%20assert%3A%20text%20equals%3A%20t%20text.'),
messageSends: ["withText:", "new", "assert:equals:", "text"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoHashtags'),
smalltalk.method({
selector: unescape('testNoHashtags'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no hashtags"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_hashtags", []), "_size", [])]);
    return self;
},
args: [],
source: unescape('testNoHashtags%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20has%20no%20hashtags%27.%0A%09self%20assert%3A%200%20equals%3A%20t%20hashtags%20size.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "hashtags"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneHashtag'),
smalltalk.method({
selector: unescape('testOneHashtag'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20has%20one%20hashtag%20%23smalltalk")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_hashtags", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("%23smalltalk"), smalltalk.send(smalltalk.send(t, "_hashtags", []), "_at_", [1])]);
    return self;
},
args: [],
source: unescape('testOneHashtag%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20has%20one%20hashtag%20%23smalltalk%27.%0A%09self%20assert%3A%201%20equals%3A%20t%20hashtags%20size.%0A%09self%20assert%3A%20%27%23smalltalk%27%20equals%3A%20%28t%20hashtags%20at%3A%201%29.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "hashtags", "at:"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoMentions'),
smalltalk.method({
selector: unescape('testNoMentions'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no mentions"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_mentions", []), "_size", [])]);
    return self;
},
args: [],
source: unescape('testNoMentions%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20has%20no%20mentions%27.%0A%09self%20assert%3A%200%20equals%3A%20t%20mentions%20size.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "mentions"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneMention'),
smalltalk.method({
selector: unescape('testOneMention'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20mentions%20one%20user%3A%20@AmberSmalltalk")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_mentions", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("@AmberSmalltalk"), smalltalk.send(smalltalk.send(t, "_mentions", []), "_at_", [1])]);
    return self;
},
args: [],
source: unescape('testOneMention%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20mentions%20one%20user%3A%20@AmberSmalltalk%27.%0A%09self%20assert%3A%201%20equals%3A%20t%20mentions%20size.%0A%09self%20assert%3A%20%27@AmberSmalltalk%27%20equals%3A%20%28t%20mentions%20at%3A%201%29.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "mentions", "at:"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testNoLinks'),
smalltalk.method({
selector: unescape('testNoLinks'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", ["This has no links"]);
    smalltalk.send(self, "_assert_equals_", [0, smalltalk.send(smalltalk.send(t, "_links", []), "_size", [])]);
    return self;
},
args: [],
source: unescape('testNoLinks%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20has%20no%20links%27.%0A%09self%20assert%3A%200%20equals%3A%20t%20links%20size.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "links"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);

smalltalk.addMethod(
unescape('_testOneLink'),
smalltalk.method({
selector: unescape('testOneLink'),
category: 'tests',
fn: function () {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [unescape("This%20has%20one%20http%3A//bit.ly/123")]);
    smalltalk.send(self, "_assert_equals_", [1, smalltalk.send(smalltalk.send(t, "_links", []), "_size", [])]);
    smalltalk.send(self, "_assert_equals_", [unescape("http%3A//bit.ly/123"), smalltalk.send(smalltalk.send(t, "_links", []), "_at_", [1])]);
    return self;
},
args: [],
source: unescape('testOneLink%0A%09%7C%20t%20%7C%20%0A%09t%20%3A%3D%20TwitterText%20new%20withText%3A%20%27This%20has%20one%20http%3A//bit.ly/123%27.%0A%09self%20assert%3A%201%20equals%3A%20t%20links%20size.%0A%09self%20assert%3A%20%27http%3A//bit.ly/123%27%20equals%3A%20%28t%20links%20at%3A%201%29.'),
messageSends: ["withText:", "new", "assert:equals:", "size", "links", "at:"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterTextTests);



