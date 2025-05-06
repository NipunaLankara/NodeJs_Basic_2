import mysql from "mysql2/promise";

// Async function to run queries
const runQueries = async () => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mysql7678',
            database: 'node_db1'
        });

        console.log(" Connected to database");

        // 1. Create table
        await db.execute(`
            CREATE TABLE IF NOT EXISTS car (
                car_number VARCHAR(20) PRIMARY KEY,
                model VARCHAR(50),
                type VARCHAR(30),
                amount_per_km DECIMAL(10,2)
            )
        `);
        console.log("Table created or already exists");

        // 2. Insert data
        const cars = [
            ['C001', 'Toyota Prius', 'Hybrid', 45.50],
            ['C002', 'Honda Civic', 'Sedan', 38.75],
            ['C003', 'Nissan Leaf', 'Electric', 42.00],
            ['C004', 'Suzuki Wagon R', 'Mini', 30.00]
        ];
        await db.query("INSERT IGNORE INTO car (car_number, model, type, amount_per_km) VALUES ?", [cars]);
        console.log(" Cars inserted");

        // 3. Get all cars
        const [allCars] = await db.query("SELECT * FROM car");
        console.log(" All Cars:", allCars);

        // 4. Get one car
        const [oneCar] = await db.query("SELECT * FROM car WHERE car_number = ?", ['C002']);
        console.log(" Car C002:", oneCar);

        // 5. Update a car
        await db.query("UPDATE car SET model = ?, amount_per_km = ? WHERE car_number = ?", ['Honda Accord', 40.00, 'C002']);
        console.log(" Car updated");

        // 6. Delete a car
        await db.query("DELETE FROM car WHERE car_number = ?", ['C004']);
        console.log("Car deleted");

        // Close connection
        await db.end();
    } catch (err) {
        console.error(" DB Error:", err);
    }
};

runQueries();
