smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwitterText', smalltalk.Widget, ['text', 'hashtags', 'mentions', 'links'], 'Twist');
smalltalk.addMethod(
unescape('_hashtags'),
smalltalk.method({
selector: unescape('hashtags'),
category: 'accessors',
fn: function () {
    var self = this;
    ($receiver = self['@hashtags']) == nil || $receiver == undefined ? function () {return self['@hashtags'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@hashtags'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@hashtags'], "_add_", [token]);}]);}]);
    return self['@hashtags'];
    return self;
},
args: [],
source: unescape('hashtags%0A%09%22Return%20a%20collection%20of%20the%20hashtags%20contained%20in%20the%20tweet%22%0A%09hashtags%20ifNil%3A%20%5B%20hashtags%20%3A%3D%20Array%20new%5D.%0A%09%28text%20tokenize%3A%20%27%20%27%29%20do%3A%20%5B%20%3Atoken%20%7C%0A%09%09%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27%23%27%20ifTrue%3A%20%5B%20hashtags%20add%3A%20token%5D%5D.%0A%09%5E%20hashtags.'),
messageSends: ["ifNil:", "new", "do:", "tokenize:", "ifTrue:", unescape("%3D"), "at:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_mentions'),
smalltalk.method({
selector: unescape('mentions'),
category: 'accessors',
fn: function () {
    var self = this;
    ($receiver = self['@mentions']) == nil || $receiver == undefined ? function () {return self['@mentions'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@mentions'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@mentions'], "_add_", [token]);}]);}]);
    return self['@mentions'];
    return self;
},
args: [],
source: unescape('mentions%0A%09%22Return%20a%20collection%20of%20users%20mentioned%20in%20the%20tweet%22%0A%09mentions%20ifNil%3A%20%5B%20mentions%20%3A%3D%20Array%20new%5D.%0A%09%28text%20tokenize%3A%20%27%20%27%29%20do%3A%20%5B%20%3Atoken%20%7C%0A%09%09%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27@%27%20ifTrue%3A%20%5B%20mentions%20add%3A%20token%5D%5D.%0A%09%5E%20mentions.'),
messageSends: ["ifNil:", "new", "do:", "tokenize:", "ifTrue:", unescape("%3D"), "at:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'accessors',
fn: function () {
    var self = this;
    return self['@text'];
    return self;
},
args: [],
source: unescape('text%0A%09%22Return%20the%20raw%20text%20of%20the%20tweet%22%0A%09%5E%20text.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_links'),
smalltalk.method({
selector: unescape('links'),
category: 'accessors',
fn: function () {
    var self = this;
    ($receiver = self['@links']) == nil || $receiver == undefined ? function () {return self['@links'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@links'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@links'], "_add_", [token]);}]);}]);
    return self['@links'];
    return self;
},
args: [],
source: unescape('links%0A%09%22Return%20a%20collection%20of%20the%20links%20contained%20within%20the%20tweet%22%0A%09links%20ifNil%3A%20%5B%20links%20%3A%3D%20Array%20new%5D.%0A%09%28text%20tokenize%3A%20%27%20%27%29%20do%3A%20%5B%20%3Atoken%20%7C%0A%09%09%09%09%09%09%28token%20match%3A%20%27%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29%27%29%20ifTrue%3A%20%5B%20links%20add%3A%20token%20%5D%5D.%0A%09%5E%20links.'),
messageSends: ["ifNil:", "new", "do:", "tokenize:", "ifTrue:", "match:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_withText_'),
smalltalk.method({
selector: unescape('withText%3A'),
category: 'initializers',
fn: function (aString) {
    var self = this;
    self['@text'] = aString;
    return self;
},
args: ["aString"],
source: unescape('withText%3A%20aString%0A%09text%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["TwitterText"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {smalltalk.send(self, "_renderToken_on_", [token, html]);return smalltalk.send(html, "_with_", [" "]);}]);}]);}(smalltalk.send(html, "_p", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22Render%20this%20tweet%20as%20rich%20markup%22%0A%09html%20p%20class%3A%20%27TwitterText%27%3B%20with%3A%20%5B%0A%09%09%28text%20tokenize%3A%20%27%20%27%29%20do%3A%20%5B%20%3Atoken%20%7C%0A%09%09%09%09self%20renderToken%3A%20token%20on%3A%20html.%0A%09%09%09%09html%20with%3A%20%27%20%27%5D%5D.'),
messageSends: ["class:", "with:", "do:", "tokenize:", "renderToken:on:", "p"],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderTokenOn_'),
smalltalk.method({
selector: unescape('renderTokenOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: unescape('renderTokenOn%3A%20html%0A%09%22Render%20a%20single%20token%2C%20whether%20it%20be%20a%20hashtag%2C%20mention%20or%20link%22%0A%09'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderToken_on_'),
smalltalk.method({
selector: unescape('renderToken%3Aon%3A'),
category: 'rendering',
fn: function (token, html) {
    var self = this;
    var rendered = nil;
    rendered = false;
    (function ($rec) {($receiver = $rec).klass === smalltalk.Boolean ? $receiver ? function () {(function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", [])));return rendered = true;}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", [])));return rendered = true;}]);return ($receiver = $rec).klass === smalltalk.Boolean ? !$receiver ? function () {($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")])));
    ($receiver = rendered).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(html, "_with_", [token]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(html, "_with_", [token]);}]);
    return self;
},
args: ["token", "html"],
source: unescape('renderToken%3A%20token%20on%3A%20html%0A%09%22Render%20a%20single%20token%2C%20whether%20it%20be%20a%20hashtag%2C%20mention%20or%20link%22%0A%09%7C%20rendered%20%7C%0A%09rendered%20%3A%3D%20false.%0A%09%28token%20match%3A%20%27%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29%27%29%0A%09%09%09ifTrue%3A%20%5B%20html%20a%20class%3A%20%27TwitterTextLink%27%3B%20href%3A%20token%3B%20with%3A%20token.%20rendered%20%3A%3D%20true%20%5D%3B%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27%23%27%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09rendered%20%3A%3D%20true.%0A%09%09%09%09%09%09html%20a%20class%3A%20%27TwitterTextHashTag%27%3B%0A%09%09%09%09%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%20%7C%20window%20alert%3A%20%27Clicked%20hash%20tag%3A%20%27%2C%20token.%20event%20preventDefault%20%5D%3B%0A%09%09%09%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09%09%09%09with%3A%20token%5D.%0A%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27@%27%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09rendered%20%3A%3D%20true.%0A%09%09%09%09%09%09html%20a%20class%3A%20%27TwitterTextMention%27%3B%0A%09%09%09%09%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20window%20alert%3A%20%27Clicked%20mention%20for%20%27%2C%20token.%20event%20preventDefault%20%5D%3B%0A%09%09%09%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09%09%09%09with%3A%20token%5D%5D.%0A%09rendered%20ifFalse%3A%20%5B%20html%20with%3A%20token%20%5D.'),
messageSends: ["ifTrue:", "class:", "href:", "with:", "a", "ifFalse:", unescape("%3D"), "at:", "onClick:", "alert:", unescape("%2C"), "preventDefault", "match:"],
referencedClasses: []
}),
smalltalk.TwitterText);



smalltalk.addClass('TwitterResult', smalltalk.Widget, ['text', 'username', 'image', 'lang'], 'Twist');
smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'accessors',
fn: function () {
    var self = this;
    return self['@text'];
    return self;
},
args: [],
source: unescape('text%0A%09%5E%20text.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
category: 'accessors',
fn: function () {
    var self = this;
    return self['@username'];
    return self;
},
args: [],
source: unescape('username%0A%09%5E%20username.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'initializers',
fn: function (data) {
    var self = this;
    self['@text'] = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [smalltalk.send(data, "_at_", ["text"])]);
    self['@username'] = smalltalk.send(data, "_at_", ["from_user"]);
    self['@image'] = smalltalk.send(data, "_at_", ["profile_image_url_https"]);
    self['@lang'] = smalltalk.send(data, "_at_", ["iso_language_code"]);
    return self;
},
args: ["data"],
source: unescape('withData%3A%20data%0A%09text%20%3A%3D%20TwitterText%20new%20withText%3A%20%28data%20at%3A%20%27text%27%29.%0A%09username%20%3A%3D%20data%20at%3A%20%27from_user%27.%0A%09image%20%3A%3D%20data%20at%3A%20%27profile_image_url_https%27.%0A%09lang%20%3A%3D%20data%20at%3A%20%27iso_language_code%27.'),
messageSends: ["withText:", "new", "at:"],
referencedClasses: ["TwitterText"]
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'printers',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(unescape("@"), "__comma", [self['@username']]), "__comma", [": "]), "__comma", [smalltalk.send(self['@text'], "_text", [])]);
    return self;
},
args: [],
source: unescape('asString%0A%09%5E%20%27@%27%2C%20username%2C%20%27%3A%20%27%2C%20%28text%20text%29.'),
messageSends: [unescape("%2C"), "text"],
referencedClasses: []
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["twitter_avatar"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//twitter.com/"), "__comma", [self['@username']])]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(unescape("Visiting%20the%20profile%20for%20@"), "__comma", [self['@username']])]);return smalltalk.send(event, "_preventDefault", []);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [self['@image']]);}]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", [])));return smalltalk.send(html, "_with_", [self['@text']]);}]);
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%20class%3A%20%27twitter_avatar%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20a%20href%3A%20%27https%3A//twitter.com/%27%2C%20username%3B%0A%09%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20window%20alert%3A%20%27Visiting%20the%20profile%20for%20@%27%2C%20username.%0A%09%09%09%09%09%09%09event%20preventDefault.%5D%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09html%20img%20src%3A%20image.%5D%5D.%0A%09%09%09html%20with%3A%20text%5D.'),
messageSends: ["with:", "div", "class:", "href:", unescape("%2C"), "onClick:", "alert:", "preventDefault", "src:", "img", "a"],
referencedClasses: []
}),
smalltalk.TwitterResult);



smalltalk.addClass('TwistModel', smalltalk.Object, ['username'], 'Twist');
smalltalk.addMethod(
unescape('_feedUrl'),
smalltalk.method({
selector: unescape('feedUrl'),
category: 'timeline',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("http%3A//twitter.com/status/user_timeline/"), "__comma", [self['@username']]), "__comma", [unescape(".json%3Fcount%3D10%26callback%3D%3F")]);
    return self;
},
args: [],
source: unescape('feedUrl%0A%09%22Return%20the%20Twitter%20feed%20URL%20for%20this%20user%22%0A%0A%09%5E%20%27http%3A//twitter.com/status/user_timeline/%27%2C%20username%2C%20%27.json%3Fcount%3D10%26callback%3D%3F%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.TwistModel);

smalltalk.addMethod(
unescape('_setUsername_'),
smalltalk.method({
selector: unescape('setUsername%3A'),
category: 'accessors',
fn: function (aName) {
    var self = this;
    self['@username'] = aName;
    return self;
},
args: ["aName"],
source: unescape('setUsername%3A%20aName%0A%09username%20%3A%3D%20aName.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwistModel);



smalltalk.addClass('TwistApp', smalltalk.Object, ['models'], 'Twist');
smalltalk.TwistApp.comment=unescape('Main%20entry%20point%20for%20the%20Twist%20application%2C%20runs%20as%20a%20singleton%20object%20on%20the%20page')
smalltalk.addMethod(
unescape('_models'),
smalltalk.method({
selector: unescape('models'),
category: 'accessors',
fn: function () {
    var self = this;
    return self['@models'];
    return self;
},
args: [],
source: unescape('models%0A%09%22Return%20a%20collection%20of%20TwistModels%20that%20are%20associated%20with%20the%20current%20application%22%0A%09%5E%20models.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwistApp);


smalltalk.TwistApp.klass.iVarNames = ['app'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return ($receiver = self['@app']) == nil || $receiver == undefined ? function () {return self['@app'] = smalltalk.send(self, "_new", [], smalltalk.Object.klass);}() : $receiver;
    return self;
},
args: [],
source: unescape('current%0A%09%5E%20app%0A%09%09ifNil%3A%20%5B%20app%20%3A%3D%20super%20new%20%5D.'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TwistApp.klass);


smalltalk.addClass('TwistSearch', smalltalk.Object, ['query'], 'Twist');

smalltalk.addMethod(
unescape('_search_limit_callback_'),
smalltalk.method({
selector: unescape('search%3Alimit%3Acallback%3A'),
category: 'searchers',
fn: function (theQuery, theCount, theBlock) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Fq%3D"), "__comma", [theQuery]), "__comma", [unescape("%26callback%3D%3F%26maxResults%3D5")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["jsonp"]), smalltalk.send("success", "__minus_gt", [theBlock])])]);
    return self;
},
args: ["theQuery", "theCount", "theBlock"],
source: unescape('search%3A%20theQuery%20limit%3A%20theCount%20callback%3A%20theBlock%0A%09jQuery%20ajax%3A%20%27http%3A//search.twitter.com/search.json%3Fq%3D%27%2C%20theQuery%2C%20%27%26callback%3D%3F%26maxResults%3D5%27%0A%09%09%20%20%20%20%20options%3A%20%23%7B%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%09%27success%27%20-%3E%20theBlock%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), unescape("-%3E")],
referencedClasses: []
}),
smalltalk.TwistSearch.klass);


