export function validate (values) {
    const errors = {};
    if (!values.firstname) errors.firstname = 'Campo obligatorio';
    else if (!/^[a-zA-Z]+$/.test(values.firstname)) errors.firstname = 'Nombre invàlido';

    if (!values.lastname) errors.lastname = 'Campo obligatorio';
    else if (!/^[a-zA-Z]+$/.test(values.lastname)) errors.lastname = 'Apellido invàlido';

    if (!values.email) errors.email = 'Campo obligatorio';
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) errors.email = 'Email invàlido.';

    if (!values.phone) errors.phone = 'Campo obligatorio';
    else if(!/^[-+]?[0-9]+$/.test(values.phone)) errors.phone = 'Nùmero telefònico invàlido.';
    else if(values['phone'].length !== 10) errors.phone = 'Ingrese un número de 10 dìgitos.';

    if (!values.brand) errors.brand = 'Campo obligatorio';

    if (!values.vehicle) errors.vehicle = 'Campo obligatorio';

    return errors
}