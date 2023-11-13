import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from 'MyModels';

const Customer = () => {

    const customer = useSelector((store: RootState) => store.customer.fullName);
    return (
        <div>
            <h2>Welcome, {customer}</h2>
        </div>
    );
};

export default Customer;
