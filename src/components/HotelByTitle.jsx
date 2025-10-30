import useFetch from "../useFetch";

const HotelByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://hotel-app-backend-eac02.vercel.app/hotels/${title}`
  );
  //   console.log(data);

  return data ? (
    <div>
      <h1>{data.name}</h1>
      <p>
        <strong>Location: </strong>
        {data.location}
      </p>
      <p>
        <strong>Rating: </strong>
        {data.rating}
      </p>
      <p>
        <strong>Price Range: </strong>
        {data.priceRange}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default HotelByTitle;
