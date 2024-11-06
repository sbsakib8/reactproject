import React, { useState } from 'react'

function Form() {

    const [formobj , setform] = useState(
        {
            Email:"",
            Pass:"",
            Address:"",
            Address2:"",
            City:"",
            State:"",
            Zip:"",
            Chacked:''

        }

    )

const inputobj = (proparty, value)=>{
    setform((proparobj)=>({
       ...proparobj,
       [proparty]:value
    }))
}
     




  return (
    <div className=''>
        <form className="row g-3 mt-5 px-5">
           
  <div className="col-md-5">
    <label for="inputEmail4" className="form-label text-white">Email</label>
    <input onChange={(e)=>inputobj('Email', e.target.value)} value={formobj.Email} type="email" className="form-control" id="inputEmail4"/>
  </div>

  <div className="col-md-5">
    <label for="inputPassword4" className="form-label  text-white">Password</label>
    <input onChange={(e)=>inputobj('Pass', e.target.value)} value={formobj.Pass} type="password" className="form-control" id="inputPassword4"/>
  </div>

  <div className="col-10">
    <label for="inputAddress" className="form-label  text-white">Address</label>
    <input onChange={(e)=>inputobj('Address', e.target.value)}  value={formobj.Address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div className="col-10">
    <label for="inputAddress2" className="form-label  text-white">Address 2</label>
    <input onChange={(e)=>inputobj('Address2', e.target.value)}  value={formobj.Address2} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>

  <div className="col-md-4">
    <label for="inputCity" className="form-label  text-white">City</label>
    <input onChange={(e)=>inputobj('City', e.target.value)}  value={formobj.City} type="text" className="form-control" id="inputCity"/>
  </div>

  <div className="col-md-4">
    <label for="inputState" className="form-label  text-white">State</label>
    <select onChange={(e)=>inputobj('State', e.target.value)}  value={formobj.State} id="inputState" className="form-select">
      <option value=''>Choose</option>
      <option value='Dhaka'>Dhake</option>
      <option value='Gazipur'>Gazipur</option>
      <option value='Rashahi'>Rashahi</option>
    </select>
  </div>


  <div className="col-md-2">
    <label for="inputZip" className="form-label  text-white">Zip</label>
    <input onChange={(e)=>inputobj('Zip', e.target.value)}   value={formobj.Zip} type="text" className="form-control" id="inputZip"/>
  </div>


  <div className="col-12">
    <div className="form-check">
      <input checked={formobj.Chacked} className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label  text-white" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-10">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
        </form>
    </div>
  )
}

export default Form