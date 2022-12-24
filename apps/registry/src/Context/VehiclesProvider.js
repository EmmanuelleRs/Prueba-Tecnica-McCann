import React from 'react';
import axios from 'axios';


export const VehiclesContext = React.createContext();

export default function VehiclesProvider({children}) {
  const [data, setdata] = React.useState([]);
  const [brand, setbrand] = React.useState('');
  const [vehicles, setvehicles] = React.useState([])
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/cars/api/vehicles/');
      setdata(res.data);
    }
    getData();
  }, [])

  React.useEffect(() => {
    let v = data.length !== 0 ? data.filter(vehicle =>vehicle.brand_name === brand)[0]['vehicles'] : [];
    setvehicles(v);
  }, [brand]);

  return (
    <VehiclesContext.Provider
    value={{data, setbrand, vehicles}}
    >{children}</VehiclesContext.Provider>
  )
}
