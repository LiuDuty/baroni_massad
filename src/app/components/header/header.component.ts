import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>Baroni<span>Massad</span></h1>
          </div>
          <nav class="nav">
            <a href="#home" class="nav-link">Início</a>
            <a href="#cursos" class="nav-link">Cursos</a>
            <a href="#servicos" class="nav-link">Serviços</a>
            <a href="#faq" class="nav-link">FAQ</a>
            <a href="#login" class="nav-link-btn">Entrar</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 1rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #2c3e50;
      margin: 0;
    }

    .logo span {
      color: #3498db;
    }

    .nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      text-decoration: none;
      color: #2c3e50;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-link:hover {
      color: #3498db;
    }

    .nav-link-btn {
      text-decoration: none;
      background: #3498db;
      color: white;
      padding: 0.6rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.3s;
    }

    .nav-link-btn:hover {
      background: #2980b9;
    }

    @media (max-width: 768px) {
      .nav {
        gap: 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class HeaderComponent {}
