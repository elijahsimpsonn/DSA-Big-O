// 1) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. 
// You want to find a playmate for your dog, preferably of the same breed. 
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
// Someone yells - "I do, be happy to bring him over"

// 2) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. 
// You want to find a playmate for your dog who is of the same breed. 
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You start with the first person and ask him if he has a golden retriever. 
// He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.


//---------//

// The Big O time for question 1 is Constant Time O(1)
// Assuming everyone is in range and can hear you, it doesn't matter how many people are in the room, all you have to do is yell once thing and if someone has the dog type they will respond. 

// The Big O time for question 2 is Logarithmic Time O(n)
// There is only one input and you are only doing one operation on it. Just like summing an array.