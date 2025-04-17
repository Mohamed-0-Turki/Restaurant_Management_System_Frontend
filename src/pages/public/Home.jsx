import React from 'react'
import { Button, CountCard } from '../../components/ui'
import { Calendar, ShoppingBasket, ShoppingCart, Star, Users } from 'lucide-react'

const Home = () => {
  return (
    <>
      <div className="mt-10 w-full flex flex-wrap gap-3 items-center justify-center">
        <Button>Order Now</Button>
        <Button variant="secondary">Reserve a Table</Button>


        <Button isLoading>Processing...</Button>

        <Button size="xs">Tiny</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XL</Button>


        <Button shape="square">Square</Button>
        <Button shape="rounded">Rounded</Button>
        <Button shape="pill">Pill</Button>

        <Button icon={<ShoppingBasket />}>Add to Cart</Button>

        <Button variant="info">View Menu</Button>
        <Button variant="warning">Out of Stock</Button>
        <Button variant="error">Cancel Order</Button>
        <Button variant="success">Payment Successful</Button>
        <Button variant="cancel">Back</Button>
        <Button variant="outline">Learn More</Button>

      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CountCard
          title="Total Customers"
          description="All-time total customers served"
          count={1032}
          icon={<Users />}
        />
        <CountCard
          title="Orders Today"
          description="Orders placed today"
          count={78}
          icon={<ShoppingCart />}
        />
        <CountCard
          title="Reservations"
          description="Upcoming table bookings"
          count={25}
          icon={<Calendar />}
        />
      </div>

    </>
  )
}

export default Home