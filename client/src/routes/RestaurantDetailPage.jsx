import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useContext } from 'react';

const RestaurantDetailPage = () => {
  const {id} = useParams();

  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
      
    };
    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name}
    </div>

  )
}

export default RestaurantDetailPage