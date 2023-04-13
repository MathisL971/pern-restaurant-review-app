CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)     NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INTEGER   NOT NULL  CHECK(price_range >= 1 AND price_range <= 5)
);

CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    body TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 and rating <= 5),
    restaurant_id INT NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);