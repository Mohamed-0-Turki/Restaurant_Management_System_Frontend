import { foodDishImage } from "../../../../assets"
import { Button } from "../../../../components/ui"

const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Discover & Book Your<br />Favorite Restaurant with Yumme
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Yumme helps you explore top restaurants and book your table instantly — simple, fast, and deliciously easy!
        </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Button shape="pill">
              Book Table
            </Button>
            <Button shape="pill" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src={foodDishImage}
            alt="Delicious Food"
            className="lg:w-96 md:w-80 lg:h-96 md:h-80 object-cover rounded-full shadow-xl"
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection