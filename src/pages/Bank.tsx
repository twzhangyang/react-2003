import { useSelector } from "react-redux";
import React from "react";
import CreateCustomer from "../components/bank/customers/components/CreateCustomer";
import Customer from "../components/bank/customers/components/Customer";

function App() {
    const fullName = useSelector((state: any) => state.customer.fullName);

    return (
        <div>
            <h1>🏦 The React-Redux Bank ⚛️</h1>
            {fullName === "" ? (
                <CreateCustomer />
            ) : (
                <>
                    <Customer />
                    {/*<AccountOperations />*/}
                    {/*<BalanceDisplay />*/}
                </>
            )}
        </div>
    );
}

export default App;
