import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FAQ } from '../../models/faq.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="faq" id="faq">
      <div class="container">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <div class="faq-list">
          @for (faq of faqs(); track faq.id) {
            <div class="faq-item" [class.active]="faq.isOpen">
              <div class="faq-question" (click)="toggleFaq(faq)">
                <h3>{{ faq.question }}</h3>
                <span class="faq-icon">{{ faq.isOpen ? '−' : '+' }}</span>
              </div>
              @if (faq.isOpen) {
                <div class="faq-answer">
                  <p>{{ faq.answer }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq {
      padding: 5rem 0;
      background: white;
    }

    .container {
      max-width: 900px;
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

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background: white;
      border: 2px solid #e9ecef;
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s;
    }

    .faq-item.active {
      border-color: #3498db;
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.1);
    }

    .faq-question {
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .faq-question:hover {
      background: #f8f9fa;
    }

    .faq-question h3 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 600;
      color: #2c3e50;
      flex: 1;
      padding-right: 1rem;
    }

    .faq-icon {
      font-size: 1.5rem;
      font-weight: 700;
      color: #3498db;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e3f2fd;
      border-radius: 50%;
    }

    .faq-answer {
      padding: 0 1.5rem 1.5rem 1.5rem;
      animation: slideDown 0.3s ease;
    }

    .faq-answer p {
      color: #6c757d;
      line-height: 1.7;
      margin: 0;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class FaqComponent {
  private dataService = inject(DataService);
  faqs = signal<FAQ[]>(this.dataService.getFAQs());

  toggleFaq(faq: FAQ) {
    this.faqs.update(faqs => 
      faqs.map(f => ({
        ...f,
        isOpen: f.id === faq.id ? !f.isOpen : f.isOpen
      }))
    );
  }
}
