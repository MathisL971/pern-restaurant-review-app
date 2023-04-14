import React from 'react'
import UpdateRestaurant from '../components/UpdateRestaurant'
import { useNavigate } from 'react-router-dom';

const UpdatePage = () => {

  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <i class="fa-solid fa-arrow-left fa-2xl" onClick={() => navigate(-1)}></i>
      <h1 className='text-center display-1'>Update Restaurant</h1>
      <UpdateRestaurant></UpdateRestaurant>
    </div>
  )
}

export default UpdatePage