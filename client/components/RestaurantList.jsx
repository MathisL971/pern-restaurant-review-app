import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = (props) => {
  
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch (e) {
    
            }
        };
        fetchData();
    }, [])
  
    return (
    <div className='list-group'>
        <table className="table table-hover">
            <thead className='container-fluid text-white'>
                <tr className='bg-primary'>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map(restaurant => {
                    return(
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>Reviews</td>
                            <td><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    );
                })}
                {/* <tr>
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList