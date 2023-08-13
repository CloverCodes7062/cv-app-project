import { useState } from 'react'
import './PersonalDetailsEditor.css'


function InputsContainer(props) {
    return (<div className='inputs-container'>
        <div className='name-container input-container margin-top'>
            <p>Full Name</p>
            <input type="text" value={props.nameValue} onChange={props.handleChange(props.onNameChange)} className='name-input input-form'></input>
        </div>
        <div className='email-container input-container'>
            <p>Email</p>
            <input type="email" value={props.emailValue} onChange={props.handleChange(props.onEmailChange)} className='email-input input-form'></input>
        </div>
        <div className='phone-number-container input-container'>
            <p>Phone Number</p>
            <input type="tel" value={props.phoneNumberValue} onChange={props.handleChange(props.onPhoneNumberChange)} className='phone-number-input input-form'></input>
        </div>
        <div className='address-container input-container'>
            <p>Address</p>
            <input type="text" value={props.addressValue} onChange={props.handleChange(props.onAddressChange)} className='address-input input-form'></input>
        </div>
    </div>);
}


function PersonalDetailsEditor({ nameValue, onNameChange, emailValue, onEmailChange, phoneNumberValue, onPhoneNumberChange, addressValue, onAddressChange }) {
    const handleChange = (changeFunction) => (event) => {
        changeFunction(event.target.value);
    };

    return (
        <div className='personal-details-container'>
            <h1>Personal Details</h1>
            <InputsContainer 
            nameValue={nameValue} 
            onNameChange={onNameChange} 
            emailValue={emailValue} 
            onEmailChange={onEmailChange} 
            phoneNumberValue={phoneNumberValue} 
            onPhoneNumberChange={onPhoneNumberChange} 
            addressValue={addressValue} 
            onAddressChange={onAddressChange} 
            handleChange={handleChange}
            />
        </div>
    );
}

export default PersonalDetailsEditor