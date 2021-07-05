import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../Actions/ContactAction';
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';
function AddContact() {
    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    function createContact(e){

        e.preventDefault();
            console.log("name",name);
            console.log("phone",phone);
            console.log("email",email);
            const newContact = {
                id: shortid.generate(),
                name: name,
                phone: phone,
                email:email
            }
            dispatch(addContact(newContact));
            history.push("/")
    }
    return (    
        <div className="card">
            <div className="card-header">
                Add a Contact
            </div>
            <div className="card-body">
            
            <form >
                <div className="mb-3">
                    
                    <input type="text" onChange={(e)=>{
                        setName(e.target.value);
                    }} placeholder="enter contact's name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name}/>
                </div>
                <div className="mb-3">
                    <input type="text" onChange={(e)=>{
                        setPhone(e.target.value);
                    }} placeholder="enter contact's Phone number" className="form-control" id="exampleInputPassword1" value={phone} />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={(e)=>{
                        setEmail(e.target.value);
                    }} placeholder="enter contact's Email ID" className="form-control" id="exampleInputPassword1" value={email} />
                </div>
                <button type="submit" onClick={createContact} className="btn btn-primary">Add Contact</button>
            </form>
            </div>
        </div>
    )
}

export default AddContact
