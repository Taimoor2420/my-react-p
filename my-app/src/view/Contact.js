import React, { useState } from 'react'

const Contact = () => {
  const [count, setCount] = useState("enter your text");
  const fun = () => {
    setCount(count);
  }

  return (
    <div className='container-fluid bgc py-5'>
      <div className='container'>
        <div className='row py-3'>
          <div className='col-12'>
            <h2>CONTACT US</h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-6 bg-dar'>
            <form>
              <div className="row py-5">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
              <div className="row py-2">
                <div className="col">
                  <input type="text" className="form-control" placeholder="E-mail" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group py-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={count} rows="3">textarea</textarea>
              </div>
              <div className='row justify-content-center py-3'>
                <div className='col-2'><button type="button" className="btn btn-primar">Submit</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
