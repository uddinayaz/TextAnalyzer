import React from 'react'

export default function About() {
  // let myStyle={
  //   color: props.mode==='dark'?'white':'#042743',
  //   backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
  
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Username/Password not working
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      If your username or password is not working, please follow the steps below: Double-check if you are inputting the correct username/password. If the username/email address is correct, click on Forgot your password? link to change your current password. Check your email inbox: we will send you a password resent link Click on the password resent link Enter new password and submit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How to sign into the system?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      To Sign into your account, follow the steps below: Click on Sign in from the Authen website Enter your email address and password in the correct fields  Click on the Sign in button.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How to 'Add another Field' in the 'Carbon Calculation' platform
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {/* If your username or password is not working, please follow the steps below:
      <li>Double-check if you are inputting the correct username/password.</li>
      <li>If the username/email address is correct, click on Forgot your password? link to change your current password.</li>
      <li>Check your email inbox: we will send you a password resent link</li>
      <li>Click on the password resent link</li>
      <li>Enter new password and submit</li> */}
      </div>
    </div>
  </div>
</div>
</div>
  )
}
