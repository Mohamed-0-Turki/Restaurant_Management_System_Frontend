import { Search } from "lucide-react";
import { useState } from "react";
import { Header, Input, RestaurantCard } from "../../../components/ui";
import { foodDishImage } from "../../../assets";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const restaurants = [
    {
      name: 'Saffron Delight',
      location: 'Downtown, Cairo',
      description: 'Experience the finest blend of spices and culinary traditions.',
      image: foodDishImage,
      link: "/restaurants/1/menu"
    },
    {
      name: 'La Piazza',
      location: 'Zamalek, Cairo',
      description: 'Enjoy the authentic taste of Italian cuisine in a cozy setting.',
      image: foodDishImage,
    },
    {
      name: 'Sakura House',
      location: 'New Cairo',
      description: 'Delight in fresh sushi and Japanese classics made with care.',
      image: foodDishImage,
    },
    {
      name: 'Burger Yard',
      location: 'Maadi',
      description: 'The juiciest burgers in town with a side of crunchy fries.',
      image: foodDishImage,
    },
  ];

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 space-y-8">
      {/* Header */}
      <Header
        heading="Explore Restaurants"
        subtitle="Find the best places to eat around you"
      />
      <div className="max-w-4xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Search restaurants by name..."
          value={searchTerm}
          icon={<Search />} 
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No restaurants found.</p>
        )}
      </div>

    </div>
  );
};

export default Restaurants;
