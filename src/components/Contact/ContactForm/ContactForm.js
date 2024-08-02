import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="form_container">
            <form
                className="form"
                action="https://formspree.io/f/xblroyqd"
                method="POST"
            >
                <div className="input">
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="name"
                    />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="input">
                    <input
                        required
                        autoComplete="off"
                        name="email"
                        type="email"
                        id="email"
                    />
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="input">
                    <textarea
                        required
                        cols="30"
                        rows="2"
                        id="message"
                        name="message"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="submit-btn">
                    Send message →
                </button>
            </form>
        </div>
    );
};

export default ContactForm;