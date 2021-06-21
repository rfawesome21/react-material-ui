import React, {useState} from 'react'
import Confirm from './Confirm'
import FormPersonalDetails from './FormPersonalDetails'
import FormUserDetails from './FormUserDetails'
import Success from './Success'

const UserForm = () => {
    const [details, setDetails] = useState({
        step:1,
        firstName : '',
        lastName : '',
        email : '',
        occupation : '',
        city : '',
        bio : ''
    })
    const nextStep = () => {
        setDetails({
            ...details,
            step : step + 1
        })
    }
    const prevStep = () => {
        setDetails({
            ...details,
            step : step - 1
        })
    }

    const handleChange = (input) => e => {
        setDetails({
            ...details,

            [input] : e.target.value
        })
    }
    const { step } = details
    const { firstName, lastName, email, occupation, city, bio } = details
    const values = { firstName, lastName, email, occupation, city, bio, step }
    switch(step){
        case 1:
            return (
                <div>
                    <FormUserDetails 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                    />
                </div>
            )
        case 2:
            return (
                <FormPersonalDetails 
                nextStep = {nextStep}
                handleChange = {handleChange}
                values = {values}
                prevStep = {prevStep}
                />
            )
        case 3:
            return (
                <Confirm 
                    nextStep = {nextStep}
                    prevStep = {prevStep}
                    values = {values}/>
            )
        case 4:
            return (
                <Success />
            )
        default:
            return  (
                <h1>404 page not found</h1>
                
            )
    }
}

export default UserForm
