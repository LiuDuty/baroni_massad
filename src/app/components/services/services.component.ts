import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services" id="servicos">
      <div class="container">
        <h2 class="section-title">Também oferecemos</h2>
        <div class="services-grid">
          @for (service of services; track service.id) {
            <div class="service-card">
              <div class="service-image">
                <img [src]="service.imageUrl" [alt]="service.title">
              </div>
              <div class="service-content">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <a href="#" class="btn-learn-more">Ver mais</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 5rem 0;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 800;
      color: #2c3e50;
      margin-bottom: 3rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .service-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    .service-image {
      height: 220px;
      overflow: hidden;
    }

    .service-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .service-content {
      padding: 2rem;
    }

    .service-content h3 {
      font-size: 1.6rem;
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .service-content p {
      color: #6c757d;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .btn-learn-more {
      display: inline-block;
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.05rem;
      transition: color 0.3s;
    }

    .btn-learn-more:hover {
      color: #2980b9;
    }

    .btn-learn-more::after {
      content: ' →';
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  private dataService = inject(DataService);
  services = this.dataService.getServices();
}
