import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import axios from 'axios';

export default function YearComponent() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [year, setYear] = useState('');
    const [cities, setCities] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const years = parseInt(value, 10);
        
        // Kiểm tra năm hợp lệ
        if (value.length === 4 && (years >= 1900 && years <= 2099)) {
            setYear(value);
        } else if (value.length < 4 || isNaN(year)) {
            setYear(value);
        }
    };

    const handleSearch = () => {
        console.log("Selected city:", selectedCity);
        console.log("Year:", year);
    };

    useEffect(() => {
        const apiUrl = 'https://esgoo.net/api-tinhthanh/1/0.htm';

        axios.get(apiUrl)
            .then((response) => {
                console.log('API response:', response.data);

                // Kiểm tra phản hồi từ API và đặt dữ liệu vào state
                if (response.data.error === 0 && Array.isArray(response.data.data)) {
                    const formattedCities = response.data.data.map(city => ({
                        name: city.name, 
                        id: city.id
                    }));
                    setCities(formattedCities);
                } else {
                    console.error('API error:', response.data.error_text);
                }
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
                    value={year} 
                    onChange={handleChange}
                    mask="9999" 
                    placeholder="yyyy" 
                    slotChar="yyyy" 
                    className="w-full md:w-5rem mr-5 text-center"
                />
                <Button label="Tìm kiếm" className="surface-50 text-color" onClick={handleSearch} />
            </div>
        </form>
    );
}
