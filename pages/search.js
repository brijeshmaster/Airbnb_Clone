import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, NoOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${NoOfGuest} guests`} />

      <main className="flex ">
        <section className="flex-grow pt-3 px-6">
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out">
              Cancelation Flexibility
            </p>

            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out">
              Type Of Place
            </p>

            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out">
              Price
            </p>

            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out">
              Rooms And Beds
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all transform duration-100 ease-out">
              More Filters
            </p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img} img={img} location={location} title={title} description={description} star={star} price={price} total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden md:inline-flex md:min-w-[500px]">
          <Maps searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const Result = await fetch("https:links.papareact.com/isz");
  const searchResults = await Result.json();

  return {
    props: { searchResults },
  };
}
