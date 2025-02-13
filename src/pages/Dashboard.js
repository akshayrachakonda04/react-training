import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Enter your name'/> <br></br>
        <input type='password' placeholder='Enter Password'/><br></br>
        <input type='mail' placeholder='Enter Mail ID'/><br></br>
        <input type='radio' name='gender'/><label htmlFor=''>Male</label>
        <input type='radio' name='gender'/><label htmlFor=''>Female</label>
        <input type='radio' name='gender'/><label htmlFor=''>Others</label>
        <br></br>
        <textarea name='' id='address' rows='5' cols='40'/> <br></br>

        <select name='' id='country'>
          <option>---Select Country---</option>
          <option value='India'>India</option>
          <option value='Russia'>Russia</option>
        </select> <br></br>
 
        <input type='submit' value='SignUp'/>
      </form>
    </div>
  )
}

export default Dashboard