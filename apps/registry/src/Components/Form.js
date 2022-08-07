import React from 'react';
import {Formik, Field} from 'formik';
import VehiclesProvider from '../Context/VehiclesProvider';
import useVehicles from '../Hooks/useVehicles';
//
import {getCookie} from '../helpest'
import { initial_values } from './initial_values';
import axios from 'axios';

export default function Form() {
    const [BrandSelector, VehicleSelector] = useVehicles();
    return (
        <VehiclesProvider>
            <Formik
            initialValues={initial_values}
            onSubmit={async values => {
                const csrftoken = getCookie('csrftoken');
                const res = await axios.post('/api/registry', values, {
                    headers: {"X-CSRFToken": csrftoken}
                });

                console.log(res.data)
            }
            }
            >
            {({handleSubmit}) => (
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="row">
                            <div className="col-6 mb-3">
                                <Field className="form-control" name="firstname" placeholder="Nombre"/>
                            </div>
                            <div className="col-6 mb-3">
                                <Field className="form-control" name="lastname" placeholder="Apellidos"/>
                            </div>
                            <div className="col-12 mb-3">
                                <Field className="form-control" name="email" placeholder="tu_email@ejemplo.com"/>
                            </div>
                            <div className="col-12 mb-3">
                                <Field className="form-control" name="phone" placeholder="55 5555 5555"/>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <VehicleSelector/>
                        </div>
                        <div className="col-6 mb-3">
                            <BrandSelector/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="submit" className="btn btn-secondary btn-lg btn-block">Enviar</button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
        </VehiclesProvider>
    )
}
