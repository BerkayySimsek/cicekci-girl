import React from 'react';

const ContactInfo = () => {
    return (
        <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3 style={{ marginBottom: '20px' }}>İletişim Bilgilerimiz</h3>

            <div style={{ marginBottom: '15px' }}>
                <strong>Telefon:</strong>
                <p style={{ margin: '5px 0' }}>538 488 25 50</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <strong>E-posta:</strong>
                <p style={{ margin: '5px 0' }}>info@cicekcigirl.com</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <strong>Adres:</strong>
                <p style={{ margin: '5px 0' }}>Çiçek Sokak, No: 23, Şişli, İstanbul, Türkiye</p>
            </div>

            <h3 style={{ marginBottom: '20px' }}>Mağaza Konumumuz</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.314952209984!2d28.978358215346906!3d41.00823797921003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabc8f8b73ad1d%3A0x7e8cf634158ac9f4!2sSultanahmet%2C%20Sultanahmet%20Square%2C%20Istanbul%2C%20Turkey!5e0!3m2!1str!2sus!4v1588795794870!5m2!1str!2sus"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '5px' }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default ContactInfo;
