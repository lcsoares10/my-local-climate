type TCoordinates = {
  latitude?: Number;
  longitude?: Number;
};

import { useState, useEffect } from "react";

export default function useMyGeolocation() {
  const [coords, setCoords] = useState<TCoordinates>({
    longitude: 0,
    latitude: 0,
  });
  const [loading, setLoading] = useState(true);

  const success = async (position) => {
    const { longitude, latitude } = await position.coords;
    setCoords({ longitude, latitude });
    setLoading(false);
  };
  const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);

  useEffect(() => {
    const handleGetGeolocation = () =>
      navigator.geolocation.getCurrentPosition(success, error);
    handleGetGeolocation();
  }, []);

  return { coords, loading };
}
