import React from 'react';
import { VehiclesContext } from '../Context/VehiclesProvider';
import { useFormikContext } from 'formik';

export default function useVehicles() {
    function BrandSelector() {
        const {data, setbrand} = React.useContext(VehiclesContext);
        const {values,setValues} = useFormikContext();

        const setBrand = e => {
            setValues({...values, brand: e.target.value});
            setbrand(e.target.value)
        }

        return (
            <select onChange={setBrand} className='form-control'>
                 <option value="">Selecciona Marca</option>
                {data.length > 0 ? data.map(vehicle => <option value={vehicle.brand_name} key={vehicle.brand_name}>{vehicle.brand_name}</option>) : null}
            </select>
        )
    }
    
    function VehicleSelector() {
        const {vehicles} = React.useContext(VehiclesContext);
        const {values,setValues} = useFormikContext();

        const selectVehicle  = e => {
            setValues({...values, vehicle: e.target.value});
        }
        return (
            <select onChange={selectVehicle} className='form-control'> 
                <option value="">Selecciona Vehiculo</option>               
                {vehicles.length > 0 ? vehicles.map(vehicle => <option value={vehicle.vehicle_name} key={vehicle.vehicle_name}>{vehicle.vehicle_name}</option>) : null}
            </select>
        )
    }

    return [VehicleSelector, BrandSelector]
}
