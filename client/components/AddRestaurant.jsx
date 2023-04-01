import React, { useState } from 'react'

const AddRestaurant = () => {

  const [ name, setName ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ priceRange, setPriceRange ] = useState("Price Range");

  return (
    <div className='mb-4'>
        <form action="">
            <div className="row">
                <div className="col">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control' placeholder='Name...'></input>
                </div>
                <div className="col">
                    <input value={location} onChange={e => setLocation(e.target.value)} className='form-control' type="text" placeholder='Location...'></input>
                </div>
                <div className="col">
                    <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className='custom-select my-1 mr-sm-2'>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <div className="col">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant