Smalltalk current createPackage: 'Twist' properties: #{}!
Object subclass: #TwistModel
	instanceVariableNames: 'username'
	category: 'Twist'!

!TwistModel methodsFor: 'accessors'!

setUsername: aName
	username := aName.
!

setUsernameAgain: aName
	username := aName.
! !

!TwistModel methodsFor: 'timeline'!

feedUrl
	"Return the Twitter feed URL for this user"

	^ 'http://twitter.com/status/user_timeline/', username, '.json?count=10&callback=?'
! !

