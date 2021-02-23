import React from "react"

const ContactCard = (props ) => {
    console.log(props.contact);
    return (
        <div className="todo-item">
             <div className="contact-card">
                {/* <img src="https://via.placeholder.com/150"/> */}
                <h3>{props.contact.name}</h3>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
        </div>
    )
}
export default ContactCard;