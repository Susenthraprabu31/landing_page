import React, {useState} from 'react'

function form() {

    //state to store email input value
    const [email, setEmail] = useState('');

    //function to handle changes in the email input
    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    // Onsubmit alert the submission result
    let handleSubmit = (event) => {
        event.preventDefault();
        window.alert(`Email submitted successfully: ${email}`)
    }

    return (
        <>
            {/* Signup form */}
            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
                {/* <!-- Email address input--> */}
                <div className="row">
                    <div className="col">
                        <input className="form-control form-control-lg" id="emailAddress" type="email" onChange={handleChange} placeholder="Email Address" data-sb-validations="required,email" required />
                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                    </div>
                    <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                </div>
            </form>
        </>
    )
}

export default form