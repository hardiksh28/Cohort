function greet(user){
    if(user.gender === "Male"){
        console.log("Hii Mr. "+ user.name+ ",your age is "+ 21);
    }
    // elif(user.gender === "Female"){
    //     console.log("Hii Mrs. "+ user.name+ ",your age is "+ 21);
    // }
    else{
        console.log("Hii Others "+ user.name+ ",your age is "+ 21);
    }
}
let user = {
    name: "Harkirat",
    age: 21,
    gender: "Female",
}
greet(user);
