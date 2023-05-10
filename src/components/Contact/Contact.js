import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <>
        <div className='mainDiv'>
            <form>
                <div class="mx-3 my-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 mx-3">
                    <label for="exampleInputPassword1" class="form-label d-block">Your Message</label>
                    <textarea name="message" id="msg" cols="70" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-danger mx-3 mb-3">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Contact