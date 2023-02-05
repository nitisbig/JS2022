const users =
[
    {
        userName:"Nitesh Ghimire",
        password:"nitesh@+1"
    },
    {
        userName:"Gaurav Ghimire",
        password:"gaurav@+1"
    },
    {
        userName:"Ram Ghimire",
        password:"ram@+1"
    }
]

const usr = (users.find(user=>user.userName==="Ram Ghimire"));
console.log(usr);