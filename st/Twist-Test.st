Smalltalk current createPackage: 'Twist-Test' properties: #{}!
TestCase subclass: #TwistModelTests
	instanceVariableNames: ''
	category: 'Twist-Test'!

!TwistModelTests methodsFor: 'tests'!

testCorrectFeedUrl
	"Ensure that if we set TwistModel username, the feedUrl is correct"
	| model |
	model := TwistModel new.
	model stUsername: 'testbot'.
	self assert: 'http://twitter.com/status/user_timeline/testbot.json?count=10&callback=?' equals: model feedUrl.
!

testFailure
	self deny: true.
! !

