import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" id="login">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Baroni<span>Massad</span></h3>
            <p>Educação de excelência em diagnóstico por imagem veterinária</p>
          </div>
          <div class="footer-section">
            <h4>Entrar com sua conta</h4>
            <a href="#" class="btn-login">Acessar</a>
          </div>
          <div class="footer-section">
            <h4>Ainda não tem cadastro?</h4>
            <a href="#" class="btn-signup">Quero me cadastrar</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Baroni-Massad. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2c3e50;
      color: white;
      padding: 3rem 0 1rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .footer-section h3 span {
      color: #3498db;
    }

    .footer-section h4 {
      color: #ecf0f1;
      margin-bottom: 1rem;
    }

    .footer-section p {
      color: #bdc3c7;
      line-height: 1.6;
    }

    .btn-login, .btn-signup {
      display: inline-block;
      background: #3498db;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }

    .btn-signup {
      background: #27ae60;
    }

    .btn-login:hover {
      background: #2980b9;
    }

    .btn-signup:hover {
      background: #229954;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .footer-bottom p {
      color: #95a5a6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
