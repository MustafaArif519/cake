import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBRadio,
  MDBTextArea
} from 'mdb-react-ui-kit';
import './style.css';

export default function CakePage({ updateForm, form }) {
  //const [formValue, setFormValue] = useState(form);

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  // useEffect(() => {
  //   console.log(formValue);
  //   setFormValue(form);
  //   console.log(formValue);
  // }, [form])

  const onChange = (e) => {
    // console.log(formValue);
    updateForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleOptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput(value === 'other');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if an option is selected
    if (!selectedOption) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    console.log('Form submitted!');

  };
  return (
    <>
      {/* {console.log(formValue.name)} */}
      
        <h1>Personal Information</h1>
        <MDBValidation isValidated>
        <div className='section'>
        
          <MDBValidationItem className='field' invalid feedback='ex: Mustafa Arif'>
            <div className="textInputWrapper">
              <MDBInput
                value={form.name}
                name='name'
                onChange={onChange}
                id='validationCustom02'
                required
                label='Full Name'
              />
            </div>
          </MDBValidationItem>

          <MDBValidationItem className='field' invalid feedback='ex: 123-456-7890'>
            <div className="textInputWrapper">
              <MDBInput
                value={form.pNumber}
                name='pNumber'
                onChange={onChange}
                id='validationCustom02'
                required
                label='Phone Number'
              />
            </div>
          </MDBValidationItem>

          
        </div>
        </MDBValidation>

        <h1>Event Information</h1>
        <div className='section'>
        <MDBValidation isValidated>
        <div className='section'>
        
          <div className="radio">
            <h3>Event Type</h3>
            
 
              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault1'
                value="option1"
                defaultChecked={selectedOption === 'option1'}
                onChange={handleOptionChange}
                required 
                label="Wedding"

              />
              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault2'
                value="option1"
                defaultChecked={selectedOption === 'option2'}
                onChange={handleOptionChange}
                required 
                label="Anniversary"

              />
              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault3'
                value="option1"
                defaultChecked={selectedOption === 'option3'}
                onChange={handleOptionChange}
                required 
                label="Graduation"

              />

              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault4'
                value="option2"
                defaultChecked={selectedOption === 'option4'}
                onChange={handleOptionChange}
                required 
                label="Birthday"
              />

<MDBValidationItem invalid feedback='' >
              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault5'
                value="other"
                checked={selectedOption === 'other'}
                onChange={handleOptionChange}
                required 
                label="Other"
              />
</MDBValidationItem>

              {showOtherInput && (
                <MDBValidationItem className='' invalid feedback='ex: Career Promotion' >
                  <div className="">
                    <MDBInput
                      value={form.eventType}
                      name='eventType'
                      onChange={onChange}
                      id='validationCustom04'
                      required
                      label='Other'
                    />
                  </div>
                </MDBValidationItem>
              )}

              

          </div>

          <MDBValidationItem className='field' invalid feedback='ex: 01/04/2020' >
            <div className="textInputWrapper">
              <MDBInput
                value={form.eventDate}
                name='date'
                onChange={onChange}
                id='validationCustom05'
                required
                label='Event Date'
              />
            </div>
          </MDBValidationItem>
          
          
        </div>
        </MDBValidation>
        <MDBValidationItem className='field' invalid feedback='ex: A graduation party celebrating 
                                                                my daughters highschool graduation.' >
          <div className="textInputWrapper">
            <MDBTextArea className=''
              value={form.eventDetails}
              name='eventDetails'
              onChange={onChange}
              id='validationCustom06'
              required
              label='Event Details (Optional)'
              style={{ width: "400px", height: "200px" }}
            />
            </div>
          </MDBValidationItem>
        </div>
    </>

  );
}