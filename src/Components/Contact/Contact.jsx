import React, {useState} from 'react';
import './Contact.css'

const Contact = () => {
    const [name, getName] = useState(null);
    const [email, getEmail] = useState(null);
    const [phone, getPhone] = useState(null);
    const [objet, getObjet] = useState(null);
    const [message, getMessage] = useState(null);
  
    const values = {
        name,
        email,
        phone, 
        objet,
        message
    };

    console.log(values);
    return (
    <div>
        <h1 className="h1-contact">Formulaire de contact</h1>

        <form className="contact-form">
            <div className="form-contact">
<label htmlFor="name" className="label-contact">
                    Nom et prenom
                </label>
                <input
                className="input-contact" 
                type="text"
                id="name"
                name="name"
                placeholder="Nom et prenom"
                onChange={(e) =>getName(e.target.value)}
                />
<label htmlFor="email" className="label-contact">
                    Adresse mail
                </label>
                <input
                className="input-contact" 
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={(e) =>getEmail(e.target.value)}
                />

<label htmlFor="phone" className="label-contact">
                    Numero Telephone
                </label>
                <input
                className="input-contact" 
                type="text"
                id="phone"
                name="phone"
                placeholder="+123456789"
                onChange={(e) =>getPhone(e.target.value)}
                />

<label htmlFor="name" className="label-contact">
                   Sujet:
                </label>
                <select
                className="select-contact"name="subject" 
                onChange={(e) =>getObjet(e.target.value)}>
                    <option selected>selectionner l'objet de la demande</option>
                    <option value="devis">Devis</option>
                    <option value="question">Question</option>
                    <option value="Autres">Autres</option>
                </select>
<label htmlFor="message" className="label-contact">
                    {' '}
                    Message:
                </label>
                <textarea
                className="message-contact"
                placeholder="Merci de renseigner vos questions"
                id="message"
                cols="20"
                row="10"
                name="message"
                onChange={(e) =>getMessage(e.target.value)}
                ></textarea>

<label className="label-contact">
                    <input type="checkbox" /> En cochant cette case, vous
                    recevez des informations sur les differantes offres
                    </label>
                   <button className ="button-contact" type="submit" value="Envoyer">
                    Envoyer
                   </button>

                
            </div>
        </form>
    </div>
  )
}

export default Contact
