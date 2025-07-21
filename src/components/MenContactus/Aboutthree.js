import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
 
const Aboutthree = () => {
    // Initial coordinates with country
    const [coordinates, setCoordinates] = useState([
        { address: "Suite 794 49823 Glover Fields, North Leighaport, MO", lat: 38.6270, lng: -90.1994, country: "USA" },
        { address: "Apt. 228 9976 Lesch Meadows, Yerview, RI 49061-3911", lat: 41.8230, lng: -71.4222, country: "USA" },
        { address: "13th Street, 47 W 13th St, New York, NY 10011, USA", lat: 40.7387, lng: -73.9975, country: "USA" },
        { address: "32729 White Canyon, Lake Cornellhaven, AL 19490-6873", lat: 34.7304, lng: -86.5861, country: "USA" }
    ]);
 
    // State for new coordinate input and map center
    const [newCoords, setNewCoords] = useState({ address: "", lat: "", lng: "", country: "" });
    const [mapCenter, setMapCenter] = useState([coordinates[0].lat, coordinates[0].lng]); // Default to first coordinate
 
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCoords(prev => ({ ...prev, [name]: value }));
    };
 
    // Add new coordinate and update map center
    const handleAddCoordinate = () => {
        if (newCoords.address && newCoords.lat && newCoords.lng && newCoords.country) {
            const newCoord = { address: newCoords.address, lat: parseFloat(newCoords.lat), lng: parseFloat(newCoords.lng), country: newCoords.country };
            setCoordinates(prev => [...prev, newCoord]);
            setMapCenter([parseFloat(newCoords.lat), parseFloat(newCoords.lng)]); // Update map center
            setNewCoords({ address: "", lat: "", lng: "", country: "" }); // Clear form
        }
    };
 
    // Get user's current location
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const userAddress = "Your Current Location";
                    const userCountry = "Unknown"; // You can use a reverse geocoding service for country, but it requires an API
                    const newCoord = { address: userAddress, lat: latitude, lng: longitude, country: userCountry };
                    setCoordinates(prev => [...prev, newCoord]);
                    setMapCenter([latitude, longitude]); // Center map on user's location
                },
                (error) => {
                    console.error("Error getting location: ", error.message);
                    alert("Unable to retrieve your location. Please enable location services or enter coordinates manually.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
 
    // Custom icon for markers
    const customIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });
 
    return (
        <>
            <div className="contact-section">
                <div className="container">
                    <div className="heading-box text-center">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            🤝 CONTACT US
                        </span>
                        <h2 className="heading-title wow fadeInUp animated animated">
                            Our Headquarters Location
                        </h2>
                    </div>
 
                    {/* Interactive Form and Location Button */}
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                        <input
                            type="text"
                            name="address"
                            value={newCoords.address}
                            onChange={handleInputChange}
                            placeholder="Enter Address"
                            style={{ margin: "5px", padding: "5px" }}
                        />
                        <input
                            type="number"
                            name="lat"
                            value={newCoords.lat}
                            onChange={handleInputChange}
                            placeholder="Latitude"
                            step="0.0001"
                            style={{ margin: "5px", padding: "5px" }}
                        />
                        <input
                            type="number"
                            name="lng"
                            value={newCoords.lng}
                            onChange={handleInputChange}
                            placeholder="Longitude"
                            step="0.0001"
                            style={{ margin: "5px", padding: "5px" }}
                        />
                        <input
                            type="text"
                            name="country"
                            value={newCoords.country}
                            onChange={handleInputChange}
                            placeholder="Country"
                            style={{ margin: "5px", padding: "5px" }}
                        />
                        <button
                            onClick={handleAddCoordinate}
                            style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#ffcc00", border: "none", cursor: "pointer" }}
                        >
                            Add Location
                        </button>
                        <button
                            onClick={handleGetLocation}
                            style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#00cc00", border: "none", cursor: "pointer" }}
                        >
                            Use My Location
                        </button>
                    </div>
 
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="row gutter-y-30">
                                {coordinates.map((coord, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="contact-location">
                                            <h5>{coord.country}</h5>
                                            <p>{coord.address}</p>
                                            <p>Lat: {coord.lat}, Lng: {coord.lng}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ height: "400px" }}>
                            <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {coordinates.map((coord, index) => (
                                    <Marker key={index} position={[coord.lat, coord.lng]} icon={customIcon}>
                                        <Popup>
                                            {coord.address} <br /> {coord.country}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
 
export default Aboutthree;