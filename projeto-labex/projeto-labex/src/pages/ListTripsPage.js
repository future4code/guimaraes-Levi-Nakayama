import axios from "axios";
import react from "react";
import { useState } from "react/cjs/react.production.min";
import { goTripDetail } from "../routes/Coordinator";

const [trip, loadTrip, errTrip] = userRequestData(`${BASE_URL}/trips`);
const [tripDetail, setTripDetail] = useState(undefined);
const theTrips = trip?.trips;

const listTripId = theTrips?.map(nameId) => {
  const goTripDetail = () => {
    const tripId = nameId.id;
    const headers = {
      headers: {
        auth. localStorage.getItem('token'),
      },
    };
    axios
      .get(`${BASE_URL}/trip/${tripId}`, headers)
      .then((res) =>{
        setTripDetail(res.data.trip);
        navigate(`/detail/${tripId}`)
      })
      .catch(err)
  };
};

return (
  <label tripDetail={tripDetail} onClick={ () => goTripDetail(navigate)} key={nameId.id}>
    { nameId.name }
  </label>
)