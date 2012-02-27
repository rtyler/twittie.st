Smalltalk current createPackage: 'Twist' properties: #{}!
Widget subclass: #TwitterText
	instanceVariableNames: 'text hashtags mentions links'
	category: 'Twist'!

!TwitterText methodsFor: 'accessors'!

hashtags
	"Return a collection of the hashtags contained in the tweet"
	hashtags ifNil: [ hashtags := Array new].
	(text tokenize: ' ') do: [ :token |
						(token at: 1) = '#' ifTrue: [ hashtags add: token]].
	^ hashtags.
!

mentions
	"Return a collection of users mentioned in the tweet"
	mentions ifNil: [ mentions := Array new].
	(text tokenize: ' ') do: [ :token |
						(token at: 1) = '@' ifTrue: [ mentions add: token]].
	^ mentions.
!

text
	"Return the raw text of the tweet"
	^ text.
!

links
	"Return a collection of the links contained within the tweet"
	links ifNil: [ links := Array new].
	(text tokenize: ' ') do: [ :token |
						(token match: '(https?:\/\/[^\s]+)') ifTrue: [ links add: token ]].
	^ links.
! !

!TwitterText methodsFor: 'initializers'!

withText: aString
	text := aString.
! !

!TwitterText methodsFor: 'rendering'!

renderOn: html
	"Render this tweet as rich markup"
	html p class: 'TwitterText'; with: [
		(text tokenize: ' ') do: [ :token |
				self renderToken: token on: html.
				html with: ' ']].
!

renderTokenOn: html
	"Render a single token, whether it be a hashtag, mention or link"
!

renderToken: token on: html
	"Render a single token, whether it be a hashtag, mention or link"
	| rendered |
	rendered := false.
	(token match: '(https?:\/\/[^\s]+)')
			ifTrue: [ html a class: 'TwitterTextLink'; href: token; with: token. rendered := true ];
			ifFalse: [
				(token at: 1) = '#'
					ifTrue: [
						rendered := true.
						html a class: 'TwitterTextHashTag';
								onClick: [ :event  | window alert: 'Clicked hash tag: ', token. event preventDefault ];
								href: '#';
								with: token].
				(token at: 1) = '@'
					ifTrue: [
						rendered := true.
						html a class: 'TwitterTextMention';
								onClick: [ :event | window alert: 'Clicked mention for ', token. event preventDefault ];
								href: '#';
								with: token]].
	rendered ifFalse: [ html with: token ].
! !

Widget subclass: #TwitterResult
	instanceVariableNames: 'text username image lang'
	category: 'Twist'!

!TwitterResult methodsFor: 'accessors'!

text
	^ text.
!

username
	^ username.
! !

!TwitterResult methodsFor: 'initializers'!

withData: data
	text := TwitterText new withText: (data at: 'text').
	username := data at: 'from_user'.
	image := data at: 'profile_image_url_https'.
	lang := data at: 'iso_language_code'.
! !

!TwitterResult methodsFor: 'printers'!

asString
	^ '@', username, ': ', (text text).
! !

!TwitterResult methodsFor: 'rendering'!

renderOn: html
	html div
		with: [
			html div class: 'twitter_avatar'; with: [
				html a href: 'https://twitter.com/', username;
					onClick: [ :event | window alert: 'Visiting the profile for @', username.
							event preventDefault.];
					with: [
						html img src: image.]].
			html with: text].
! !

Object subclass: #TwistModel
	instanceVariableNames: 'username'
	category: 'Twist'!

!TwistModel methodsFor: 'accessors'!

setUsername: aName
	username := aName.
! !

!TwistModel methodsFor: 'timeline'!

feedUrl
	"Return the Twitter feed URL for this user"

	^ 'http://twitter.com/status/user_timeline/', username, '.json?count=10&callback=?'
! !

Object subclass: #TwistApp
	instanceVariableNames: 'models'
	category: 'Twist'!
!TwistApp commentStamp!
Main entry point for the Twist application, runs as a singleton object on the page!

!TwistApp methodsFor: 'accessors'!

models
	"Return a collection of TwistModels that are associated with the current application"
	^ models.
! !

TwistApp class instanceVariableNames: 'app'!

!TwistApp class methodsFor: 'not yet classified'!

current
	^ app
		ifNil: [ app := super new ].
! !

Object subclass: #TwistSearch
	instanceVariableNames: 'query'
	category: 'Twist'!

!TwistSearch class methodsFor: 'searchers'!

search: theQuery limit: theCount callback: theBlock
	jQuery ajax: 'http://search.twitter.com/search.json?q=', theQuery, '&callback=?&maxResults=5'
		     options: #{'type' -> 'GET'.
					'dataType' -> 'jsonp'.
					'success' -> theBlock}.
! !

