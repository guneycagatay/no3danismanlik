'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EligibilityTool() {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 'age',
      title: 'Yaşınız kaç?',
      options: [
        { label: '18 - 35', points: 2, icon: '🎂' },
        { label: '35 - 40', points: 1, icon: '⏳' },
        { label: '40+', points: 0, icon: '🗓️' }
      ]
    },
    {
      id: 'education',
      title: 'Eğitim durumunuz nedir?',
      options: [
        { label: 'Lisans Mezunu (4+ Yıl)', points: 3, icon: '🎓' },
        { label: 'Ön Lisans / MYO', points: 2, icon: '📜' },
        { label: 'Mesleki Eğitimli', points: 1, icon: '🏷️' },
        { label: 'Diğer', points: 0, icon: '❓' }
      ]
    },
    {
      id: 'experience',
      title: 'Alanınızda kaç yıl tecrübeniz var?',
      options: [
        { label: '5 Yıl ve Üzeri', points: 3, icon: '💼' },
        { label: '2 - 5 Yıl', points: 2, icon: '🛠️' },
        { label: '0 - 2 Yıl', points: 1, icon: '🌱' }
      ]
    },
    {
      id: 'language',
      title: 'Yabancı dil seviyeniz nedir?',
      options: [
        { label: 'Almanca B1+ / İngilizce C1+', points: 3, icon: '🗣️' },
        { label: 'Almanca A2 / İngilizce B2', points: 2, icon: '📖' },
        { label: 'Dil bilgim çok az / Yok', points: 0, icon: '🔇' }
      ]
    },
    {
      id: 'discipline',
      title: 'No3 Ciddiyet Taahhüdü',
      description: '"Disiplinli olmayan ve süreci ciddiye almayan kişilerle çalışmıyoruz." Bu yoğun sürece tam odaklanmaya hazır mısınız?',
      options: [
        { label: 'Evet, Hazırım', points: 1, icon: '🛡️' },
        { label: 'Emin Değilim', points: -5, icon: '🤔' }
      ]
    }
  ];

  const handleAnswer = (points) => {
    setScore(score + points);
    setStep(step + 1);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStep(7);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div className="test-card intro-card">
          <div className="brand-logo">No3</div>
          <h2>Almanya Kariyer Analizi</h2>
          <p>Yüksek standartlarımıza ve Almanya yasalarına uygunluğunuzu ölçen profesyonel teşhis aracına hoş geldiniz.</p>
          <button onClick={() => setStep(1)} className="start-btn">
            Süreci Başlat 🚀
          </button>
        </div>
      );
    }

    if (step <= questions.length) {
      const q = questions[step - 1];
      return (
        <div className="test-card question-card">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / questions.length) * 100}%` }}></div>
          </div>
          <span className="step-counter">Adım {step} / {questions.length}</span>
          <h3>{q.title}</h3>
          {q.description && <div className="q-desc">{q.description}</div>}
          
          <div className="cards-grid">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt.points)} className="visual-card">
                <span className="card-icon">{opt.icon}</span>
                <span className="card-label">{opt.label}</span>
                <span className="card-check"></span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 6) {
      return (
        <div className="test-card contact-card">
          <h2>Dosyanız Analiz Ediliyor...</h2>
          <p>Analiz sonucunuzu oluşturmamız ve size özel raporu iletmemiz için bilgilerinizi girin.</p>
          <form onSubmit={handleContactSubmit} className="premium-form">
            <div className="input-group">
              <input type="text" placeholder="Adınız Soyadınız" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="E-posta Adresiniz" required />
            </div>
            <div className="input-group">
              <input type="tel" placeholder="Telefon Numaranız" required />
            </div>
            <button type="submit" className="submit-btn">Karnemi Oluştur</button>
          </form>
        </div>
      );
    }

    if (step === 7) {
      const percentage = Math.min(Math.max(Math.round((score / 12) * 100), 0), 100);
      return (
        <div className="test-card result-report">
          <div className="report-header">
            <div className="report-badge">Özel Profil Raporu</div>
            <h2>Analiz Sonucunuz: %{percentage} Uygunluk</h2>
          </div>
          
          <div className="report-body">
            <div className="score-meter">
              <div className="meter-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            
            {percentage >= 60 ? (
              <div className="status high">
                <h4>✅ Profiliniz Çok Güçlü!</h4>
                <p>Kriterlerimizin büyük bir kısmını karşılıyorsunuz. Almanya yolculuğunuzda en yüksek başarı şansına sahip adaylar arasındasınız.</p>
              </div>
            ) : percentage >= 30 ? (
              <div className="status mid">
                <h4>⚠️ Profiliniz Geliştirilebilir</h4>
                <p>Potansiyeliniz var ancak dil veya tecrübe konularında stratejik adımlar atılması gerekiyor. Profesyonel destekle şansınızı artırabiliriz.</p>
              </div>
            ) : (
              <div className="status low">
                <h4>❌ Henüz Hazır Değilsiniz</h4>
                <p>No3 Danışmanlık olarak sadece yüksek başarı şansı olan adaylarla çalışıyoruz. Şu anki durumunuz standartlarımızın altında.</p>
              </div>
            )}
            
            <div className="report-footer">
              {percentage >= 30 && (
                <Link href="/iletisim" className="btn-call">Ücretsiz İlk Görüşmeyi Planla</Link>
              )}
              <Link href="/" className="btn-back">Ana Sayfaya Dön</Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="stage-wrapper">
      <div className="blob-bg">
        <div className="blob bg-1"></div>
        <div className="blob bg-2"></div>
      </div>
      <div className="tool-container">
        {renderStep()}
      </div>
      <style jsx>{`
        .stage-wrapper {
          position: relative;
          min-height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
        }
        .blob-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.1;
          animation: orbFloat 20s infinite ease-in-out;
        }
        .bg-1 { background: var(--primary); top: -200px; left: -100px; }
        .bg-2 { background: #38bdf8; bottom: -200px; right: -100px; animation-delay: -10s; }
        
        .tool-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 760px;
        }

        .test-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 40px;
          padding: 60px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);
          text-align: center;
          animation: cardEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-logo {
          font-weight: 900;
          font-size: 24px;
          color: var(--primary);
          margin-bottom: 24px;
        }

        h2 { font-size: 38px; color: var(--text); letter-spacing: -0.05em; font-weight: 800; margin-bottom: 20px; }
        h3 { font-size: 32px; color: var(--text); letter-spacing: -0.04em; font-weight: 800; margin-bottom: 30px; }
        p { font-size: 18px; color: var(--muted); line-height: 1.6; max-width: 600px; margin: 0 auto 32px; }

        .start-btn, .submit-btn, .btn-call {
          background: var(--primary);
          color: #fff;
          border: none;
          padding: 20px 48px;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 10px 20px rgba(31, 79, 130, 0.2);
        }
        .start-btn:hover, .submit-btn:hover, .btn-call:hover { transform: translateY(-4px); box-shadow: 0 15px 30px rgba(31, 79, 130, 0.3); }

        .progress-bar { height: 8px; background: rgba(0,0,0,0.05); border-radius: 10px; margin-bottom: 32px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--primary); transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .step-counter { font-size: 13px; color: var(--primary); font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 12px; }

        .q-desc { font-size: 15px; background: rgba(31, 79, 130, 0.05); color: var(--primary-dark); padding: 20px; border-radius: 20px; margin-bottom: 40px; font-weight: 600; border-left: 4px solid var(--primary); text-align: left; }

        .cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .visual-card {
          background: #fff;
          border: 1px solid var(--line);
          padding: 30px 20px;
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          outline: none;
        }
        .visual-card:hover { transform: translateY(-8px); border-color: var(--primary); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .card-icon { font-size: 40px; }
        .card-label { font-weight: 700; font-size: 17px; color: var(--text); }

        .premium-form { display: grid; gap: 20px; margin-top: 32px; }
        .premium-form input { background: #fff; border: 1px solid var(--line); padding: 20px; border-radius: 18px; font-size: 16px; outline: none; transition: 0.3s; }
        .premium-form input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(31, 79, 130, 0.1); }

        .result-report { text-align: left; }
        .report-badge { display: inline-block; background: var(--soft-blue); color: var(--primary); padding: 8px 16px; border-radius: 999px; font-weight: 800; font-size: 12px; text-transform: uppercase; margin-bottom: 16px; }
        .score-meter { height: 16px; background: rgba(0,0,0,0.05); border-radius: 10px; margin: 30px 0; overflow: hidden; }
        .meter-fill { height: 100%; background: linear-gradient(90deg, #38bdf8, var(--primary)); border-radius: inherit; }
        
        .status { padding: 30px; border-radius: 24px; margin-bottom: 40px; }
        .status h4 { font-size: 22px; margin-bottom: 10px; font-weight: 800; }
        .status.high { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
        .status.mid { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
        .status.low { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; }

        .report-footer { display: flex; gap: 16px; align-items: center; }
        .btn-back { font-weight: 700; color: var(--muted); text-decoration: none; padding: 20px; }

        @keyframes cardEntry { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes orbFloat { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px, 40px); } }

        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr; }
          .test-card { padding: 30px; }
          .report-footer { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
