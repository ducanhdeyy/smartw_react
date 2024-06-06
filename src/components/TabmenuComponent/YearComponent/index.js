import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';

//axios api
import axios from 'axios';

export default function YearComponent() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [value, setValue] = useState(null);

    //api
    const [cities, setCities] = useState([]);


    //get api axios
    useEffect(() => {
        // Fetch cities data from the API
        axios
            .get('')
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            });
    }, []);

    return (
        <form>
            <div className="card-selector justify-content-center pl-4 mt-3">
                <b className='mr-5'>Trung tâm</b>
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    editable
                    placeholder="Select a City"
                    className="w-full md:w-10rem"
                />
                <b className='m-5'>Năm</b>
                <InputMask
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    mask="2024"
                    placeholder="2024"
                    className="w-full md:w-5rem mr-5"
                />
                <Button label="Tìm kiếm" className="surface-50 text-color" />
            </div>
        </form>
    );
}