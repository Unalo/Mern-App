import React from "react"

const ContactCard = (props) => {
    console.log(props);
    return (
        <div>
            <div className="contact-card">
                <img src={props.contact.imgUrl} />
                <h3> name: {props.contact.name} </h3>
                <p>Phone:{props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}
export default ContactCard;