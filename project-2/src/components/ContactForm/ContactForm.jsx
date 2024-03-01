import styles from './ContactForm.module.css';
import Button from "../Button/Button";
import {MdMessage} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("Anshu");
    const [email, setEmail] = useState("support@dosomecoding.com");
    const [text, setText] = useState("Subscribe to this channel");

    const onViaCallSubmit=()=>
    {
           console.log("I am from call");
    }

    const onSubmit=(event)=>
    {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
                
    }
  return (
    <div>
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>

                </div>
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='Email'>Email</label>
                        <input type="email" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='text'>Text</label>
                        <textarea type="text" name="text" rows="8"/>
                    </div>
                    <div className={styles.submit}>
                    <Button text="Submit"/>
                    </div>
                    <div>
                    {name +" " + email + " "  + text}
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contactimage"/>
            </div>
        </section>
      
    </div>
  )
}

export default ContactForm
