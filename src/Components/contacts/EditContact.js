import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContact, updateContact } from '../../Actions/ContactAction';
import shortid from 'shortid'
import { useHistory, useParams } from 'react-router-dom';

function EditContact() {
    let history = useHistory();
    let {id} = useParams();
    
    const contact =  useSelector((state) => state.contact.contact)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);

        }
        dispatch(getContact(id));
    }, [contact])
    
    function onUpdateContact(e){
        e.preventDefault();
        const updated_contact = Object.assign(contact, {
            name:  name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(updated_contact));
        history.push("/");
    }

    
    return (    
        <div className="card">
            <div className="card-header">
                Edit Contact
            </div>
            <div className="card-body">
            
            <form onSubmit = {(e)=> onUpdateContact(e)}>
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
                <button type="submit" className="btn btn-primary">Edit Contact</button>
            </form>
            </div>
        </div>
    )
}

export default EditContact

