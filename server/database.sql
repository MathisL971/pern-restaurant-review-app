CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)     NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INTEGER   NOT NULL  CHECK(price_range >= 1 AND price_range <= 5)
);