import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';

//axios api
import axios from 'axios';

export default function MonthComponent() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    mask="99/99/9999" 
                    placeholder="dd/mm/yyyy" 
                    slotChar="dd/mm/yyyy"
                />
                <b className='m-4'>Tháng</b>
                <InputMask 
                    className='mr-4' 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    mask="99/99/9999" 
                    placeholder="dd/mm/yyyy" 
                    slotChar="dd/mm/yyyy"
                />
                <Button label="Tìm kiếm" className="surface-50 text-color" />
            </div>
        </form>
    );
}