import { Injectable, signal } from '@angular/core';
import { Course } from '../models/course.model';
import { Service } from '../models/service.model';
import { FAQ } from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private courses = signal<Course[]>([
    {
      id: 4,
      title: 'Radiodiagnóstico Veterinário',
      description: 'Venha aprender tudo sobre radiologia veterinária. Curso 100% online com aulas teóricas e discussão de casos.',
      fullDescription: 'Venha aprender tudo sobre radiologia veterinária. Curso 100% online com aulas teóricas e discussão de casos, interpretação de imagens radiográficas e anatomia radiográfica em paralelo com tomografia computadorizada.',
      level: 'Avançado',
      price: 1656,
      imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800',
      lastUpdate: '04/07/2025',
      bonus: '+ 1 CURSO DE BÔNUS',
      features: [
        'Identificação da anatomia radiográfica por tomografia computadorizada',
        'Interpretação de alterações radiológicas',
        'Raciocínio clínico para elaboração de laudos radiográficos',
        'Habilidades de comunicação profissional'
      ],
      instructors: []
    },
    {
      id: 8,
      title: 'Curso Individual de Tomografia Computadorizada',
      description: 'Um formato único de curso com os professores só para você, médico veterinário que já quer ingressar na tomografia computadorizada.',
      fullDescription: 'Um formato único de curso com os professores só para você, médico veterinário que já quer ingressar na tomografia computadorizada. Conteúdo totalmente interativo e individual.',
      level: 'Avançado',
      price: 9840,
      imageUrl: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800',
      lastUpdate: '04/07/2025',
      features: [
        'Execução de exames de tomografia computadorizada em cães e gatos',
        'Interpretação de imagens de TC',
        'Elaboração de laudos radiológicos para tomografia computadorizada',
        'Aplicação da TC no diagnóstico de doenças específicas'
      ],
      instructors: []
    }
  ]);

  private services = signal<Service[]>([
    {
      id: 18,
      title: 'Telerradiologia',
      description: 'A Baroni-Massad oferece para todo o país o serviço de Telerradiologia Veterinária para exames radiográficos e tomográficos com profissionais qualificados e constantemente inseridos em Pós Graduação, Congressos, Eventos, Grupo de Estudos e Discussão de Casos interessantes.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
    },
    {
      id: 23,
      title: 'Consultoria em Imagem',
      description: 'A Baroni-Massad oferece os serviços de Consultoria para exames radiográficos e por tomografia computadorizada em medicina veterinária com profissionais qualificados. Se você tem uma clínica ou hospital veterinário e pretende instalar um centro de diagnóstico por imagem, com certeza irá precisar de um serviço de consultoria.',
      imageUrl: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800'
    }
  ]);

  private faqs = signal<FAQ[]>([
    {
      id: 1,
      question: 'Como funcionam os cursos da baroni-massad?',
      answer: 'Os cursos são divididos em online gravados, online ao vivo, online ao vivo e gravados, híbridos (parte online e parte presencial) e os presenciais.',
      isOpen: false
    },
    {
      id: 2,
      question: 'Quem pode fazer os cursos da baroni-massad?',
      answer: 'Alunos de medicina veterinária e médicos veterinários.',
      isOpen: false
    },
    {
      id: 3,
      question: 'Qual a forma de pagamento dos cursos?',
      answer: 'Pix e cartão',
      isOpen: false
    },
    {
      id: 4,
      question: 'Como funciona a política de reembolso?',
      answer: 'O reembolso será proporcional ao número de aulas assistidas.',
      isOpen: false
    },
    {
      id: 5,
      question: 'Existe matrícula para os cursos da baroni-massad?',
      answer: 'Para se inscrever nos cursos da baroni-massad basta acessar o curso, clicar em link de pagamento e pronto, não cobramos matrícula em nossos cursos.',
      isOpen: false
    },
    {
      id: 6,
      question: 'Os cursos da baroni-massad tem certificado?',
      answer: 'Sim. todos os cursos tem emissão de certificado.',
      isOpen: false
    },
    {
      id: 7,
      question: 'Como funciona a telerradiologia da baroni-massad?',
      answer: 'A telerradiologia é oferecida para exames radiográficos e de tomografia computadorizada veterinária de todas as espécies. oferecemos laudos e treinamentos. para mais informações, consulte nossa equipe.',
      isOpen: false
    }
  ]);

  getCourses() {
    return this.courses();
  }

  getServices() {
    return this.services();
  }

  getFAQs() {
    return this.faqs();
  }
}
