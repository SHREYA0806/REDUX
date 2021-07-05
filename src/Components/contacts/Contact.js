import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'
import { clearAllContact, deleteALLContact, deleteContact, selectALLContact } from '../../Actions/ContactAction';

function Contact() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact.contacts);
    const Selected_contacts = useSelector((state) => state.contact.selectedContacts)
    const [selectAll, setselectAll] = useState(false);
    useEffect(()=>{
        if(selectAll){
            dispatch(selectALLContact(contacts.map(contact => contact.id)))
        }else if(!selectAll){
            dispatch(clearAllContact())
        }
    },[selectAll])
   
    console.log(contacts);
     

    return (

        <div>

            {
                Selected_contacts.length > 0 ? (<button onClick={()=>{
                    dispatch(deleteALLContact())
                }}className="btn btn-danger mb-3">Delete All</button>):null
            }
            <table className="table">
                <thead>
                    <tr>
                    <th>
                        <div className="custome-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" value={selectAll}  onClick={()=>setselectAll(!selectAll)} />
                            <label className="custom-control-input"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>{
                       return (
                        <tr>
                            <td>
                                <div className="custome-control custom-checkbox">
                                    <input  type="checkbox" className="custom-control-input" checked={selectAll} />
                                    <label  className="custom-control-input"></label>
                                </div>
                            </td>
                            
                            <td><Avatar name={contact.name} size="45" round={true} className="marginRight"  ></Avatar>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td><Link to={`/contacts/edit/${contact.id}`}><span className="material-icons">edit</span></Link></td>
                            <td><Link><span className="material-icons" onClick={()=>{dispatch(deleteContact(contact.id))}}>remove_circle </span></Link> </td>
                        </tr>)
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default Contact
