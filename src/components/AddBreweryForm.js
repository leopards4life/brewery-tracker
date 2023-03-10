import React, { useState } from "react";

function AddBreweryForm() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            name,
            city,
            state
        };
        fetch("")
    }

    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            className="add-brewery-form">
                <input 
                type="text"
                name="name"
                placeholder="Brewery Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <br />
                <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}/>
                <br />
                <input
                type="text"
                name="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}/>
                <br />
                <button>Add New Favorite Brewery</button>
            </form>
        </div>
    )
}

export default AddBreweryForm;