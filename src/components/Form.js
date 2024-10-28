import React, { useState } from 'react';
import Wallpaper from './Wallpaper';
import '../css/Form.css';
import axios from 'axios';

const countries = [
    'Alemania', 'Afganistán', 'Algeria', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita',
    'Argentina', 'Armenia', 'Austria', 'Australia', 'Bahamas', 'Barbados', 'Bangladesh',
    'Bolivia', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Burkina Faso', 'Burundi',
    'Camerún', 'Canadá', 'Chile', 'China', 'Colombia', 'Costa de Marfil', 'Costa Rica',
    'Cuba', 'Dinamarca', 'Dominica', 'República Dominicana', 'Ecuador', 'Egipto',
    'El Salvador', 'Emiratos Árabes Unidos', 'Eslovenia', 'Eslovaquia', 'España',
    'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Francia', 'Ghana', 'Grecia',
    'Grenada', 'Guatemala', 'Guyana', 'Honduras', 'Hungría', 'India', 'Indonesia',
    'Irán', 'Irlanda', 'Islandia', 'Israel', 'Italia', 'Jamaica', 'Japón',
    'Jordanía', 'Kenia', 'Kuwait', 'Malasia', 'Malawi', 'Malta', 'México',
    'Micronesia', 'Nueva Zelanda', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega',
    'Palau', 'Panamá', 'Paraguay', 'Perú', 'Filipinas', 'Portugal', 'Qatar',
    'República Checa', 'República Democrática del Congo', 'Rumanía', 'Rusia',
    'Rwanda', 'Senegal', 'Sierra Leona', 'Singapur', 'Sri Lanka', 'Sudáfrica',
    'Sudán', 'Surinam', 'Suecia', 'Suiza', 'Tanzania', 'Tailandia', 'Togo',
    'Trinidad y Tobago', 'Turquía', 'Uganda', 'Ucrania', 'Uruguay', 'Venezuela',
    'Vietnam', 'Zambia', 'Zimbabwe'
];

const relationships = [
    'Abuelo', 'Abuela', 'Bisabuelo', 'Bisabuela', 'Esposo', 'Esposa',
    'Hermano', 'Hermana', 'Hijo', 'Hija', 'Madre', 'Padre', 'Primo',
    'Prima', 'Nieto', 'Nieta', 'Sobrino', 'Sobrina', 'Tío', 'Tía',
    'Tatarabuelo', 'Tatarabuela'
];

const Form = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        acronym: '',
        nit: '',
        companyType: '',
        email: '',
        description: '',
        country: '',
        city: '',
        phone: '',
        representativeName: '',
        id: '',
        birthCountry: '',
        birthDate: '',
        representativeEmail: '',
        notificationAddress: '',
        postalCode: '',
        residencyCountry: '',
        residencyCity: '',
        personalPhone: '',
        publicPerson: false,
        publicRecognition: false,
        entityName: '',
        familyPublicPerson: false,
        publicPersonName: '',
        relationship: '',
        totalAssets: '',
        tradingCurrencies: [],
        averageVolume: '',
        foreignOperations: false,
        bankName: '',
        accountType: '',
        accountNumber: '',
        bankCountry: '',
        bankCity: '',
        operationType: '',
        operationCurrency: '',
        originDeclaration: false,
        dataAuthorization: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/form', formData);
            console.log('Formulario enviado:', response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };
    return (
        <div>
            <Wallpaper />
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-section">
                        <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Información de la Empresa
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                                <div style={{ width: '70%', marginRight: '35px' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Nombre de la Empresa*</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                                <div style={{ width: '20%' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Sigla*</label>
                                    <input
                                        type="text"
                                        name="acronym"
                                        value={formData.acronym}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                                <div style={{ width: '30%', marginRight: '35px' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>NIT/EIN*</label>
                                    <input
                                        type="text"
                                        name="nit"
                                        value={formData.nit}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                                <div style={{ width: '30%', marginRight: '35px' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Tipo de Empresa*</label>
                                    <select
                                        name="companyType"
                                        value={formData.companyType}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    >
                                        <option value="" disabled>Seleccione...</option>
                                        <option value="micro">Micro</option>
                                        <option value="mediana">Mediana</option>
                                        <option value="grande">Grande</option>
                                    </select>
                                </div>
                                <div style={{ width: '30%' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <div style={{ width: '100%' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Dirección*</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                                <div style={{ width: '30%', marginRight: '25px' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>País*</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    >
                                        <option value="" disabled>Seleccione...</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ width: '30%', marginRight: '40px' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Ciudad*</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                                <div style={{ width: '30%' }}>
                                    <label style={{ fontSize: '16px', textAlign: 'left' }}>Teléfono de la Empresa*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title" style={{ marginBottom: '20px' }}>Información del Representante Legal</h2>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Nombre Completo*</label>
                                <input
                                    type="text"
                                    name="representativeName"
                                    value={formData.representativeName}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ width: '40%' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>ID/Pasaporte*</label>
                                <input
                                    type="text"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>País de Nacimiento*</label>
                                <select
                                    name="birthCountry"
                                    value={formData.birthCountry}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ width: '30%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Fecha de Nacimiento*</label>
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ width: '40%' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Email*</label>
                                <input
                                    type="email"
                                    name="representativeEmail"
                                    value={formData.representativeEmail}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '80%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Dirección de Notificaciones*</label>
                                <input
                                    type="text"
                                    name="notificationAddress"
                                    value={formData.notificationAddress}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ width: '20%' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Código Postal</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>País de Residencia*</label>
                                <select
                                    name="residencyCountry"
                                    value={formData.residencyCountry}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ width: '30%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Ciudad de Residencia*</label>
                                <input
                                    type="text"
                                    name="residencyCity"
                                    value={formData.residencyCity}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ width: '40%' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Teléfono Personal*</label>
                                <input
                                    type="tel"
                                    name="personalPhone"
                                    value={formData.personalPhone}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>¿Es usted una persona públicamente expuesta?</label>
                            </div>
                            <div style={{ width: '10%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <label>
                                        <input type="radio" name="publicPerson" value="yes" checked={formData.publicPerson === 'yes'} onChange={handleChange} /> Sí
                                    </label>
                                    <label>
                                        <input type="radio" name="publicPerson" value="no" checked={formData.publicPerson === 'no'} onChange={handleChange} /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>¿Goza usted de reconocimiento público?</label>
                            </div>
                            <div style={{ width: '10%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <label>
                                        <input type="radio" name="publicRecognition" value="yes" checked={formData.publicRecognition === 'yes'} onChange={handleChange} /> Sí
                                    </label>
                                    <label>
                                        <input type="radio" name="publicRecognition" value="no" checked={formData.publicRecognition === 'no'} onChange={handleChange} /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '80%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Nombre de la Entidad*</label>
                                <input
                                    type="text"
                                    name="entityName"
                                    value={formData.entityName}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '60%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>¿Es usted familiar de una persona públicamente expuesta?</label>
                            </div>
                            <div style={{ width: '10%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <label>
                                        <input type="radio" name="familyPublicPerson" value="yes" checked={formData.familyPublicPerson === 'yes'} onChange={handleChange} /> Sí
                                    </label>
                                    <label>
                                        <input type="radio" name="familyPublicPerson" value="no" checked={formData.familyPublicPerson === 'no'} onChange={handleChange} /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '80%', marginRight: '10px' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Nombre de la Persona Públicamente Expuesta (PPE)*</label>
                                <input
                                    type="text"
                                    name="publicPersonName"
                                    value={formData.publicPersonName}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ width: '40%' }}>
                                <label className="form-label" style={{ textAlign: 'left' }}>Parentesco con PPE*</label>
                                <select
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleChange}
                                    className="form-select"
                                    style={{ borderRadius: '10px', border: '1px solid #ccc' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    {relationships.map((rel, index) => (
                                        <option key={index} value={rel}>{rel}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Información Financiera de la Empresa
                        </h2>

                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div className="form-group" style={{ width: '30%', marginRight: '20px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Activos Totales*</label>
                                <div style={{ marginTop: '10px' }}>
                                    {['Menos de $500,000', '$500,000 - $1,000,000', '$1,000,000 - $2,000,000',
                                        '$2,000,000 - $5,000,000', '$5,000,000 - $10,000,000', 'Más de $10,000,000'].map((option) => (
                                            <div key={option} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                                <input
                                                    type="checkbox"
                                                    name="totalAssets"
                                                    value={option}
                                                    onChange={handleChange}
                                                />
                                                <label style={{ marginLeft: '5px' }}>{option}</label>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="form-group" style={{ width: '40%', marginRight: '20px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Moneda en la que hace trading</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                                    {['USDT', 'USDC', 'BUSD', 'BNB', 'ETH', 'DAI', 'BTC', 'XRP'].map((currency) => (
                                        <div key={currency} style={{ width: '50%', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="checkbox"
                                                name="tradingCurrency"
                                                value={currency}
                                                onChange={handleChange}
                                            />
                                            <label style={{ marginLeft: '5px' }}>{currency}</label>
                                        </div>
                                    ))}
                                    <div style={{ width: '50%', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="checkbox"
                                            name="tradingCurrency"
                                            value="otro"
                                            onChange={handleChange}
                                        />
                                        <label style={{ marginLeft: '5px' }}>Otro tipo de moneda</label>
                                        <input
                                            type="text"
                                            name="otherTradingCurrency"
                                            value={formData.otherTradingCurrency}
                                            onChange={handleChange}
                                            style={{ marginLeft: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', width: '60%' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group" style={{ width: '30%' }}>
                                <label style={{ fontSize: '16px' }}>Volumen Diario de Trading:</label>
                                <input
                                    type="text"
                                    name="dailyTradingVolume"
                                    value={formData.dailyTradingVolume}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Información Bancaria
                        </h2>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '70%', marginRight: '25px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Nombre del Banco*</label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                            <div style={{ width: '1%' }} />
                            <div style={{ width: '20%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Tipo de Cuenta*</label>
                                <select
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    <option value="ahorros">Ahorros</option>
                                    <option value="corriente">Corriente</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '30%', marginRight: '10px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Número de Cuenta*</label>
                                <input
                                    type="text"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                            <div style={{ width: '10%' }} />
                            <div style={{ width: '30%', marginRight: '10px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>País del Banco*</label>
                                <select
                                    name="bankCountry"
                                    value={formData.bankCountry}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ width: '10%' }} />
                            <div style={{ width: '30%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Código SWIFT*</label>
                                <input
                                    type="text"
                                    name="swiftCode"
                                    value={formData.swiftCode}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Operaciones Internacionales
                        </h2>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '50%', marginRight: '10px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>¿Realiza operaciones en moneda extranjera? *</label>
                            </div>
                            <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                                <input type="radio" name="foreignOperations" value="si" onChange={handleChange} />
                                <label style={{ marginRight: '10px' }}>Sí</label>
                                <input type="radio" name="foreignOperations" value="no" onChange={handleChange} />
                                <label>No</label>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '70%', marginRight: '50px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Nombre del Banco</label>
                                <input
                                    type="text"
                                    name="operationBankName"
                                    value={formData.operationBankName}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                            <div style={{ width: '1%' }} />
                            <div style={{ width: '30%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Tipo de Cuenta</label>
                                <select
                                    name="operationAccountType"
                                    value={formData.operationAccountType || ""}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    <option value="ahorros">Ahorros</option>
                                    <option value="corriente">Corriente</option>
                                </select>
                            </div>

                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '30%', marginRight: '15px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Número de Cuenta</label>
                                <input
                                    type="text"
                                    name="operationAccountNumber"
                                    value={formData.operationAccountNumber}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                            <div style={{ width: '10%' }} />
                            <div style={{ width: '30%', marginRight: '15px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>País del Banco</label>
                                <select
                                    name="operationBankCountry"
                                    value={formData.operationBankCountry || ""}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                >
                                    <option value="" disabled>Seleccione...</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ width: '10%' }} />
                            <div style={{ width: '33%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Ciudad del Banco</label>
                                <input
                                    type="text"
                                    name="operationBankCity"
                                    value={formData.operationBankCity}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '50%', marginRight: '50px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Tipo de Operación</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                                    {['Importación', 'Exportación', 'Préstamos', 'Inversiones', 'Transferencia', 'Pago Servicios'].map((option) => (
                                        <div key={option} style={{ width: '30%', marginRight: '10px', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="checkbox"
                                                name="operationType"
                                                value={option}
                                                onChange={handleChange}
                                            />
                                            <label style={{ marginLeft: '5px' }}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ width: '50%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Moneda de la Operación</label>
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                    {['Dólares', 'Euros'].map((currency) => (
                                        <div key={currency} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="checkbox"
                                                name="operationCurrency"
                                                value={currency}
                                                onChange={handleChange}
                                            />
                                            <label style={{ marginLeft: '5px' }}>{currency}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', marginBottom: '15px' }}>
                            <div style={{ width: '50%', marginRight: '50px' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Otro Tipo de Operación</label>
                                <input
                                    type="text"
                                    name="otherOperationType"
                                    value={formData.otherOperationType}
                                    onChange={handleChange}
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                            <div style={{ width: '50%' }}>
                                <label style={{ fontSize: '16px', textAlign: 'left' }}>Otra Moneda</label>
                                <input
                                    type="text"
                                    name="otherOperationCurrency"
                                    value={formData.otherOperationCurrency}
                                    onChange={handleChange}
                                    style={{ width: '100%', fontSize: '12px', padding: '8px', marginBottom: '5px', border: '1px solid #ccc', borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title">Declaración Origen de Fondos LA/FT/FPADM</h2>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <textarea
                                style={{ width: '100%', height: '900px', overflow: 'visible', resize: 'none', marginTop: '15px' }}
                                readOnly
                                value={`Declaro expresamente que:

1. Que mis recursos (o los recursos de la persona natural o jurídica que represento) provienen de actividades lícitas y están ligados al desarrollo normal de mis/sus actividades, y que, por lo tanto, los mismos no provienen de ninguna actividad ilícita de las contempladas en el Código Penal Colombiano o en cualquier norma que lo sustituya, adicione o modifique.

2. Que yo (o la persona natural o jurídica que represento) no he/ha efectuado transacciones u operaciones consistentes en o destinadas a la ejecución de actividades ilícitas de las contempladas en el Código Penal Colombiano o en cualquier norma que lo sustituya, adicione, o modifique, o a favor de personas que ejecuten o estén relacionadas con la ejecución de dichas actividades.

3. Que los recursos comprometidos para la ejecución del contrato o negocio jurídico acordado con Kii Global S.A.S no provienen de ninguna actividad ilícita de las contempladas en el Código Penal colombiano o en cualquier norma que lo modifique, adicione o sustituya.

4. Que en la ejecución del contrato o el desarrollo de las actividades en que consista el negocio jurídico con Kii Global S.A.S no contrataré ni tendré vínculos de ningún tipo con terceros que realicen operaciones o cuyos recursos provengan de actividades ilícitas de las contempladas en el Código Penal Colombiano o en cualquier norma que lo sustituya, adicione, o modifique.

5. Que la entidad que represento cumple con las normas sobre prevención y control al lavado de activos y financiación del terrorismo (LA/FT) que le resulten aplicables (de ser el caso), teniendo implementados las políticas, procedimientos y mecanismos de prevención y control al LA/FT que se derivan de dichas disposiciones legales.

6. Que ni yo, ni la persona natural o jurídica, ni sus accionistas, asociados o socios, sus representantes legales y miembros de la Junta Directiva, se encuentran en las listas internacionales vinculantes para Colombia de conformidad con el derecho internacional (listas de las Naciones Unidas) o en las listas de la OFAC, estando Kii Global S.A.S facultada para efectuar las verificaciones que considere pertinentes y para dar por terminada cualquier relación comercial o jurídica si verifica que me encuentro o que alguna de las personas mencionadas figura en dichas listas.

7. Que no existe contra mí o la persona natural o jurídica que represento, ni sus accionistas, asociados o socios, sus representantes legales y sus miembros de la Junta Directiva, investigaciones o procesos penales por delitos dolosos, estando Kii Global S.A.S facultado para efectuar las verificaciones que considere pertinentes en bases de datos o informaciones públicas nacionales o internacionales y para dar por terminada cualquier relación comercial o jurídicas, si verifica que yo o alguna de las personas mencionadas tienen investigaciones o procesos, o existen informaciones en dichas bases de datos públicas que puedan colocar a Kii Global S.A.S frente a un riesgo legal o su buen nombre.

8. Que en el evento en que tenga conocimiento de alguna de las circunstancias descritas en los dos párrafos anteriores, me comprometo a comunicarlo de inmediato a Kii Global S.A.S.

9. Que con la firma del presente documento, se entiende que tanto yo como la persona natural o jurídica que represento, otorgamos nuestro consentimiento informado, y por lo tanto autorizamos a Kii Global S.A.S a comunicar a las autoridades nacionales o de cualquiera de los países en los cuales Kii Global S.A.S realice operaciones, sobre alguna cualquiera de las situaciones en este documento descritas, así como a suministrar a las autoridades competentes de dichos países, toda la información personal, pública, privada o semiprivada que sobre mí o sobre la persona natural o jurídica que represento, ellas requieran. Así mismo, para que Kii Global S.A.S efectúe los reportes a las autoridades competentes, que considere procedentes de conformidad con sus reglamentos y manuales relacionados con su sistema de prevención y/o administración del riesgo de lavado de activos y financiamiento del terrorismo, exonerándola de toda responsabilidad por tal hecho.

10. Que toda la documentación e información aportada para la celebración y ejecución del contrato o negocio jurídico con Kii Global S.A.S es veraz y exacta, estando Kii Global S.A.S facultada para efectuar las verificaciones que considere pertinentes y para dar por terminado el contrato o negocio jurídico, si verifica, obtiene conocimiento de que ello no es así.

11. Que ninguna otra persona natural o jurídica, tiene interés no legítimo en el contrato o negocio jurídico que motiva la suscripción de la presente declaración.

12. Qué conozco, declaro y acepto que Kii Global S.A.S está en la obligación legal de solicitar las aclaraciones que estime pertinentes en el evento en que se presenten circunstancias con base en las cuales Kii Global S.A.S pueda tener dudas razonables sobre mis operaciones o las operaciones de la persona natural o jurídica que represento, así como del origen de nuestros activos, evento en el cual suministraremos las aclaraciones que sean del caso. Si estas no son satisfactorias, a juicio de Kii Global S.A.S, la autorizamos para dar por terminada cualquier relación comercial o jurídica.`}
                            />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" name="originDeclaration" checked={formData.originDeclaration} onChange={handleChange} />
                            <label style={{ marginLeft: '8px' }}>Acepto los términos de la declaración de origen *</label>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2 className="section-title">Autorización de Datos</h2>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <textarea
                                style={{ width: '100%', height: '300px', overflow: 'visible', resize: 'none', marginTop: '15px' }}
                                readOnly
                                value={`Acuerdo de tratamiento de datos personales:
                                    
En cumplimiento de la ley estatutaria 1581/2012, por la cual se establece el “régimen General de protección de Datos” y el decreto reglamentario 1377 del 2013, solicitamos respetuosamente su autorización para el tratamiento de sus datos personales.    
                                    
Kii Global S.A.S, sociedad Legalmente constituida, debidamente inscrita en la Cámara de Comercio identificada con NIT: 901.470.651-9 es responsable del tratamiento de mis datos personales por tal motivo:

Declaro de manera libre, expresa e inequívoca, autorizo a Kii Global S.A.S para que en los términos de la ley 1581 de 22012, decreto 1377 de 2013 y demás normas que lo sustituyan o modifiquen y por la cual se dictan las normas generales para la protección de datos personales, realice la recolección, almacenamiento, uso, supresión y en general el tratamiento de mis datos personales, para que directamente o a través de terceros lleve a cabo, entre otras, todas las actividades necesarias para atender las necesidades de servicios, técnicas, operativas, de riesgo o de seguridad que pudieran ser razonablemente aplicables. Incluyendo aquellos datos que pueden llegar a ser considerados como sensibles de conformidad con la Ley. 

Esta autorización permitirá que Kii Global S.A.S, como responsable de mis datos personales, los use para las actividades desarrolladas en el cumplimiento de su objeto, los cuales serán manejados garantizando la seguridad necesaria para impedir su adulteración, perdida, consulta, uso o acceso no autorizado o fraudulento.`}
                            />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" name="dataAuthorization" checked={formData.dataAuthorization} onChange={handleChange} />
                            <label style={{ marginLeft: '8px' }}>Acepto los términos de autorización de datos *</label>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Form;