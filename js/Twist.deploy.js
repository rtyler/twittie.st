smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwistApp', smalltalk.Object, ['models', 'count', 'timelines'], 'Twist');
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

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
fn: function (){
var self=this;
var query=nil;
var container=nil;
var search=nil;
(query=smalltalk.send(smalltalk.send(unescape("%23twist_search_box"), "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(unescape("%23twist_search_box"), "_asJQuery", []), "_val_", [""]);
(container=smalltalk.send("search_for_", "__comma", [smalltalk.send(self['@count'], "_asString", [])]));
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_id_", [container]);smalltalk.send($rec, "_class_", ["TwitterSearch"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Remove%20%22"), "__comma", [query]), "__comma", [unescape("%22")])]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send(smalltalk.send(self['@timelines'], "_at_ifAbsent_", [query, nil]), "_remove", []);return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));}), "_appendToJQuery_", [smalltalk.send(unescape("%23twist_container"), "_asJQuery", [])]);
(search=(function($rec){smalltalk.send($rec, "_withQuery_", [query]);smalltalk.send($rec, "_withLimit_", [(10)]);smalltalk.send($rec, "_inContainer_", [container]);return smalltalk.send($rec, "_search", []);})(smalltalk.send((smalltalk.TwitterSearch || TwitterSearch), "_new", [])));
smalltalk.send(self['@timelines'], "_at_put_", [query, search]);
return self;}
}),
smalltalk.TwistApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@count']=(0));
(self['@timelines']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
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


smalltalk.addClass('TWWidget', smalltalk.Widget, [], 'Twist');


smalltalk.addClass('TwitterText', smalltalk.TWWidget, ['text', 'hashtags', 'mentions', 'links'], 'Twist');
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
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterText"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [(function(token){((($receiver = smalltalk.send(smalltalk.send(token, "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderToken_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderToken_on_", [token, html]);})]));return smalltalk.send(html, "_with_", [" "]);})]);})]);})(smalltalk.send(html, "_p", []));
return self;}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderToken_on_'),
smalltalk.method({
selector: unescape('renderToken%3Aon%3A'),
fn: function (token, html){
var self=this;
var rendered=nil;
(rendered=false);
(function($rec){((($receiver = $rec).klass === smalltalk.Boolean) ? ($receiver ? (function(){(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);})(smalltalk.send(html, "_a", []));return (rendered=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);})(smalltalk.send(html, "_a", []));return (rendered=true);})]));return ((($receiver = $rec).klass === smalltalk.Boolean) ? (! $receiver ? (function(){((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})]));return ((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("@")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})]));return ((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("@")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})]));})]));})(smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")]));
((($receiver = rendered).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(html, "_with_", [token]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [token]);})]));
return self;}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderHashTag_on_'),
smalltalk.method({
selector: unescape('renderHashTag%3Aon%3A'),
fn: function (theTag, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [theTag])]);return smalltalk.send(event, "_preventDefault", []);})]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [theTag]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderMention_on_'),
smalltalk.method({
selector: unescape('renderMention%3Aon%3A'),
fn: function (aMention, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [aMention])]);return smalltalk.send(event, "_preventDefault", []);})]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [aMention]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.TwitterText);



smalltalk.addClass('TwitterResult', smalltalk.TWWidget, ['text', 'username', 'image', 'lang', 'id'], 'Twist');
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
fn: function (data){
var self=this;
(self['@id']=smalltalk.send(data, "_at_", ["id"]));
(self['@text']=smalltalk.send(smalltalk.send((smalltalk.TwitterText || TwitterText), "_new", []), "_withText_", [smalltalk.send(data, "_at_", ["text"])]));
(self['@username']=smalltalk.send(data, "_at_", ["from_user"]));
(self['@image']=smalltalk.send(data, "_at_", ["profile_image_url_https"]));
(self['@lang']=smalltalk.send(data, "_at_", ["iso_language_code"]));
return self;}
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
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterResult"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementID", [])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_withName_", [self['@username']]);smalltalk.send($rec, "_withImage_", [self['@image']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TwitterAvatar || TwitterAvatar), "_new", []))]);return smalltalk.send(html, "_with_", [self['@text']]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementID", [])]), "_asJQuery", []), "_remove", []);
return self;}
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_elementID'),
smalltalk.method({
selector: unescape('elementID'),
fn: function (){
var self=this;
return smalltalk.send("TwitterResult_", "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.TwitterResult);



smalltalk.addClass('TwitterTimeline', smalltalk.TWWidget, ['itemMax'], 'Twist');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@itemMax']=(50));
return self;}
}),
smalltalk.TwitterTimeline);



smalltalk.addClass('TwitterSearch', smalltalk.TwitterTimeline, ['query', 'limit', 'container', 'polling', 'interval', 'lastid', 'results'], 'Twist');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@query']="");
(self['@limit']=(10));
(self['@container']=nil);
(self['@lastid']=(0));
(self['@interval']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_length_", [(function(){return smalltalk.send(self, "_search", []);}), (15000)]));
(self['@results']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self, "_initialize", [], smalltalk.TwitterTimeline);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_withQuery_'),
smalltalk.method({
selector: unescape('withQuery%3A'),
fn: function (aQuery){
var self=this;
(self['@query']=aQuery);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_console", []), "_log_", [smalltalk.send("Running a search for ", "__comma", [self['@query']])]);
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Fq%3D"), "__comma", [smalltalk.send(self['@query'], "_escaped", [])]), "__comma", [unescape("%26callback%3D%3F%26maxResults%3D")]), "__comma", [self['@limit']]), "__comma", [unescape("%26since_id%3D")]), "__comma", [self['@lastid']]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(results){return smalltalk.send(self, "_successWithData_", [results]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send(self, "_displayError_", [smalltalk.send("Failed to search for: ", "__comma", [self['@query']])]);})])])]);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_withLimit_'),
smalltalk.method({
selector: unescape('withLimit%3A'),
fn: function (aLimit){
var self=this;
(self['@limit']=aLimit);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_displayError_'),
smalltalk.method({
selector: unescape('displayError%3A'),
fn: function (anErrorString){
var self=this;
smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [anErrorString]);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_successWithData_'),
smalltalk.method({
selector: unescape('successWithData%3A'),
fn: function (theData){
var self=this;
(($receiver = self['@container']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(theData, "_results", []), "_reversed", []), "_do_", [(function(data){var view=nil;
var result=nil;
((($receiver = ((($receiver = smalltalk.send(data, "_at_", ["id"])).klass === smalltalk.Number) ? $receiver >self['@lastid'] : smalltalk.send($receiver, "__gt", [self['@lastid']]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@lastid']=smalltalk.send(data, "_at_", ["id"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@lastid']=smalltalk.send(data, "_at_", ["id"]));})]));(result=(function($rec){smalltalk.send($rec, "_withData_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TwitterResult || TwitterResult), "_new", [])));smalltalk.send(self['@results'], "_add_", [result]);(view=smalltalk.send(smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_new", []), "_div", []));smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_prepend_", [smalltalk.send(view, "_asJQuery", [])]);return smalltalk.send(result, "_appendToJQuery_", [smalltalk.send(view, "_asJQuery", [])]);})]);})() : nil;
smalltalk.send(self, "_trimResults", []);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_inContainer_'),
smalltalk.method({
selector: unescape('inContainer%3A'),
fn: function (containerString){
var self=this;
(self['@container']=smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(containerString, "_asString", [])]));
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@interval']]);
return self;}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_trimResults'),
smalltalk.method({
selector: unescape('trimResults'),
fn: function (){
var self=this;
((($receiver = ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver >self['@itemMax'] : smalltalk.send($receiver, "__gt", [self['@itemMax']]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){var count=nil;
var item=nil;
(count=(0));smalltalk.send(((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']])), "_timesRepeat_", [(function(){(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));(item=smalltalk.send(self['@results'], "_at_", [count]));return smalltalk.send(item, "_remove", []);})]);return smalltalk.send(self['@results'], "_removeFrom_to_", [(1), ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']]))]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var count=nil;
var item=nil;
(count=(0));smalltalk.send(((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']])), "_timesRepeat_", [(function(){(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));(item=smalltalk.send(self['@results'], "_at_", [count]));return smalltalk.send(item, "_remove", []);})]);return smalltalk.send(self['@results'], "_removeFrom_to_", [(1), ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']]))]);})]));
return self;}
}),
smalltalk.TwitterSearch);



smalltalk.addClass('TwitterAvatar', smalltalk.TWWidget, ['username', 'image'], 'Twist');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterAvatar"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//twitter.com/"), "__comma", [self['@username']])]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(unescape("Visiting%20the%20profile%20for%20@"), "__comma", [self['@username']])]);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [self['@image']]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TwitterAvatar);

smalltalk.addMethod(
unescape('_withName_'),
smalltalk.method({
selector: unescape('withName%3A'),
fn: function (aUsername){
var self=this;
(self['@username']=aUsername);
return self;}
}),
smalltalk.TwitterAvatar);

smalltalk.addMethod(
unescape('_withImage_'),
smalltalk.method({
selector: unescape('withImage%3A'),
fn: function (imageURL){
var self=this;
(self['@image']=imageURL);
return self;}
}),
smalltalk.TwitterAvatar);



