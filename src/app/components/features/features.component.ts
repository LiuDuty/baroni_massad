import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3>Professores especializados</h3>
            <p>Nossa equipe é composta por professores com pós-graduação lato sensu, mestrado e doutorado</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⏰</div>
            <h3>No seu tempo</h3>
            <p>Acesse os cursos gravados de qualquer lugar e assista às aulas no seu próprio ritmo</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Consultoria e Telerradiologia</h3>
            <p>Consultoria completa em imagem e laudos precisos com profissionais qualificados e suporte online</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 4rem 0;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.07);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.12);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #2c3e50;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .feature-card p {
      color: #6c757d;
      line-height: 1.6;
    }
  `]
})
export class FeaturesComponent {}
