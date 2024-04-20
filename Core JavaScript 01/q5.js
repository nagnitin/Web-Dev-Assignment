function login(username, password) {
    if (username === "admin" && password === "12345") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

console.log(login("admin", "12345")); 
console.log(login("user", "password"));
