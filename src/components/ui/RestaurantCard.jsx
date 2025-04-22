import React from 'react';
import { MapPin, Utensils } from 'lucide-react';
import Button from './Button';
import { NavLink } from 'react-router';

const RestaurantCard = ({ name, location, description, image, link = "" }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border-3 border-[#ffced5] hover:border-[#A61B2B] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 max-w-4xl">
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 h-64 object-cover"
      />
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <NavLink to={link} className={() => ""}>
            <Button variant='outline' icon={<Utensils />}>Book Table</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
