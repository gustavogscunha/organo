import './Footer.css'
import React from 'react'

    const Footer = () => {
        return (
            <footer className="footer">
                <section className="lista-footer">
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank rel">
                                <img src="/imagens/fb.png" alt="" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://twitter.com" target="_blank rel">
                                <img src="/imagens/tw.png" alt="" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://instagram.com" target="_blank rel">
                                <img src="/imagens/ig.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <img src="/imagens/logo.png" alt="" />
                </section>
                <section>
                    <p>
                        Desenvolvido por Gustavo Soares da Cunha.
                    </p>
                </section>
            </footer>
  )
}

export default Footer

