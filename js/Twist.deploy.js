smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwitterText', smalltalk.Widget, ['text', 'hashtags', 'mentions', 'links'], 'Twist');
smalltalk.addMethod(
unescape('_hashtags'),
smalltalk.method({
selector: unescape('hashtags'),
fn: function () {
    var self = this;
    ($receiver = self['@hashtags']) == nil || $receiver == undefined ? function () {return self['@hashtags'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@hashtags'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@hashtags'], "_add_", [token]);}]);}]);
    return self['@hashtags'];
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_mentions'),
smalltalk.method({
selector: unescape('mentions'),
fn: function () {
    var self = this;
    ($receiver = self['@mentions']) == nil || $receiver == undefined ? function () {return self['@mentions'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@mentions'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@mentions'], "_add_", [token]);}]);}]);
    return self['@mentions'];
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
fn: function () {
    var self = this;
    return self['@text'];
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_links'),
smalltalk.method({
selector: unescape('links'),
fn: function () {
    var self = this;
    ($receiver = self['@links']) == nil || $receiver == undefined ? function () {return self['@links'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {return ($receiver = smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@links'], "_add_", [token]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self['@links'], "_add_", [token]);}]);}]);
    return self['@links'];
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_withText_'),
smalltalk.method({
selector: unescape('withText%3A'),
fn: function (aString) {
    var self = this;
    self['@text'] = aString;
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["TwitterText"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [function (token) {smalltalk.send(self, "_renderToken_on_", [token, html]);return smalltalk.send(html, "_with_", [" "]);}]);}]);}(smalltalk.send(html, "_p", [])));
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderTokenOn_'),
smalltalk.method({
selector: unescape('renderTokenOn%3A'),
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderToken_on_'),
smalltalk.method({
selector: unescape('renderToken%3Aon%3A'),
fn: function (token, html) {
    var self = this;
    var rendered = nil;
    rendered = false;
    (function ($rec) {($receiver = $rec).klass === smalltalk.Boolean ? $receiver ? function () {(function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", [])));return rendered = true;}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", [])));return rendered = true;}]);return ($receiver = $rec).klass === smalltalk.Boolean ? !$receiver ? function () {($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);return ($receiver = smalltalk.send(smalltalk.send(token, "_at_", [1]), "__eq", [unescape("@")])).klass === smalltalk.Boolean ? $receiver ? function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {rendered = true;return function ($rec) {smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [token])]);return smalltalk.send(event, "_preventDefault", []);}]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [token]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")])));
    ($receiver = rendered).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(html, "_with_", [token]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(html, "_with_", [token]);}]);
    return self;
}
}),
smalltalk.TwitterText);



smalltalk.addClass('TwitterResult', smalltalk.Widget, ['text', 'username', 'image', 'lang'], 'Twist');
smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
fn: function () {
    var self = this;
    return self['@text'];
    return self;
}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
fn: function () {
    var self = this;
    return self['@username'];
    return self;
}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (data) {
    var self = this;
    self['@text'] = smalltalk.send(smalltalk.send(smalltalk.TwitterText || TwitterText, "_new", []), "_withText_", [smalltalk.send(data, "_at_", ["text"])]);
    self['@username'] = smalltalk.send(data, "_at_", ["from_user"]);
    self['@image'] = smalltalk.send(data, "_at_", ["profile_image_url_https"]);
    self['@lang'] = smalltalk.send(data, "_at_", ["iso_language_code"]);
    return self;
}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(unescape("@"), "__comma", [self['@username']]), "__comma", [": "]), "__comma", [smalltalk.send(self['@text'], "_text", [])]);
    return self;
}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["twitter_avatar"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//twitter.com/"), "__comma", [self['@username']])]);smalltalk.send($rec, "_onClick_", [function (event) {smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(unescape("Visiting%20the%20profile%20for%20@"), "__comma", [self['@username']])]);return smalltalk.send(event, "_preventDefault", []);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [self['@image']]);}]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", [])));return smalltalk.send(html, "_with_", [self['@text']]);}]);
    return self;
}
}),
smalltalk.TwitterResult);



smalltalk.addClass('TwistModel', smalltalk.Object, ['username'], 'Twist');
smalltalk.addMethod(
unescape('_feedUrl'),
smalltalk.method({
selector: unescape('feedUrl'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("http%3A//twitter.com/status/user_timeline/"), "__comma", [self['@username']]), "__comma", [unescape(".json%3Fcount%3D10%26callback%3D%3F")]);
    return self;
}
}),
smalltalk.TwistModel);

smalltalk.addMethod(
unescape('_setUsername_'),
smalltalk.method({
selector: unescape('setUsername%3A'),
fn: function (aName) {
    var self = this;
    self['@username'] = aName;
    return self;
}
}),
smalltalk.TwistModel);



smalltalk.addClass('TwistApp', smalltalk.Object, ['models'], 'Twist');
smalltalk.addMethod(
unescape('_models'),
smalltalk.method({
selector: unescape('models'),
fn: function () {
    var self = this;
    return self['@models'];
    return self;
}
}),
smalltalk.TwistApp);


smalltalk.TwistApp.klass.iVarNames = ['app'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function () {
    var self = this;
    return ($receiver = self['@app']) == nil || $receiver == undefined ? function () {return self['@app'] = smalltalk.send(self, "_new", [], smalltalk.Object.klass);}() : $receiver;
    return self;
}
}),
smalltalk.TwistApp.klass);


smalltalk.addClass('TwistSearch', smalltalk.Object, ['query'], 'Twist');

smalltalk.addMethod(
unescape('_search_limit_callback_'),
smalltalk.method({
selector: unescape('search%3Alimit%3Acallback%3A'),
fn: function (theQuery, theCount, theBlock) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Fq%3D"), "__comma", [theQuery]), "__comma", [unescape("%26callback%3D%3F%26maxResults%3D5")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["jsonp"]), smalltalk.send("success", "__minus_gt", [theBlock])])]);
    return self;
}
}),
smalltalk.TwistSearch.klass);


