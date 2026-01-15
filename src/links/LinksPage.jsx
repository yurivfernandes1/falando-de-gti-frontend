import React, { useEffect } from 'react';
import gsap from 'gsap';
import './style.css';

const data = {
    profile: {
        image: "https://github.com/yurivfernandes1/app-pecas-compativeis/blob/main/logo/Perfil%201.png?raw=true",
        name: "Falando de GTI",
        title: "O melhor conteúdo sobre Golf GTI e outros esportivos da Volkswagen",
        subtitle: "Acesse nossos links oficiais"
    },
    links: [
        {
            title: "App Peças Compatíveis MK3",
            url: "https://app.falandodegti.com.br",
            icon: "fas fa-mobile-alt"
        },
        {
            title: "Canal no YouTube",
            url: "https://www.youtube.com/falandodegti?sub_confirmation=1",
            icon: "fab fa-youtube"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/falandodegti",
            icon: "fab fa-instagram"
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/falandodegti",
            icon: "fab fa-facebook"
        },
        {
            title: "Links da Shopee",
            url: "./shopee.html",
            icon: "fas fa-shopping-bag",
            className: "link-shopee"
        }
    ]
};

const LinksPage = () => {
    useEffect(() => {
        // Configurar elementos para começarem invisíveis
        gsap.set('.container', { opacity: 0 });
        gsap.set('.profile img', { opacity: 0, scale: 0.8 });
        gsap.set('.profile h1, .profile h2, .profile p', { opacity: 0, y: 20 });
        gsap.set('.links a', { opacity: 0, y: 20 });

        // Timeline para controlar a sequência de animações
        const tl = gsap.timeline();

        // Animar container primeiro
        tl.to('.container', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
        // Animar foto do perfil
        .to('.profile img', {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        // Animar textos do perfil
        .to('.profile h1, .profile h2, .profile p', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out'
        })
        // Animar links
        .to('.links a', {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }, []);

    return (
        <div className="container">
            <div className="profile">
                <img id="profile-img" src={data.profile.image} alt="Falando de GTI Logo" />
                <h1>{data.profile.name}</h1>
                <h2>{data.profile.title}</h2>
                <p>{data.profile.subtitle}</p>
            </div>
            <div className="links">
                {data.links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        className={`link-item ${link.className || ''}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className={link.icon}></i>
                        <span>{link.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LinksPage;
