import { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rating"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://hotel-app-backend-eac02.vercel.app/hotels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw "Failed to add hotel";
      }
      const data = await response.json();
      console.log("Hotel added: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="hotelName">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="hotelName"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="category">Category:</label>
        <br />
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" required>
            --Please Select Hotel Category--
          </option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <br />
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          id="rating"
          required
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="website">Website:</label>
        <br />
        <input
          type="text"
          name="website"
          id="website"
          required
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkInTime">Check In Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          id="checkInTime"
          required
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="checkOutTime">Check Out Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          id="checkOutTime"
          required
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="amenities">Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          id="amenities"
          required
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="priceRange">Price Range:</label>
        <br />
        <select
          name="priceRange"
          id="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          required
        >
          <option value="" required>
            --Please select price range--
          </option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="reservationsNeeded"
          id="reservationsNeeded"
          onChange={handleChange}
        />
        <label htmlFor="reservationsNeeded">ReservationsNeeded</label>
        <br />
        <input
          type="checkbox"
          name="isParkingAvailable"
          id="isParkingAvailable"
          onChange={handleChange}
        />
        <label htmlFor="isParkingAvailable">IsParkingAvailable</label>
        <br />
        <input
          type="checkbox"
          name="isWifiAvailable"
          id="isWifiAvailable"
          onChange={handleChange}
        />
        <label htmlFor="isWifiAvailable">IsWifiAvailable</label>
        <br />
        <input
          type="checkbox"
          name="isPoolAvailable"
          id="isPoolAvailable"
          onChange={handleChange}
        />
        <label htmlFor="isPoolAvailable">IsPoolAvailable</label>
        <br />
        <input
          type="checkbox"
          name="isSpaAvailable"
          id="isSpaAvailable"
          onChange={handleChange}
        />
        <label htmlFor="isSpaAvailable">IsSpaAvailable</label>
        <br />
        <input
          type="checkbox"
          name="isRestaurantAvailable"
          id="isRestaurantAvailable"
          onChange={handleChange}
        />
        <label htmlFor="isRestaurantAvailable">IsRestaurantAvailable</label>
        <br />
        <br />
        <label htmlFor="photos">Photo:</label>
        <br />
        <input
          type="text"
          name="photos"
          id="photos"
          required
          value={formData.photos}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
