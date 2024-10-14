const evenLengthFriends = (friends) => {
    const evenFriends = [];

    friends.forEach(friend => {
        
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        }
    });

    return evenFriends;
};


const friends = ['Alex', 'Bob', 'Charlie', 'David', 'Anna'];
console.log(evenLengthFriends(friends)); 
