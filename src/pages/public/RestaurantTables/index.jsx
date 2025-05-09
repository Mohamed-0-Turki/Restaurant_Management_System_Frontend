import { Button, Header } from "../../../components/ui";
import { LifeBuoy, Sofa } from "lucide-react"; // Import Sofa icon
import { useRestaurantTables } from "../../../hooks/customer/useTableHokk";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const RestaurantTables = () => {
  const { userId, role } = useSelector((state) => state.auth);
  const { restaurantID } = useParams();
  const { tables } = useRestaurantTables(restaurantID);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 space-y-8">
      <Header
        heading="Restaurant Tables"
        subtitle="Explore available tables and reserve your spot."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tables.length > 0 ? (
          tables.map((table) => (
            <div
              key={table.id}
              className="bg-white p-4 border rounded-xl shadow-lg flex flex-col items-center"
            >
              {/* Table with Chairs (Sofa icons) */}
              <div className="relative w-full flex justify-center items-center py-6">
                {/* Left Chairs */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Sofa key={i} className="w-8 h-8 text-gray-400" />
                  ))}
                </div>

                {/* Table rectangle */}
                <div className="w-40 h-20 bg-[#ffccd5] rounded-md flex items-center justify-center border border-[#A61B2B]">
                  <span className="text-[#A61B2B] font-semibold">{table.tableName}</span>
                </div>

                {/* Right Chairs */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Sofa key={i} className="w-8 h-8 text-gray-400" />
                  ))}
                </div>

              </div>

              {/* Capacity Text */}
              <p className="text-lg font-medium text-gray-600 mt-2">
                Capacity: {table.capacity}
              </p>

              {/* Reserve Button */}
              <div className="mt-4 w-full">
                {userId && role === "customer" ? (
                  <Button
                    fullWidth={true}
                    icon={<LifeBuoy className="w-4 h-4" />}
                    size="sm"
                    variant="success"
                  >
                    Reserve Now
                  </Button>
                ) : (
                  <Button fullWidth={true} size="sm" disabled variant="success">
                    Login as Customer
                  </Button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No tables found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantTables;
