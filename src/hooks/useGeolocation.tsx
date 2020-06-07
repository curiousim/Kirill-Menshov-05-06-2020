import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAppIsLoading,
  setCity,
  setCityId,
  getWasGeolocated,
  setWasGeolocated,
} from '../store/app.reducer';
import axios, { AxiosResponse } from 'axios';

interface PositionState {
  latitude: string;
  longitude: string;
}

export const useGeolocation = () => {
  const dispatch = useDispatch();

  const wasGeolocated = useSelector(getWasGeolocated);

  const [position, setPosition] = useState<PositionState | {}>({});

  const { addToast } = useToasts();

  const onChange = ({ coords }: Position) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error: PositionError) => {
    addToast(`Error while geolocating: ${error.message}`, {
      appearance: 'error',
      autoDismiss: true,
    });
  };

  useEffect(() => {
    if (!wasGeolocated) {
      const geo = navigator.geolocation;

      geo.getCurrentPosition(onChange, onError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(position).length && !wasGeolocated) {
      dispatch(setWasGeolocated());
      dispatch(setAppIsLoading(true));

      axios({
        url:
          'https://wearolo.herokuapp.com/api/locations/v1/cities/geoposition/search',
        method: 'get',
        params: {
          apikey: process.env.REACT_APP_ACCU_KEY,
          language: 'en-us',
          details: false,
          toplevel: true,
          q: `${(position as PositionState).latitude}, ${
            (position as PositionState).longitude
          }`,
        },
      })
        .then((res: AxiosResponse) => {
          addToast(
            `According to geolocation you are in ${res.data.LocalizedName}. Showing weather for your location`,
            {
              appearance: 'success',
              autoDismiss: true,
            }
          );
          dispatch(setCity(res.data.LocalizedName));
          dispatch(setCityId(res.data.Key));
          dispatch(setAppIsLoading(false));
        })
        .catch((error) => {
          dispatch(setAppIsLoading(false));
          addToast(`Error while fetching forecast: ${error.message}`, {
            appearance: 'warning',
            autoDismiss: true,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return { ...position };
};
