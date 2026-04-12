'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  {
    id: 'age',
    title: 'Yaş aralığınız nedir?',
    helper: 'Bu bilgi sadece uygun başvuru yolunu seçmek için kullanılır.',
    options: [
      { label: '18 - 30', points: 3 },
      { label: '31 - 40', points: 2 },
      { label: '41 ve üzeri', points: 1 }
    ]
  },
  {
    id: 'education',
    title: 'En yüksek eğitim seviyeniz nedir?',
    helper: 'Diploma seviyesi başvuru türünü etkileyebilir.',
    options: [
      { label: 'Lisans / Yüksek Lisans', points: 3 },
      { label: 'Ön Lisans / Mesleki Eğitim', points: 2 },
      { label: 'Lise', points: 1 }
    ]
  },
  {
    id: 'experience',
    title: 'Mesleğinizde kaç yıl deneyiminiz var?',
    helper: 'Tecrübe süresi iş eşleşmesi için önemlidir.',
    options: [
      { label: '5 yıl ve üzeri', points: 3 },
      { label: '2 - 4 yıl', points: 2 },
      { label: '0 - 1 yıl', points: 1 }
    ]
  },
  {
    id: 'language',
    title: 'Dil seviyeniz hangi düzeyde?',
    helper: 'Almanca veya İngilizce seviyesi kabul sürecini kolaylaştırır.',
    options: [
      { label: 'Almanca B1+ veya İngilizce C1+', points: 3 },
      { label: 'Almanca A2 veya İngilizce B2', points: 2 },
      { label: 'Başlangıç seviyesindeyim', points: 1 }
    ]
  },
  {
    id: 'readiness',
    title: 'Belge hazırlığınız hangi noktada?',
    helper: 'CV, diploma, referans gibi temel belgeler süreci hızlandırır.',
    options: [
      { label: 'Belgelerim büyük ölçüde hazır', points: 3 },
      { label: 'Kısmen hazır, düzenleme gerekiyor', points: 2 },
      { label: 'Henüz hazırlığa başlamadım', points: 1 }
    ]
  },
  {
    id: 'planning',
    title: 'Süreç takibi için düzenli zaman ayırabilir misiniz?',
    helper: 'Planlı ilerlemek vize ve iş süreçlerinde kritik fark yaratır.',
    options: [
      { label: 'Evet, haftalık düzenli takip yaparım', points: 3 },
      { label: 'Aylık planla takip ederim', points: 2 },
      { label: 'Şu an net bir planım yok', points: 1 }
    ]
  }
];

const INTRO = 0;
const START = 1;
const END = QUESTIONS.length;
const RESULT = END + 1;
const MAX_SCORE = QUESTIONS.length * 3;

function getResultContent(percentage) {
  if (percentage >= 75) {
    return {
      title: 'Çok iyi bir başlangıç seviyesindesiniz',
      text: 'Profiliniz birçok temel kriterde güçlü görünüyor. Doğru başvuru planı ile süreci güvenle başlatabilirsiniz.',
      tone: 'good'
    };
  }
  if (percentage >= 50) {
    return {
      title: 'İyi bir potansiyeliniz var',
      text: 'Temel yapı güçlü, bazı alanları iyileştirerek başvurunuzu çok daha güçlü hale getirebilirsiniz.',
      tone: 'mid'
    };
  }
  return {
    title: 'Ön hazırlıkla daha iyi sonuç alabilirsiniz',
    text: 'Hemen başlamak yerine kısa bir hazırlık planı yaparsanız başarı şansınız belirgin şekilde artar.',
    tone: 'low'
  };
}

export default function EligibilityTool() {
  const [step, setStep] = useState(INTRO);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const activeQuestion = step >= START && step <= END ? QUESTIONS[step - 1] : null;
  const progress = step >= START && step <= END ? Math.round((step / END) * 100) : step > END ? 100 : 0;
  const percentage = Math.round((score / MAX_SCORE) * 100);
  const result = getResultContent(percentage);

  const summary = useMemo(() => {
    const labels = [];
    QUESTIONS.forEach((question) => {
      const points = answers[question.id];
      if (points === 3) labels.push(question.title);
    });
    return labels;
  }, [answers]);

  const handleAnswer = (questionId, points) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
    setScore((prev) => prev + points);
    setStep((prev) => prev + 1);
  };

  const restart = () => {
    setStep(INTRO);
    setScore(0);
    setAnswers({});
  };

  const goBack = () => {
    if (step <= START) return;
    const lastQuestion = QUESTIONS[step - 2];
    const lastPoints = answers[lastQuestion.id];

    if (typeof lastPoints === 'number') {
      setScore((prev) => prev - lastPoints);
      setAnswers((prev) => {
        const next = { ...prev };
        delete next[lastQuestion.id];
        return next;
      });
    }
    setStep((prev) => prev - 1);
  };

  return (
    <section className="tool-shell">
      <div className="meta-strip" aria-hidden="true">
        <span>6 Soru</span>
        <span>2 Dakika</span>
        <span>Anlaşılır Sonuç</span>
      </div>

      <article className="tool-card">
        {step === INTRO && (
          <div className="screen">
            <span className="chip">No3 Uygunluk Testi</span>
            <h2>Almanya planınız için net bir başlangıç analizi</h2>
            <p>
              Sorular açık ve kısa. Sonunda size anlaşılır bir sonuç ve net bir sonraki adım önerisi vereceğiz.
            </p>
            <button type="button" className="primary-btn" onClick={() => setStep(START)}>
              Testi Başlat
            </button>
          </div>
        )}

        {activeQuestion && (
          <div className="screen">
            <div className="top-row">
              <span className="chip">Soru {step} / {END}</span>
              <button type="button" className="ghost-btn" onClick={goBack}>Geri</button>
            </div>

            <div className="progress" aria-hidden="true">
              <div className="progress-value" style={{ width: `${progress}%` }} />
            </div>

            <h3>{activeQuestion.title}</h3>
            <p className="helper">{activeQuestion.helper}</p>

            <div className="options">
              {activeQuestion.options.map((option) => (
                <button
                  key={`${activeQuestion.id}-${option.label}`}
                  type="button"
                  className="option-btn"
                  onClick={() => handleAnswer(activeQuestion.id, option.points)}
                >
                  <span>{option.label}</span>
                  <small>{option.points} puan • Seçmek için dokunun</small>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === RESULT && (
          <div className="screen">
            <span className="chip">Sonuç</span>
            <h3>Uygunluk Skoru: %{percentage}</h3>

            <div className="score-track" aria-hidden="true">
              <div className="score-value" style={{ width: `${percentage}%` }} />
            </div>

            <section className={`result ${result.tone}`}>
              <h4>{result.title}</h4>
              <p>{result.text}</p>
            </section>

            <section className="highlights">
              <h5>Güçlü Görünen Alanlar</h5>
              <p>
                {summary.length > 0
                  ? summary.slice(0, 3).join(' • ')
                  : 'Hazırlık alanlarınızı geliştirerek skoru hızla yükseltebilirsiniz.'}
              </p>
            </section>

            <div className="actions">
              <Link href={`/odeme?urun=test-sonucu-raporu&puan=${percentage}`} className="primary-btn link-btn">
                Test Sonucu İçin Ödeme Adımına Geç
              </Link>
              <Link href="/hizmetler#paketler" className="secondary-btn link-btn package-cta-btn">
                Danışmanlık Paketleri
              </Link>
            </div>
          </div>
        )}
      </article>

      <style jsx>{`
        .tool-shell {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          font-family: 'SF Pro Display', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', sans-serif;
        }

        .meta-strip {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 12px;
        }

        .meta-strip span {
          min-height: 42px;
          border-radius: 14px;
          border: 1px solid rgba(31, 47, 61, 0.1);
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(8px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #203243;
        }

        .tool-card {
          position: relative;
          z-index: 1;
          border-radius: 34px;
          border: 1px solid rgba(31, 47, 61, 0.1);
          background:
            linear-gradient(164deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 251, 255, 0.88) 80%),
            rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(14px);
          box-shadow: 0 28px 70px rgba(14, 29, 43, 0.14);
          overflow: hidden;
        }

        .screen {
          padding: 44px;
          animation: fadeIn 0.3s ease;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          border-radius: 999px;
          padding: 0 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1c4f83;
          background: #e7eff7;
          margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(34px, 4.2vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
          color: #122132;
        }

        h3 {
          font-size: clamp(30px, 3.8vw, 44px);
          line-height: 1.04;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          color: #142536;
        }

        p {
          color: #4a5b6b;
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 22px;
          max-width: 700px;
        }

        .helper {
          margin-bottom: 18px;
          font-size: 16px;
          color: #58697a;
        }

        .top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }

        .progress,
        .score-track {
          width: 100%;
          height: 10px;
          border-radius: 999px;
          background: rgba(31, 47, 61, 0.12);
          overflow: hidden;
          margin-bottom: 22px;
        }

        .progress-value,
        .score-value {
          height: 100%;
          border-radius: inherit;
          transition: width 0.28s ease;
          background: linear-gradient(90deg, #205184 0%, #5f97d0 100%);
        }

        .options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .option-btn {
          border: 1px solid rgba(31, 47, 61, 0.14);
          background: linear-gradient(180deg, #ffffff 0%, #f9fbfe 100%);
          border-radius: 20px;
          min-height: 110px;
          padding: 18px;
          display: grid;
          align-content: center;
          text-align: left;
          gap: 8px;
          cursor: pointer;
          transition: 0.22s ease;
        }

        .option-btn:hover {
          border-color: rgba(31, 79, 130, 0.52);
          box-shadow: 0 16px 30px rgba(31, 79, 130, 0.14);
          transform: translateY(-2px);
        }

        .option-btn:focus-visible,
        .primary-btn:focus-visible,
        .secondary-btn:focus-visible,
        .ghost-btn:focus-visible {
          outline: 3px solid rgba(70, 127, 186, 0.34);
          outline-offset: 2px;
        }

        .option-btn span {
          font-weight: 700;
          font-size: 19px;
          line-height: 1.24;
          color: #1a2a3a;
        }

        .option-btn small {
          color: #65809d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        .result {
          border-radius: 18px;
          border: 1px solid;
          padding: 20px;
          margin-bottom: 14px;
        }

        .result h4 {
          font-size: 28px;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .result p {
          margin-bottom: 0;
          font-size: 17px;
        }

        .result.good {
          background: #eef9f2;
          border-color: #bde5c8;
          color: #1f6a41;
        }

        .result.mid {
          background: #fff8ea;
          border-color: #efd9a6;
          color: #855f16;
        }

        .result.low {
          background: #fcefee;
          border-color: #efc3bc;
          color: #8b3527;
        }

        .highlights {
          border-radius: 16px;
          background: #f7fbff;
          border: 1px solid rgba(31, 79, 130, 0.16);
          padding: 18px;
          margin-bottom: 20px;
        }

        .highlights h5 {
          margin-bottom: 8px;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--text);
        }

        .highlights p {
          margin-bottom: 0;
          font-size: 15px;
          color: #4c6074;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          min-height: 58px;
          border-radius: 16px;
          padding: 0 24px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.24s ease;
          letter-spacing: 0.01em;
        }

        .primary-btn {
          border: none;
          background: linear-gradient(135deg, #1c4f84 0%, #3473b4 100%);
          color: #fff;
        }

        .primary-btn:hover {
          box-shadow: 0 16px 28px rgba(31, 79, 130, 0.32);
          transform: translateY(-1px);
        }

        .secondary-btn,
        .ghost-btn {
          border: 1px solid rgba(31, 47, 61, 0.15);
          background: #fff;
          color: var(--muted);
        }

        .secondary-btn:hover,
        .ghost-btn:hover {
          color: var(--text);
          border-color: rgba(31, 79, 130, 0.3);
        }

        .ghost-btn {
          min-height: 40px;
          padding: 0 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .package-cta-btn {
          min-height: 62px;
          padding: 0 26px;
          font-size: 18px;
          font-weight: 800;
          border-width: 2px;
          color: #11385f;
          background: linear-gradient(180deg, #eef5ff 0%, #dcecff 100%);
          box-shadow: 0 14px 30px rgba(35, 90, 149, 0.2);
        }

        .package-cta-btn:hover {
          transform: translateY(-1px);
          border-color: rgba(31, 79, 130, 0.48);
          box-shadow: 0 18px 34px rgba(29, 81, 138, 0.28);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 840px) {
          .meta-strip {
            grid-template-columns: 1fr;
          }

          .screen {
            padding: 26px 20px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 36px;
          }

          h3 {
            font-size: 32px;
          }

          p {
            font-size: 16px;
          }

          .option-btn {
            min-height: 98px;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .package-cta-btn {
            min-height: 58px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
