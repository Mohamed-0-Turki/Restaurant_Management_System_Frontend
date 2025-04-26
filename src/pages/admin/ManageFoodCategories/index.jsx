import React, { useState } from 'react'
import { ActionCard, Button, CountCard, Header, Input, SectionHeader, Table, TableCell, TableRow } from '../../../components/ui'
import { CirclePlus, CookingPot, Edit, Search, TrashIcon } from 'lucide-react'
import { AddCategoryPopup } from './views';
import { useGetAllCategories } from '../../../hooks/admin/useCategory';

const ManageFoodCategories = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const { categories } = useGetAllCategories();

  return (
    <div className="sm:p-5 p-3 space-y-5">
      <Header heading="Manage Food Categories" subtitle="Add, edit, or delete food categories for your restaurant." />
      
      <div className="space-y-5 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CountCard 
          title="Total Categories"
          description="Current active food categories"
          count={categories.length}
          icon={<CookingPot />}
        />
        <ActionCard
          icon={<CirclePlus />}
          iconBgColor="bg-[#D7263D]"
          iconColor="text-[#ffffff]"
          title="Add New Category"
          description="Click the button below to add a new food category"
        >
          <Button fullWidth onClick={() => setIsAddPopupOpen(true)}>
            Add Category
          </Button>
        </ActionCard>
      </div>

      <div className="bg-white shadow-md space-y-5 p-5 rounded-lg">
        <SectionHeader title="Manage Categories" description="Here you can view and manage all food categories." />

        <div className="w-full overflow-x-auto">
          <Table columns={["#ID", "Name", "Action"]}>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell className='flex gap-3'>
                    <Button size='sm' variant='info' icon={<Edit className='w-full h-full' />} />
                    <Button size='sm' icon={<TrashIcon className='w-full h-full' />} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No categories found.
                </TableCell>
              </TableRow>
            )}
          </Table>
        </div>
      </div>

      <AddCategoryPopup
        isOpen={isAddPopupOpen}
        handleClose={() => setIsAddPopupOpen(false)}
      />
    </div>
  )
}

export default ManageFoodCategories;
