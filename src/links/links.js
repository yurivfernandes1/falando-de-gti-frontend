import React from 'react';
import ReactDOM from 'react-dom';

const data = {
    profile: {
        image: "https://raw.githubusercontent.com/yurivfernandes1/drarobertamoura/refs/heads/main/public/fotos/experi%C3%AAncias.jpeg",
        name: "Dra. Roberta Gomes Moura",
        title: "Cirurgiã Dentista - CRO-56861",
        subtitle: "Harmonização Facial"
    },
    links: [
        {
            title: "Agendar Consulta",
            url: "https://wa.me/5531996590174?text=Olá%20Dra%2C%20encontrei%20seu%20contato%20no%20site%2C%20gostaria%20de%20agendar%20uma%20consulta.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/dra.robertagmoura/",
            icon: "fab fa-instagram"
        },
        {
            title: "Meu Site",
            url: "https://drarobertamoura.com.br",
            icon: "fas fa-globe"
        }
    ]
};

const Profile = ({ profile }) => (
    <div className="profile">
        <img id="profile-img" src={profile.image} alt="Foto de Perfil" />
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.subtitle}</p>
    </div>
);

const Links = ({ links }) => (
    <div className="links">
        {links.map((link, index) => (
            <a key={index} href={link.url} className="link-item" target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
                <span>{link.title}</span>
            </a>
        ))}
    </div>
);

const App = () => (
    <div className="container">
        <Profile profile={data.profile} />
        <Links links={data.links} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
