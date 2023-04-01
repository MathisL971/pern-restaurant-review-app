import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
    
    const {id} = useParams();

    //const {restaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await RestaurantFinder.get(`/${id}`);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        };
        fetchData();
    }, [id]);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    let navigate = useNavigate();

    const handleSubmit =  async(e) => {
        e.preventDefault();
        const response = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        });
        console.log(response);
        navigate("/");
    }
  
    return (
        <div>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id='name' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} id='location' type="text" className='form-control' />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor="prince_range">Price Range</label>
                    <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} name="price_range" id="price_range">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit} className='btn btn-primary mt-3'>Submit</button>
            </form> 
        </div>
    )
}

export default UpdateRestaurant