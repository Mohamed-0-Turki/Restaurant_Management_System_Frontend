import { Button, Header } from "../../../components/ui";
import { LifeBuoy, TableIcon } from "lucide-react";
import { useRestaurantTables } from "../../../hooks/customer/useTableHokk";
import { useParams } from "react-router";

const RestaurantTables = () => {
  const { restaurantID } = useParams();

  const { tables } = useRestaurantTables(restaurantID);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 space-y-8">
      <Header
        heading="Restaurant Tables"
        subtitle="Explore available seating options in the restaurant."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {tables.length > 0 ? (
        tables.map((table) => (
          <div
            key={table.id}
            className="border rounded-2xl shadow p-4 flex flex-col space-y-2 bg-white hover:shadow-md transition"
          >
            <div className="flex items-center space-x-2">
              <TableIcon className="text-primary w-5 h-5" />
              <h2 className="text-xl font-semibold">{table.tableName}</h2>
            </div>
            <p className="text-lg text-gray-600">Capacity: {table.capacity}</p>
            <Button fullWidth={false} icon={<LifeBuoy />} variant="success">Reserve now</Button>
          </div>
        ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No tables found.</p>
        )}
        {}
      </div>
    </div>
  );
};

export default RestaurantTables;
