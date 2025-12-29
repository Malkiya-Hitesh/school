import H1 from '@/app/components/ui/H1'
import React from 'react'

function AdmissionForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('✅ Admission Form Submitted Successfully!')
        e.target.reset()
    }
    return (
        <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-blue-200 to-white font-sans p-30">
            <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-lg border border-indigo-100">

                <H1 data="Admission Form" className="text-center mb-8" />
                <p className="text-center text-gray-600">Please fill all required details carefully</p>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Full Name" type='text' name="fullName" required={true} />
                    <FormInput label="Email Address" type="email" name="email" required={true} />

                    <FormInput label="Mobile Number" type="tel" name="mobileNumber" required={true} />


                    <FormInput label="Date of Birth" type="date" name="dob" required={true} />

                    <FormSelect
                        label="Gender"
                        name="gender"   
                        options={["Male", "Female", "Other"]}
                    />  
                    <FormSelect
                        label="Program Applying For"
                        name="program"
                        options={["Preschool", "Primary School", "Middle School", "High School"]}
                    />


                    <FormInput label="Parent/Guardian Name" name="guardianName" type='text' required={true} />

                    <FormInput label="Parent/Guardian Number" type="tel" name="guardianNumber" required={true} />

                    <FormInput label={'Previous School'} name="previousSchool" type='text' required={false} />
                    <FormInput label="Address" name="address" type='text' required={true} />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 mt-6"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdmissionForm


const FormInput = ({ label, type = 'text', name, required = false }) => {
    return (

    <>
        <label htmlFor={name} className="block mb-1.5 mt-4 text-sm font-bold text-blue-900">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={`Enter your ${label.toLowerCase()}`}
            required={required}
            className="w-full p-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </>
)
}
const FormSelect = ({ label, name, options = [] }) => {
 return (
       <>
        <label htmlFor={name} className="block mb-1.5 mt-4 text-sm font-bold text-blue-900">
            {label}
        </label>
        <select
            id={name}
            name={name}
            required={true}
            className="w-full p-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            <option value="">Select</option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </>
        )
    }