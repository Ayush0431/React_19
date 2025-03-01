import React, { useState } from 'react';
import './index.css';

export const Contact=()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const LoginData={
            name,
            email,
            message
        }
        console.log(LoginData)
    }


    return (

        <>
        <div>
            <h1>Contact Form </h1>
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text"
                 name="username"
                 placeholder='enter your username'
                 value={name}
                 autoComplete='off' 
                 required 
                 onChange={(event)=>setName(event.target.value)}  />

                 <label htmlFor='email'> Email</label>
                 <input type='email'
                 name="email"
                 placeholder='enter your email'
                 required
                 autoComplete='off'
                 value={email} 
                 onChange={(event)=>setEmail(event.target.value)}/>

                 <label htmlFor='message'> Message</label>
                 <input type='text'
                 name="message"
                 placeholder='enter your message'
                 required
                 autoComplete='off'
                 value={message}
                 onChange={(event)=>setMessage(event.target.value)} />

                 <button type='submit' >Submit</button>
                
 
            </form>
        </div>
    </div>
        </>
    )
}
{/* <label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
<label htmlFor="message">Message:</label>
<textarea id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} />
<button type="submit">Submit</button> */}