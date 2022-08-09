import React from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import VehiclesProvider from '../Context/VehiclesProvider';
import useVehicles from '../Hooks/useVehicles';
//
import {getCookie} from '../helpest'
import { initial_values } from './initial_values';
import axios from 'axios';
import { validate } from './validations';

export default function Form() {
    const [BrandSelector, VehicleSelector] = useVehicles();
    const [msg, setmsg] = React.useState(false);
    return (
        <VehiclesProvider>
            <Formik
            initialValues={initial_values}
            validate={values => validate(values)}
            onSubmit={async (values, {setErrors}) => {
                setmsg(false);
                const csrftoken = getCookie('csrftoken');
                const res = await axios.post('/api/registry', values, {
                    headers: {"X-CSRFToken": csrftoken}
                });

                if (res.data.success) setmsg(true);
                else {
                    setErrors(res.data)}
            }}
            >
            {({errors, isValid, handleSubmit, handleBlur}) => (
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="row">
                            <div className="col-6 mb-3">
                                <Field className="form-control" name="firstname" placeholder="Nombre"/>
                                <div className='error'><ErrorMessage name="firstname"/></div>
                            </div>
                            <div className="col-6 mb-3">
                                <Field className="form-control" name="lastname" placeholder="Apellidos"/>
                                <div className='error'><ErrorMessage name="lastname"/></div>
                            </div>
                            <div className="col-12 mb-3">
                                <Field className="form-control" name="email" placeholder="tu_email@ejemplo.com"/>
                                <div className='error'><ErrorMessage name="email"/></div>
                            </div>
                            <div className="col-12 mb-3">
                                <Field className="form-control" name="phone" placeholder="55 5555 5555"/>
                                <div className='error'><ErrorMessage name="phone"/></div>
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
                        <div className="legals col-12">
                            <p><strong>Polìtica de Provacidad</strong><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {msg ? <div className="alert alert-success" >Registro con èxito</div> : null}
                        </div>
                    </div>
                    <div className="row">
                        <ErrorMessage name='non_field_errors'/>
                        <div className="col-12">{errors.non_field_errors ? <div className="alert alert-danger" role="alert">{errors.non_field_errors}</div> : null}</div>
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
