import React, { useState } from 'react'
import { ActionCard, Button, CountCard, Header, SectionHeader, Table, TableCell, TableRow } from '../../../components/ui'
import { CirclePlus, Edit, TrashIcon } from 'lucide-react'
import { useGetAllUsers } from '../../../hooks/admin/useUserHook';
import { AddUserPopup, DeleteUserPopup, EditUserPopup } from './views';

const ManageRestaurantManagersPage = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const [selectedID, setSelectedID] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  const { users } = useGetAllUsers("Manager");

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditPopupOpen(true);
  };

  return (
    <div className="sm:p-5 p-3 space-y-5">
      <Header heading="Manage Users" subtitle="Add, edit, or delete users for the system." />
      
      <div className="space-y-5 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CountCard 
          title="Total Users"
          description="Current active users"
          count={users.length}
          icon={<CirclePlus />}
        />
        <ActionCard
          icon={<CirclePlus />}
          iconBgColor="bg-[#D7263D]"
          iconColor="text-[#ffffff]"
          title="Add New User"
          description="Click the button below to add a new user"
        >
          <Button fullWidth onClick={() => setIsAddPopupOpen(true)}>
            Add User
          </Button>
        </ActionCard>
      </div>

      <div className="bg-white shadow-md space-y-5 p-5 rounded-lg">
        <SectionHeader title="Manage Users" description="Here you can view and manage all users." />

        <div className="w-full overflow-x-auto">
          <Table columns={["#ID", "Name", "Email", "Role", "Action"]}>
            {users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className='flex gap-3'>
                    <Button 
                      size='sm' 
                      variant='info' 
                      icon={<Edit className='w-full h-full' />} 
                      onClick={() => handleEditClick(user)}
                    />
                    <Button 
                      size='sm' 
                      icon={<TrashIcon className='w-full h-full' />} 
                      onClick={() => { 
                        setIsDeletePopupOpen(true);
                        setSelectedID(user.id);
                      }} 
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </Table>
        </div>
      </div>

      <AddUserPopup
        isOpen={isAddPopupOpen}
        handleClose={() => setIsAddPopupOpen(false)}
      />
      <EditUserPopup
        isOpen={isEditPopupOpen}
        handleClose={() => setIsEditPopupOpen(false)}
        defaultValues={selectedUser}
      />
      <DeleteUserPopup
        isOpen={isDeletePopupOpen}
        handleClose={() => setIsDeletePopupOpen(false)}
        userId={selectedID}
      />
    </div>
  )
}

export default ManageRestaurantManagersPage;
