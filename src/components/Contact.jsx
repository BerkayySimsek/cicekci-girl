import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('İsim:', name);
        console.log('E-posta:', email);
        console.log('Mesaj:', message);

        setIsSubmitted(true);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>İletişime Geçin</h2>
            {isSubmitted ? (
                <p>Mesajınız başarıyla gönderildi! En kısa zamanda size geri döneceğiz.</p>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Adınız:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-posta:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Mesajınız:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '150px' }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Gönder
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
