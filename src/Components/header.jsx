import React from 'react'
import Form from './Form'

function header() {
   
  return (
    <>
         {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            {/* <!-- Signup form--> */}
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default header