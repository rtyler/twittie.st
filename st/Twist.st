Smalltalk current createPackage: 'Twist' properties: #{}!
Object subclass: #TwistApp
	instanceVariableNames: 'models count timelines'
	category: 'Twist'!
!TwistApp commentStamp!
Main entry point for the Twist application, runs as a singleton object on the page!

!TwistApp methodsFor: 'accessors'!

models
	"Return a collection of TwistModels that are associated with the current application"
	^ models.
!

search
	| query container search |
	query := '#twist_search_box' asJQuery val.
	'#twist_search_box' asJQuery val: ''.

	container := 'search_for_', count asString.
	count := count + 1.

	[ :html |
		html div id: container; class: 'TwitterSearch'; with: [
			html a with: 'Remove "', query, '"';
					href: '#';
					onClick: [ :event | (timelines at: query ifAbsent: nil) remove. event preventDefault ]. 
			]] appendToJQuery: '#twist_container' asJQuery.
	search := TwitterSearch new withQuery: query; withLimit: 10; inContainer: container; search.
	timelines at: query put: search.
!

initialize
	count := 0.
	timelines := Dictionary new.
! !

TwistApp class instanceVariableNames: 'app'!

!TwistApp class methodsFor: 'not yet classified'!

current
	^ app
		ifNil: [ app := super new ].
! !

Widget subclass: #TWWidget
	instanceVariableNames: ''
	category: 'Twist'!

TWWidget subclass: #TwitterText
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
				token size = 0
					ifFalse: [ self renderToken: token on: html ].
				html with: ' ']].
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
						self renderHashTag: token on: html].
				(token at: 1) = '@'
					ifTrue: [
						rendered := true.
						self renderMention: token on: html]].
	rendered ifFalse: [ html with: token ].
!

renderHashTag: theTag on: html
	html a class: 'TwitterTextHashTag';
			onClick: [ :event  | window alert: 'Clicked hash tag: ', theTag. event preventDefault ];
			href: '#';
			with: theTag.
!

renderMention: aMention on: html
	html a class: 'TwitterTextMention';
			onClick: [ :event | window alert: 'Clicked mention for ', aMention. event preventDefault ];
			href: '#';
			with: aMention.
! !

TWWidget subclass: #TwitterResult
	instanceVariableNames: 'text username image lang id'
	category: 'Twist'!

!TwitterResult methodsFor: 'accessors'!

text
	^ text.
!

username
	^ username.
!

remove
	"Remove myself from the DOM"
	('#', self elementID) asJQuery remove.
!

elementID
	"Return this element's DOM elemnt ID"
	^ 'TwitterResult_', id asString.
! !

!TwitterResult methodsFor: 'initializers'!

withData: data
	id := data at: 'id'.
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
		class: 'TwitterResult';
		id: self elementID;
		with: [
			html with: (TwitterAvatar new withName: username; withImage: image; yourself).
			html with: text].
! !

TWWidget subclass: #TwitterTimeline
	instanceVariableNames: 'itemMax'
	category: 'Twist'!

!TwitterTimeline methodsFor: 'not yet classified'!

initialize
	itemMax := 50.
! !

TwitterTimeline subclass: #TwitterSearch
	instanceVariableNames: 'query limit container polling interval lastid results'
	category: 'Twist'!

!TwitterSearch methodsFor: 'not yet classified'!

initialize
	query := ''.
	limit := 10.
	container := nil.
	lastid := 0.
	interval := window setInterval: [ self search ] length: 15000.
	results := Array new.
	super initialize.
!

withQuery: aQuery
	query := aQuery.
!

search
	"Run the actual search JSONP request"
	window console log: 'Running a search for ', query.
	jQuery ajax: 'http://search.twitter.com/search.json?q=', query escaped, '&callback=?&maxResults=', limit, '&since_id=', lastid
			options: #{'type' -> 'GET'.
					'dataType' -> 'jsonp'.
					'success' -> [ :results | self successWithData: results ].
					'error' -> [ self displayError: 'Failed to search for: ', query]}.
!

withLimit: aLimit
	limit := aLimit.
!

displayError: anErrorString
	"Display any general kind of error"
	window alert: anErrorString.
!

successWithData: theData
	"Build out and render the results from a search"
	container ifNotNil: [
			 	theData results reversed do: [ :data |
					| view result |
					(data at: 'id') > lastid
							ifTrue: [ lastid := data at: 'id' ].

					result := TwitterResult new withData: data; yourself.
					results add: result.
					view := HTMLCanvas new div.
					container asJQuery prepend: view asJQuery.
					result appendToJQuery: view asJQuery]].
	self trimResults.
!

inContainer: containerString
	"Set the div container string for this specific search object"

	"NOTE: Making sure to prefix the container with a hash to make it valid jQuery CSS Selector syntax"
	container := '#', containerString asString.
!

remove
	"Stop the update and remove the DOM element"
	container asJQuery remove.
	window clearInterval: interval.
!

trimResults
	"
	Prune our results Array and remove the DOM elements
	Otherwise we might suck up a *lot* of memory in the browser,
	which would be especially bad for popular topics/timelines.
	"
	(results size) > itemMax
		ifTrue: [
			| count item |
			count := 0.
			results size - itemMax timesRepeat: [
				count := count + 1.
				item := results at: count.
				item remove].
			results removeFrom: 1 to: results size - itemMax.
			].
! !

TWWidget subclass: #TwitterAvatar
	instanceVariableNames: 'username image'
	category: 'Twist'!

!TwitterAvatar methodsFor: 'not yet classified'!

renderOn: html
	html div class: 'TwitterAvatar'; with: [
		html a href: 'https://twitter.com/', username;
			onClick: [ :event | window alert: 'Visiting the profile for @', username.
					event preventDefault.];
			with: [
				html img src: image.]].
!

withName: aUsername
	username := aUsername.
!

withImage: imageURL
	image := imageURL.
! !

