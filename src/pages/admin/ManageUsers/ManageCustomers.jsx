import React, { useState } from 'react'
import { ActionCard, Button, CountCard, Header, SectionHeader, Table, TableCell, TableRow } from '../../../components/ui'
import { CirclePlus, Edit, TrashIcon, UserCog, Users } from 'lucide-react'
import { useGetAllUsers } from '../../../hooks/admin/useUserHook';
import { DeleteUserPopup, EditUserPopup } from './views';
import { useNavigate } from 'react-router';

const ManageCustomers = () => {
  const navigate = useNavigate();

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const [selectedID, setSelectedID] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  const { users } = useGetAllUsers("Customer"); // 🛑 لاحظ هنا بدل Manager صارت Customer

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditPopupOpen(true);
  };

  return (
    <div className="sm:p-5 p-3 space-y-5">
      <Header heading="Manage Customers" subtitle="Edit or delete customers from the system." />
      
      <div className="space-y-5 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <CountCard 
          title="Total Customers"
          description="Current registered customers"
          count={users.length}
          icon={<CirclePlus />}
        />
        <div className="flex flex-col sm:flex-row gap-4 mx-auto w-full max-w-fit">
          <ActionCard
            icon={<Users />}
            iconBgColor="bg-blue-600"
            iconColor="text-white"
            title="View Customers"
            description="Click below to view all registered customers"
          >
            <Button fullWidth onClick={() => navigate("/admin/customers")} variant='info'>
              Go to Customers
            </Button>
          </ActionCard>

          <ActionCard
            icon={<UserCog />}
            iconBgColor="bg-green-600"
            iconColor="text-white"
            title="View Restaurant Managers"
            description="Click below to view all restaurant managers"
          >
            <Button fullWidth onClick={() => navigate("/admin/restaurant-managers")} variant='success'>
              Go to Managers
            </Button>
          </ActionCard>
        </div>
      </div>

      <div className="bg-white shadow-md space-y-5 p-5 rounded-lg">
        <SectionHeader title="Manage Customers" description="Here you can view and manage all registered customers." />

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
                  No customers found.
                </TableCell>
              </TableRow>
            )}
          </Table>
        </div>
      </div>

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

export default ManageCustomers;
