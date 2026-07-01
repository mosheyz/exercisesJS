// 1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then((post) => {
        console.log(post);
        // console.log("body:", post.body);
    })
    .catch((err) => {
        console.error("failed:", err.message);
    });

// 2
fetch("https://jsonplaceholder.typicode.com/notfound")
    .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .catch((err) => {
        console.error("failed:", err.message);
    });

// 3
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
        })
    .then(posts => {
        for (let post of posts) {
            console.log("title:", post.title)
        }
    })
    .catch(err => console.error("failed:", err.message))

// 4
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    Headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "כותרת חדשה",
        body: "תוכן הפוסט",
        userId: 1,
    }),
    })
    .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error("error:", err.message));

// 5
function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
        (response) => {
            console.log("status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        },
    );
}

getUserById(5)
    .then((user) => console.log(user))
    .catch((err) => console.error("status:", err.message));

// 6
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(res => {console.log(res); return res.userId})
    .then((id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
    .then(response => {
        console.log("status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.error("status:", err.message));

// 7
function resHandler (res) {
    console.log("status:", res.status)
    if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
    }
    return res.json()
}

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then(res => resHandler(res)),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => resHandler(res)),
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => resHandler(res))

])
.then(res2 => console.log(res2))


