import React from 'react'
import { ActionCard, Button, CountCard, Header } from '../../../components/ui'
import { CirclePlus, CookingPot } from 'lucide-react'

const ManageFoodCategories = () => {
  return (
    <div className="sm:p-5 p-3 space-y-5">
      <Header heading="Manage Food Categories" subtitle="Add, edit, or delete food categories for your restaurant." />
      <div className="space-y-5 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CountCard 
          title="Total Categories"
          description="Current active food categories"
          count="12"
          icon={<CookingPot />}
        />
        <ActionCard
          icon={<CirclePlus />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          title="Add New Category"
          description="Click the button below to add a new food category"
        >
          <Button fullWidth variant="success" icon={<CookingPot />}>
            Add Category
          </Button>
        </ActionCard>
      </div>
      {/* <div className="bg-white shadow-md space-y-5 p-5 rounded-lg">
          <SectionHeader 
            title={t("sectionHeader.title", { ns: DEVICE_TRANSLATION_NAMESPACE })} 
            description={t("sectionHeader.description", { ns: DEVICE_TRANSLATION_NAMESPACE })} 
          />

          <div className="flex flex-wrap gap-4">
            <DeviceTableFilters searchBy={metadata.searchBy} t={t} />
          </div>
          <div className="w-full overflow-x-auto">
            <DevicesTable
              devices={devices}
              isLoading={isDevicesDataLoading}
              handleShowDevice={handleShowPopupOpen}
              handleEditDevice={handleEditPopupOpen}
              handleDeleteDevice={handleDeletePopupOpen}
              t={t}
            />
          </div>
      </div> */}
    </div>
  )
}

export default ManageFoodCategories
