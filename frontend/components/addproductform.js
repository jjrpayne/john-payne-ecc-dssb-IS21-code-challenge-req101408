import React from 'react';
import {useState} from 'react';

const API_URL = 'http://localhost:3000/api/'

export default function AddProductForm({change}) {
    const [productInfo, setProductInfo] = useState({
        productName: "",
        scrumMasterName: "",
        productOwnerName: "",
        numberOfDevs: 1,
        Developers: ["", "", "", "", ""],
        startDate: "",
        methodology: "Agile",
        location: ""
    });

    // make sure all fields are filled before submit is enabled
    const submitEnabled =
        productInfo.productName !== "" &&
        productInfo.scrumMasterName !== "" &&
        productInfo.productOwnerName !== "" &&
        productInfo.startDate !== "" &&
        productInfo.location !== ""
    ;

    // make sure none of the available developer fields are blank
    const submitEnabled2 = 
        productInfo.Developers.slice(0,productInfo.numberOfDevs).every(function (e) {
            return e !== "";
        })
    ;

    const updateDevField = index => e => {
        var newDevs = [...productInfo.Developers];
        newDevs[index] = e.target.value;
        setProductInfo({...productInfo, Developers: newDevs});
    }

    const updateField = e => {
        setProductInfo({...productInfo, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        // prevent the browser from reloading the page
        e.preventDefault();

        console.log(productInfo);

        if (submitEnabled && submitEnabled2){
            const newProductInfo = {
                ...productInfo, 
                Developers: productInfo.Developers.slice(0,productInfo.numberOfDevs),
                startDate: productInfo.startDate.replaceAll("-", "/")
            };

            delete newProductInfo['numberOfDevs'];

            console.log(JSON.stringify(newProductInfo));

            const submitData = async () => {
                try {
                    const response = await fetch(API_URL + "new_product", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(newProductInfo)
                    });
                    const data = await response.json();
                    if(response.status >= 200 && response.status <= 299){
                        change();
                    } else {
                        console.log(data);
                        alert(data[0].message);
                    }
                } catch(err){
                    console.log(err);
                }
            }

            submitData();
            
        } else {
            alert('Please fill all fields before submitting!');
        }

    }

    return(
        <form method="post" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name:
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="productName"
                    value={productInfo.productName}
                    onChange={updateField}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Scrum Master:
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="scrumMasterName"
                    value={productInfo.scrumMasterName}
                    onChange={updateField}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Owner:
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="productOwnerName"
                    value={productInfo.productOwnerName}
                    onChange={updateField}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Number of Developers:
                <select 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="numberOfDevs"
                    value={productInfo.numberOfDevs}
                    onChange={updateField}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Developer Name:
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="devName0"
                    value={productInfo.Developers[0]}
                    onChange={updateDevField(0)}
                />
            </label>
            {productInfo.numberOfDevs > 1 && 
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Developer Name:
                    <input 
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="devName1"
                        value={productInfo.Developers[1]}
                        onChange={updateDevField(1)}
                    />
                </label>
            }
            {productInfo.numberOfDevs > 2 && 
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Developer Name:
                    <input 
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="devName2"
                        value={productInfo.Developers[2]}
                        onChange={updateDevField(2)}
                    />
                </label>
            }
            {productInfo.numberOfDevs > 3 && 
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Developer Name:
                    <input 
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="devName3"
                        value={productInfo.Developers[3]}
                        onChange={updateDevField(3)}
                    />
                </label>
            }
            {productInfo.numberOfDevs > 4 && 
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Developer Name:
                    <input 
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="devName4"
                        value={productInfo.Developers[4]}
                        onChange={updateDevField(4)}
                    />
                </label>
            }
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Start Date: 
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date" 
                    name="startDate"
                    value={productInfo.startDate}
                    onChange={updateField}
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Methodology:
                <select 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="methodology"
                    value={productInfo.methodology}
                    onChange={updateField}
                >
                    <option>Agile</option>
                    <option>Waterfall</option>
                </select>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Location:
                <input 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="location"
                    value={productInfo.location}
                    onChange={updateField}
                />
            </label>
            <button type="submit" className="bg-blue-500 disabled:bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={!(submitEnabled && submitEnabled2)}>Save</button>
        </form>
    );
}