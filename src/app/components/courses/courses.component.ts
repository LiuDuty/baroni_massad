import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="courses" id="cursos">
      <div class="container">
        <h2 class="section-title">Cursos em destaque</h2>
        <div class="courses-grid">
          @for (course of courses; track course.id) {
            <div class="course-card">
              <div class="course-image">
                <img [src]="course.imageUrl" [alt]="course.title">
                @if (course.bonus) {
                  <div class="course-bonus">{{ course.bonus }}</div>
                }
              </div>
              <div class="course-content">
                <div class="course-header">
                  <h3>{{ course.title }}</h3>
                  <span class="course-level">{{ course.level }}</span>
                </div>
                <p class="course-description">{{ course.description }}</p>
                <ul class="course-features">
                  @for (feature of course.features; track feature) {
                    <li>{{ feature }}</li>
                  }
                </ul>
                <div class="course-footer">
                  <div class="course-price">R$ {{ course.price }}</div>
                  <button class="btn-add-cart">Adicionar ao carrinho</button>
                </div>
                <div class="course-update">Última atualização {{ course.lastUpdate }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .courses {
      padding: 5rem 0;
      background: white;
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

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2.5rem;
    }

    .course-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .course-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    .course-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .course-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .course-bonus {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #f39c12;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.85rem;
    }

    .course-content {
      padding: 1.5rem;
    }

    .course-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .course-header h3 {
      font-size: 1.4rem;
      color: #2c3e50;
      font-weight: 700;
      margin: 0;
      flex: 1;
    }

    .course-level {
      background: #3498db;
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .course-description {
      color: #6c757d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .course-features {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .course-features li {
      padding: 0.5rem 0;
      color: #495057;
      position: relative;
      padding-left: 1.5rem;
    }

    .course-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }

    .course-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid #e9ecef;
      margin-bottom: 0.5rem;
    }

    .course-price {
      font-size: 1.8rem;
      font-weight: 800;
      color: #27ae60;
    }

    .btn-add-cart {
      background: #3498db;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    .btn-add-cart:hover {
      background: #2980b9;
    }

    .course-update {
      font-size: 0.85rem;
      color: #95a5a6;
    }

    @media (max-width: 768px) {
      .courses-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CoursesComponent {
  private dataService = inject(DataService);
  courses = this.dataService.getCourses();
}
