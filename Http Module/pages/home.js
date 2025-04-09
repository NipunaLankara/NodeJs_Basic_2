const home = () =>{

    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
}

header {
    background: #333;
    color: white;
    padding: 15px 0;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

.hero {
    margin: 50px 0;
    padding: 20px;
}

button {
    padding: 10px 20px;
    background: #ff4081;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

button:hover {
    b
    </style>
</head>
<body>
    <header>
        <nav>
            <h1>My Website</h1>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Product</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section class="hero">
        <h2>Welcome to Our Website</h2>
        <p>Your journey to amazing experiences starts here.</p>
        <button onclick="showMessage()">Get Started</button>
    </section>
    <script >
        function showMessage() {
             alert("Welcome to our website!");
        }

    </script>
</body>
</html>
`

}
export default home;