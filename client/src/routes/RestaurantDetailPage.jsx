import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useContext } from "react";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);
  
  return (
    <div className="mt-5">
      {selectedRestaurant && (
        <>
          <i class="fa-solid fa-arrow-left fa-2xl" onClick={() => navigate(-1)}></i>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating
              rating={selectedRestaurant.restaurant.average_rating}
            ></StarRating>
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews}></Reviews>
            <AddReview></AddReview>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
