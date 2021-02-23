import React from "react"

const ContactCard = (props ) => {
    return (
        <div className="todo-item">
             <div className="contact-card">
                <h3>{props.contact.name}</h3>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
        </div>
    )
}
export default ContactCard;