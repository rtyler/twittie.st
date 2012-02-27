smalltalk.addPackage('Twist', {});
smalltalk.addClass('TwistApp', smalltalk.Object, ['models', 'count', 'timelines'], 'Twist');
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

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
category: 'accessors',
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
return self;},
args: [],
source: unescape('search%0A%09%7C%20query%20container%20search%20%7C%0A%09query%20%3A%3D%20%27%23twist_search_box%27%20asJQuery%20val.%0A%09%27%23twist_search_box%27%20asJQuery%20val%3A%20%27%27.%0A%0A%09container%20%3A%3D%20%27search_for_%27%2C%20count%20asString.%0A%09count%20%3A%3D%20count%20+%201.%0A%0A%09%5B%20%3Ahtml%20%7C%0A%09%09html%20div%20id%3A%20container%3B%20class%3A%20%27TwitterSearch%27%3B%20with%3A%20%5B%0A%09%09%09html%20a%20with%3A%20%27Remove%20%22%27%2C%20query%2C%20%27%22%27%3B%0A%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20%28timelines%20at%3A%20query%20ifAbsent%3A%20nil%29%20remove.%20event%20preventDefault%20%5D.%20%0A%09%09%09%5D%5D%20appendToJQuery%3A%20%27%23twist_container%27%20asJQuery.%0A%09search%20%3A%3D%20TwitterSearch%20new%20withQuery%3A%20query%3B%20withLimit%3A%2010%3B%20inContainer%3A%20container%3B%20search.%0A%09timelines%20at%3A%20query%20put%3A%20search.'),
messageSends: ["val", "asJQuery", "val:", unescape("%2C"), "asString", unescape("+"), "appendToJQuery:", "id:", "class:", "with:", "href:", "onClick:", "remove", "at:ifAbsent:", "preventDefault", "a", "div", "withQuery:", "withLimit:", "inContainer:", "search", "new", "at:put:"],
referencedClasses: ["TwitterSearch"]
}),
smalltalk.TwistApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'accessors',
fn: function (){
var self=this;
(self['@count']=(0));
(self['@timelines']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09count%20%3A%3D%200.%0A%09timelines%20%3A%3D%20Dictionary%20new.'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
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


smalltalk.addClass('TWWidget', smalltalk.Widget, [], 'Twist');


smalltalk.addClass('TwitterText', smalltalk.TWWidget, ['text', 'hashtags', 'mentions', 'links'], 'Twist');
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
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterText"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@text'], "_tokenize_", [" "]), "_do_", [(function(token){((($receiver = smalltalk.send(smalltalk.send(token, "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderToken_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderToken_on_", [token, html]);})]));return smalltalk.send(html, "_with_", [" "]);})]);})]);})(smalltalk.send(html, "_p", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22Render%20this%20tweet%20as%20rich%20markup%22%0A%09html%20p%20class%3A%20%27TwitterText%27%3B%20with%3A%20%5B%0A%09%09%28text%20tokenize%3A%20%27%20%27%29%20do%3A%20%5B%20%3Atoken%20%7C%0A%09%09%09%09token%20size%20%3D%200%0A%09%09%09%09%09ifFalse%3A%20%5B%20self%20renderToken%3A%20token%20on%3A%20html%20%5D.%0A%09%09%09%09html%20with%3A%20%27%20%27%5D%5D.'),
messageSends: ["class:", "with:", "do:", "tokenize:", "ifFalse:", unescape("%3D"), "size", "renderToken:on:", "p"],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderToken_on_'),
smalltalk.method({
selector: unescape('renderToken%3Aon%3A'),
category: 'rendering',
fn: function (token, html){
var self=this;
var rendered=nil;
(rendered=false);
(function($rec){((($receiver = $rec).klass === smalltalk.Boolean) ? ($receiver ? (function(){(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);})(smalltalk.send(html, "_a", []));return (rendered=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextLink"]);smalltalk.send($rec, "_href_", [token]);return smalltalk.send($rec, "_with_", [token]);})(smalltalk.send(html, "_a", []));return (rendered=true);})]));return ((($receiver = $rec).klass === smalltalk.Boolean) ? (! $receiver ? (function(){((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})]));return ((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("@")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("%23")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderHashTag_on_", [token, html]);})]));return ((($receiver = smalltalk.send(smalltalk.send(token, "_at_", [(1)]), "__eq", [unescape("@")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(rendered=true);return smalltalk.send(self, "_renderMention_on_", [token, html]);})]));})]));})(smalltalk.send(token, "_match_", [unescape("%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29")]));
((($receiver = rendered).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(html, "_with_", [token]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [token]);})]));
return self;},
args: ["token", "html"],
source: unescape('renderToken%3A%20token%20on%3A%20html%0A%09%22Render%20a%20single%20token%2C%20whether%20it%20be%20a%20hashtag%2C%20mention%20or%20link%22%0A%09%7C%20rendered%20%7C%0A%09rendered%20%3A%3D%20false.%0A%09%28token%20match%3A%20%27%28https%3F%3A%5C/%5C/%5B%5E%5Cs%5D+%29%27%29%0A%09%09%09ifTrue%3A%20%5B%20html%20a%20class%3A%20%27TwitterTextLink%27%3B%20href%3A%20token%3B%20with%3A%20token.%20rendered%20%3A%3D%20true%20%5D%3B%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27%23%27%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09rendered%20%3A%3D%20true.%0A%09%09%09%09%09%09self%20renderHashTag%3A%20token%20on%3A%20html%5D.%0A%09%09%09%09%28token%20at%3A%201%29%20%3D%20%27@%27%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09rendered%20%3A%3D%20true.%0A%09%09%09%09%09%09self%20renderMention%3A%20token%20on%3A%20html%5D%5D.%0A%09rendered%20ifFalse%3A%20%5B%20html%20with%3A%20token%20%5D.'),
messageSends: ["ifTrue:", "class:", "href:", "with:", "a", "ifFalse:", unescape("%3D"), "at:", "renderHashTag:on:", "renderMention:on:", "match:"],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderHashTag_on_'),
smalltalk.method({
selector: unescape('renderHashTag%3Aon%3A'),
category: 'rendering',
fn: function (theTag, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextHashTag"]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Clicked hash tag: ", "__comma", [theTag])]);return smalltalk.send(event, "_preventDefault", []);})]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [theTag]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["theTag", "html"],
source: unescape('renderHashTag%3A%20theTag%20on%3A%20html%0A%09html%20a%20class%3A%20%27TwitterTextHashTag%27%3B%0A%09%09%09onClick%3A%20%5B%20%3Aevent%20%20%7C%20window%20alert%3A%20%27Clicked%20hash%20tag%3A%20%27%2C%20theTag.%20event%20preventDefault%20%5D%3B%0A%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09with%3A%20theTag.%0A%09%09%09'),
messageSends: ["class:", "onClick:", "alert:", unescape("%2C"), "preventDefault", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.TwitterText);

smalltalk.addMethod(
unescape('_renderMention_on_'),
smalltalk.method({
selector: unescape('renderMention%3Aon%3A'),
category: 'rendering',
fn: function (aMention, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterTextMention"]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Clicked mention for ", "__comma", [aMention])]);return smalltalk.send(event, "_preventDefault", []);})]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", [aMention]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["aMention", "html"],
source: unescape('renderMention%3A%20aMention%20on%3A%20html%0A%09html%20a%20class%3A%20%27TwitterTextMention%27%3B%0A%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20window%20alert%3A%20%27Clicked%20mention%20for%20%27%2C%20aMention.%20event%20preventDefault%20%5D%3B%0A%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09with%3A%20aMention.'),
messageSends: ["class:", "onClick:", "alert:", unescape("%2C"), "preventDefault", "href:", "with:", "a"],
referencedClasses: []
}),
smalltalk.TwitterText);



smalltalk.addClass('TwitterResult', smalltalk.TWWidget, ['text', 'username', 'image', 'lang', 'id'], 'Twist');
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
fn: function (data){
var self=this;
(self['@id']=smalltalk.send(data, "_at_", ["id"]));
(self['@text']=smalltalk.send(smalltalk.send((smalltalk.TwitterText || TwitterText), "_new", []), "_withText_", [smalltalk.send(data, "_at_", ["text"])]));
(self['@username']=smalltalk.send(data, "_at_", ["from_user"]));
(self['@image']=smalltalk.send(data, "_at_", ["profile_image_url_https"]));
(self['@lang']=smalltalk.send(data, "_at_", ["iso_language_code"]));
return self;},
args: ["data"],
source: unescape('withData%3A%20data%0A%09id%20%3A%3D%20data%20at%3A%20%27id%27.%0A%09text%20%3A%3D%20TwitterText%20new%20withText%3A%20%28data%20at%3A%20%27text%27%29.%0A%09username%20%3A%3D%20data%20at%3A%20%27from_user%27.%0A%09image%20%3A%3D%20data%20at%3A%20%27profile_image_url_https%27.%0A%09lang%20%3A%3D%20data%20at%3A%20%27iso_language_code%27.'),
messageSends: ["at:", "withText:", "new"],
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
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterResult"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementID", [])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_withName_", [self['@username']]);smalltalk.send($rec, "_withImage_", [self['@image']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TwitterAvatar || TwitterAvatar), "_new", []))]);return smalltalk.send(html, "_with_", [self['@text']]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27TwitterResult%27%3B%0A%09%09id%3A%20self%20elementID%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20with%3A%20%28TwitterAvatar%20new%20withName%3A%20username%3B%20withImage%3A%20image%3B%20yourself%29.%0A%09%09%09html%20with%3A%20text%5D.'),
messageSends: ["class:", "id:", "elementID", "with:", "withName:", "withImage:", "yourself", "new", "div"],
referencedClasses: ["TwitterAvatar"]
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'accessors',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementID", [])]), "_asJQuery", []), "_remove", []);
return self;},
args: [],
source: unescape('remove%0A%09%22Remove%20myself%20from%20the%20DOM%22%0A%09%28%27%23%27%2C%20self%20elementID%29%20asJQuery%20remove.'),
messageSends: ["remove", "asJQuery", unescape("%2C"), "elementID"],
referencedClasses: []
}),
smalltalk.TwitterResult);

smalltalk.addMethod(
unescape('_elementID'),
smalltalk.method({
selector: unescape('elementID'),
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.send("TwitterResult_", "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('elementID%0A%09%22Return%20this%20element%27s%20DOM%20elemnt%20ID%22%0A%09%5E%20%27TwitterResult_%27%2C%20id%20asString.'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.TwitterResult);



smalltalk.addClass('TwitterTimeline', smalltalk.TWWidget, ['itemMax'], 'Twist');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@itemMax']=(50));
return self;},
args: [],
source: unescape('initialize%0A%09itemMax%20%3A%3D%2050.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterTimeline);



smalltalk.addClass('TwitterSearch', smalltalk.TwitterTimeline, ['query', 'limit', 'container', 'polling', 'interval', 'lastid', 'results'], 'Twist');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@query']="");
(self['@limit']=(10));
(self['@container']=nil);
(self['@lastid']=(0));
(self['@interval']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_length_", [(function(){return smalltalk.send(self, "_search", []);}), (15000)]));
(self['@results']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self, "_initialize", [], smalltalk.TwitterTimeline);
return self;},
args: [],
source: unescape('initialize%0A%09query%20%3A%3D%20%27%27.%0A%09limit%20%3A%3D%2010.%0A%09container%20%3A%3D%20nil.%0A%09lastid%20%3A%3D%200.%0A%09interval%20%3A%3D%20window%20setInterval%3A%20%5B%20self%20search%20%5D%20length%3A%2015000.%0A%09results%20%3A%3D%20Array%20new.%0A%09super%20initialize.'),
messageSends: ["setInterval:length:", "search", "new", "initialize"],
referencedClasses: ["Array"]
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_withQuery_'),
smalltalk.method({
selector: unescape('withQuery%3A'),
category: 'not yet classified',
fn: function (aQuery){
var self=this;
(self['@query']=aQuery);
return self;},
args: ["aQuery"],
source: unescape('withQuery%3A%20aQuery%0A%09query%20%3A%3D%20aQuery.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_console", []), "_log_", [smalltalk.send("Running a search for ", "__comma", [self['@query']])]);
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Fq%3D"), "__comma", [smalltalk.send(self['@query'], "_escaped", [])]), "__comma", [unescape("%26callback%3D%3F%26maxResults%3D")]), "__comma", [self['@limit']]), "__comma", [unescape("%26since_id%3D")]), "__comma", [self['@lastid']]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(results){return smalltalk.send(self, "_successWithData_", [results]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send(self, "_displayError_", [smalltalk.send("Failed to search for: ", "__comma", [self['@query']])]);})])])]);
return self;},
args: [],
source: unescape('search%0A%09%22Run%20the%20actual%20search%20JSONP%20request%22%0A%09window%20console%20log%3A%20%27Running%20a%20search%20for%20%27%2C%20query.%0A%09jQuery%20ajax%3A%20%27http%3A//search.twitter.com/search.json%3Fq%3D%27%2C%20query%20escaped%2C%20%27%26callback%3D%3F%26maxResults%3D%27%2C%20limit%2C%20%27%26since_id%3D%27%2C%20lastid%0A%09%09%09options%3A%20%23%7B%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%20%3Aresults%20%7C%20self%20successWithData%3A%20results%20%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20self%20displayError%3A%20%27Failed%20to%20search%20for%3A%20%27%2C%20query%5D%7D.'),
messageSends: ["log:", "console", unescape("%2C"), "ajax:options:", "escaped", unescape("-%3E"), "successWithData:", "displayError:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_withLimit_'),
smalltalk.method({
selector: unescape('withLimit%3A'),
category: 'not yet classified',
fn: function (aLimit){
var self=this;
(self['@limit']=aLimit);
return self;},
args: ["aLimit"],
source: unescape('withLimit%3A%20aLimit%0A%09limit%20%3A%3D%20aLimit.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_displayError_'),
smalltalk.method({
selector: unescape('displayError%3A'),
category: 'not yet classified',
fn: function (anErrorString){
var self=this;
smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [anErrorString]);
return self;},
args: ["anErrorString"],
source: unescape('displayError%3A%20anErrorString%0A%09%22Display%20any%20general%20kind%20of%20error%22%0A%09window%20alert%3A%20anErrorString.'),
messageSends: ["alert:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_successWithData_'),
smalltalk.method({
selector: unescape('successWithData%3A'),
category: 'not yet classified',
fn: function (theData){
var self=this;
(($receiver = self['@container']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(theData, "_results", []), "_reversed", []), "_do_", [(function(data){var view=nil;
var result=nil;
((($receiver = ((($receiver = smalltalk.send(data, "_at_", ["id"])).klass === smalltalk.Number) ? $receiver >self['@lastid'] : smalltalk.send($receiver, "__gt", [self['@lastid']]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@lastid']=smalltalk.send(data, "_at_", ["id"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@lastid']=smalltalk.send(data, "_at_", ["id"]));})]));(result=(function($rec){smalltalk.send($rec, "_withData_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TwitterResult || TwitterResult), "_new", [])));smalltalk.send(self['@results'], "_add_", [result]);(view=smalltalk.send(smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_new", []), "_div", []));smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_prepend_", [smalltalk.send(view, "_asJQuery", [])]);return smalltalk.send(result, "_appendToJQuery_", [smalltalk.send(view, "_asJQuery", [])]);})]);})() : nil;
smalltalk.send(self, "_trimResults", []);
return self;},
args: ["theData"],
source: unescape('successWithData%3A%20theData%0A%09%22Build%20out%20and%20render%20the%20results%20from%20a%20search%22%0A%09container%20ifNotNil%3A%20%5B%0A%09%09%09%20%09theData%20results%20reversed%20do%3A%20%5B%20%3Adata%20%7C%0A%09%09%09%09%09%7C%20view%20result%20%7C%0A%09%09%09%09%09%28data%20at%3A%20%27id%27%29%20%3E%20lastid%0A%09%09%09%09%09%09%09ifTrue%3A%20%5B%20lastid%20%3A%3D%20data%20at%3A%20%27id%27%20%5D.%0A%0A%09%09%09%09%09result%20%3A%3D%20TwitterResult%20new%20withData%3A%20data%3B%20yourself.%0A%09%09%09%09%09results%20add%3A%20result.%0A%09%09%09%09%09view%20%3A%3D%20HTMLCanvas%20new%20div.%0A%09%09%09%09%09container%20asJQuery%20prepend%3A%20view%20asJQuery.%0A%09%09%09%09%09result%20appendToJQuery%3A%20view%20asJQuery%5D%5D.%0A%09self%20trimResults.'),
messageSends: ["ifNotNil:", "do:", "reversed", "results", "ifTrue:", unescape("%3E"), "at:", "withData:", "yourself", "new", "add:", "div", "prepend:", "asJQuery", "appendToJQuery:", "trimResults"],
referencedClasses: ["TwitterResult", "HTMLCanvas"]
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_inContainer_'),
smalltalk.method({
selector: unescape('inContainer%3A'),
category: 'not yet classified',
fn: function (containerString){
var self=this;
(self['@container']=smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(containerString, "_asString", [])]));
return self;},
args: ["containerString"],
source: unescape('inContainer%3A%20containerString%0A%09%22Set%20the%20div%20container%20string%20for%20this%20specific%20search%20object%22%0A%0A%09%22NOTE%3A%20Making%20sure%20to%20prefix%20the%20container%20with%20a%20hash%20to%20make%20it%20valid%20jQuery%20CSS%20Selector%20syntax%22%0A%09container%20%3A%3D%20%27%23%27%2C%20containerString%20asString.'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@interval']]);
return self;},
args: [],
source: unescape('remove%0A%09%22Stop%20the%20update%20and%20remove%20the%20DOM%20element%22%0A%09container%20asJQuery%20remove.%0A%09window%20clearInterval%3A%20interval.'),
messageSends: ["remove", "asJQuery", "clearInterval:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_trimResults'),
smalltalk.method({
selector: unescape('trimResults'),
category: 'not yet classified',
fn: function (){
var self=this;
((($receiver = ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver >self['@itemMax'] : smalltalk.send($receiver, "__gt", [self['@itemMax']]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){var count=nil;
var item=nil;
(count=(0));smalltalk.send(((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']])), "_timesRepeat_", [(function(){(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));(item=smalltalk.send(self['@results'], "_at_", [count]));return smalltalk.send(item, "_remove", []);})]);return smalltalk.send(self['@results'], "_removeFrom_to_", [(1), ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']]))]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var count=nil;
var item=nil;
(count=(0));smalltalk.send(((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']])), "_timesRepeat_", [(function(){(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));(item=smalltalk.send(self['@results'], "_at_", [count]));return smalltalk.send(item, "_remove", []);})]);return smalltalk.send(self['@results'], "_removeFrom_to_", [(1), ((($receiver = smalltalk.send(self['@results'], "_size", [])).klass === smalltalk.Number) ? $receiver -self['@itemMax'] : smalltalk.send($receiver, "__minus", [self['@itemMax']]))]);})]));
return self;},
args: [],
source: unescape('trimResults%0A%09%22%0A%09Prune%20our%20results%20Array%20and%20remove%20the%20DOM%20elements%0A%09Otherwise%20we%20might%20suck%20up%20a%20*lot*%20of%20memory%20in%20the%20browser%2C%0A%09which%20would%20be%20especially%20bad%20for%20popular%20topics/timelines.%0A%09%22%0A%09%28results%20size%29%20%3E%20itemMax%0A%09%09ifTrue%3A%20%5B%0A%09%09%09%7C%20count%20item%20%7C%0A%09%09%09count%20%3A%3D%200.%0A%09%09%09results%20size%20-%20itemMax%20timesRepeat%3A%20%5B%0A%09%09%09%09count%20%3A%3D%20count%20+%201.%0A%09%09%09%09item%20%3A%3D%20results%20at%3A%20count.%0A%09%09%09%09item%20remove%5D.%0A%09%09%09results%20removeFrom%3A%201%20to%3A%20results%20size%20-%20itemMax.%0A%09%09%09%5D.'),
messageSends: ["ifTrue:", unescape("%3E"), "size", "timesRepeat:", unescape("-"), unescape("+"), "at:", "remove", "removeFrom:to:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);



smalltalk.addClass('TwitterAvatar', smalltalk.TWWidget, ['username', 'image'], 'Twist');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["TwitterAvatar"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//twitter.com/"), "__comma", [self['@username']])]);smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(unescape("Visiting%20the%20profile%20for%20@"), "__comma", [self['@username']])]);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [self['@image']]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20class%3A%20%27TwitterAvatar%27%3B%20with%3A%20%5B%0A%09%09html%20a%20href%3A%20%27https%3A//twitter.com/%27%2C%20username%3B%0A%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20window%20alert%3A%20%27Visiting%20the%20profile%20for%20@%27%2C%20username.%0A%09%09%09%09%09event%20preventDefault.%5D%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09html%20img%20src%3A%20image.%5D%5D.'),
messageSends: ["class:", "with:", "href:", unescape("%2C"), "onClick:", "alert:", "preventDefault", "src:", "img", "a", "div"],
referencedClasses: []
}),
smalltalk.TwitterAvatar);

smalltalk.addMethod(
unescape('_withName_'),
smalltalk.method({
selector: unescape('withName%3A'),
category: 'not yet classified',
fn: function (aUsername){
var self=this;
(self['@username']=aUsername);
return self;},
args: ["aUsername"],
source: unescape('withName%3A%20aUsername%0A%09username%20%3A%3D%20aUsername.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterAvatar);

smalltalk.addMethod(
unescape('_withImage_'),
smalltalk.method({
selector: unescape('withImage%3A'),
category: 'not yet classified',
fn: function (imageURL){
var self=this;
(self['@image']=imageURL);
return self;},
args: ["imageURL"],
source: unescape('withImage%3A%20imageURL%0A%09image%20%3A%3D%20imageURL.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TwitterAvatar);



