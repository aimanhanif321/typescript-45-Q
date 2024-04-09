// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// /QUESTION # 32


let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];

let new_users: string[] = ["User1", "User6", "user7", "user2", "User8"];

new_users.forEach(newuser => {
    if(current_users.some(curentuser => curentuser.toLocaleLowerCase() === newuser.toLowerCase())){
        console.log(`${newuser}is available you will need to enter a new user name`);
    }
     else{
        console.log(`${newuser} is availble`);
    }
});