import { useReducer } from "react"
import { BiPlus } from 'react-icons/bi'
import Error from "./Error"
import Success from "./Success"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = () => {
    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(formData).length == 0) return console.log("Don't have Form Data");
        console.log(formData)
    }

    if (Object.keys(formData).length > 0) return <Success message={"Added succesfully!"} />

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" name="firstname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="First Name" />
            </div>
            <div className="input-type">
                <input type="text" name="lastname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Last Name" />
            </div>
            <div className="input-type">
                <input type="date" name="birthday" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Birthday" />
            </div>
            <div className="input-type">
                <input type="text" name="age" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Age" />
            </div>
            <button
                className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Add <span><BiPlus size={25} /></span>
            </button>
        </form>
    )
}

export default Form