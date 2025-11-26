import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
    const [data, setData] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={data} onChange={(e) => setdata(e.value)} options={cities} optionLabel="tier" 
                placeholder="Select a Tier" className="w-full md:w-14rem" />
        </div>
    )
}
        