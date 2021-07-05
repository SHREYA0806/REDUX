import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_ALL, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../Constants/types"

export const addContact = (contact)=>{
  return{
    type: CREATE_CONTACT,
    payload:contact
  }
}

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload:id,
})

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload:contact,
})

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id,
})


export const selectALLContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
})

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
})

export const deleteALLContact = () => ({
  type: DELETE_ALL,
})


