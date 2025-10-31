import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Em breve!!!</div>
          <h1 class="hero-title">Nova Pós-Graduação em Diagnóstico por Imagem</h1>
          <p class="hero-subtitle">
            Especialize-se em radiodiagnóstico veterinário com os melhores professores do Brasil
          </p>
          <div class="hero-cta">
            <a href="#cursos" class="btn-primary">Ver Cursos</a>
            <a href="#servicos" class="btn-secondary">Nossos Serviços</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 5rem 0;
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 2.5rem;
      opacity: 0.95;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .btn-primary {
      background: white;
      color: #667eea;
    }

    .btn-secondary {
      background: rgba(255,255,255,0.2);
      color: white;
      border: 2px solid white;
    }

    .btn-primary:hover, .btn-secondary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 0;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }
    }
  `]
})
export class HeroComponent {}
