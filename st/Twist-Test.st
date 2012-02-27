Smalltalk current createPackage: 'Twist-Test' properties: #{}!
TestCase subclass: #TwitterTextTests
	instanceVariableNames: ''
	category: 'Twist-Test'!

!TwitterTextTests methodsFor: 'tests'!

testSimpleText
	| t text |
	text := 'This is a sample tweet!!'.
	t := TwitterText new withText: text.
	self assert: text equals: t text.
!

testNoHashtags
	| t | 
	t := TwitterText new withText: 'This has no hashtags'.
	self assert: 0 equals: t hashtags size.
!

testOneHashtag
	| t | 
	t := TwitterText new withText: 'This has one hashtag #smalltalk'.
	self assert: 1 equals: t hashtags size.
	self assert: '#smalltalk' equals: (t hashtags at: 1).
!

testNoMentions
	| t | 
	t := TwitterText new withText: 'This has no mentions'.
	self assert: 0 equals: t mentions size.
!

testOneMention
	| t | 
	t := TwitterText new withText: 'This mentions one user: @AmberSmalltalk'.
	self assert: 1 equals: t mentions size.
	self assert: '@AmberSmalltalk' equals: (t mentions at: 1).
!

testNoLinks
	| t | 
	t := TwitterText new withText: 'This has no links'.
	self assert: 0 equals: t links size.
!

testOneLink
	| t | 
	t := TwitterText new withText: 'This has one http://bit.ly/123'.
	self assert: 1 equals: t links size.
	self assert: 'http://bit.ly/123' equals: (t links at: 1).
! !

