import './ContactForm.css'


const ContactForm = () => {
    return (
        <div className="rounded-lg overflow-hidden">
            <div className="flex justify-center items-center px-6 py-8 sm:px-10 sm:py-10">

                <form className="form">
                    <ul className="wrapper">

                        <li className="list-item" style={{ '--i': 4 }}><input className="input" type="text" placeholder="Name" required /></li>
                        <li className="list-item" style={{ '--i': 3 }}><input className="input" type="email" placeholder="E-mail" required name="email" /></li>

                        <li className="message_list list-item" style={{ '--i': 2 }}><textarea className="input message_input" required placeholder="Message" name="message"></textarea></li>

                        <button className="list-item" style={{ '--i': 1 }}>Submit</button>
                    </ul>
                </form>



            </div>
        </div>
    )
}

export default ContactForm
