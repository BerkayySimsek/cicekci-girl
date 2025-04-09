import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '30px auto', padding: '20px', textAlign: 'center' }}>
            <h1>Hakkımızda</h1>
            <p style={{ fontSize: '18px', color: '#555' }}>
                Çiçekçi Girl olarak, kaliteli ve taze çiçekleri en uygun fiyatlarla sizlere sunmayı amaçlıyoruz. 2005 yılında kurulan dükkanımız, her yaştan ve her bütçeden müşteriye hitap etmektedir. Amacımız, insanların duygularını en güzel şekilde ifade edebilecekleri çiçek aranjmanlarını sizlerle buluşturmak.
            </p>

            <h2 style={{ marginTop: '30px' }}>Misyonumuz</h2>
            <p style={{ fontSize: '16px', color: '#555' }}>
                Misyonumuz, taze ve kaliteli çiçeklerle insanların özel anlarını unutulmaz kılmak ve her türlü etkinlik için estetik ve anlamlı aranjmanlar sunmaktır. Müşterilerimize güvenilir ve hızlı bir hizmet sunarak onların memnuniyetini en üst seviyeye çıkarmayı hedefliyoruz.
            </p>

            <h2 style={{ marginTop: '30px' }}>Vizyonumuz</h2>
            <p style={{ fontSize: '16px', color: '#555' }}>
                Vizyonumuz, tüm Türkiye'de tanınan bir çiçek markası olmak ve her müşterimizin ihtiyaçlarına uygun yaratıcı çözümler sunmaktır. Çiçek ve bitki sektöründe sürekli yenilikçi ve lider bir firma olmak için çalışıyoruz.
            </p>

            <h2 style={{ marginTop: '30px' }}>Hizmetlerimiz</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Düğün, nişan ve etkinlik çiçek düzenlemeleri</li>
                <li style={{ marginBottom: '10px' }}>• Anlamlı hediye çiçekleri</li>
                <li style={{ marginBottom: '10px' }}>• Taze çiçek ve bitki satışları</li>
                <li style={{ marginBottom: '10px' }}>• Özel siparişle çiçek aranjmanları</li>
                <li style={{ marginBottom: '10px' }}>• Anlamlı mesajlar için çiçekli tebrik kartları</li>
            </ul>

            <h2 style={{ marginTop: '30px' }}>Bizi Tercih Etmeniz İçin Nedenler</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Kaliteli ve taze çiçekler</li>
                <li style={{ marginBottom: '10px' }}>• Hızlı ve güvenilir teslimat</li>
                <li style={{ marginBottom: '10px' }}>• Müşteri memnuniyeti garantisi</li>
                <li style={{ marginBottom: '10px' }}>• Yaratıcı ve estetik aranjmanlar</li>
            </ul>
        </div>
    );
};

export default AboutPage;
