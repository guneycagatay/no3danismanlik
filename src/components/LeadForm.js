'use client';

import { useState, useRef } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm({ maxWidth }) {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    reason: '',
    sector: '',
    experience: '',
    occupation: '',
    education: 'lisans',
    lang: 'yok',
    budget: '',
    timing: '',
    passport: 'var',
    refusal: 'hayir',
    goals: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const goToStep = (step) => {
    if (step > currentStep) {
      if (currentStep === 1 && (!formData.fullname || !formData.email)) {
        alert('Lütfen temel iletişim bilgilerini doldurun.');
        return;
      }
    }
    setCurrentStep(step);
    if (formRef.current) {
      const topOffset = formRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        if (formRef.current) {
          const topOffset = formRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      } else {
        alert(`Hata: ${result.error || 'Bir sorun oluştu'}\nDetay: ${result.details || ''}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('İnternet bağlantınızı kontrol edip tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.formContainer} style={{ '--form-max-width': maxWidth }} ref={formRef}>
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className={styles.title}>Başvurunuz Alındı!</h2>
          <p className={styles.subtitle}>Uzman ekibimiz bilgilerinizi inceleyip 24 saat içerisinde size geri dönüş yapacaktır.</p>
          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => window.location.reload()}>
              Yeni Başvuru
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderStep1 = () => (
    <div className={styles.step}>
      <h2 className={styles.title}>Başlayalım.</h2>
      <p className={styles.subtitle}>Almanya hayalinizi gerçekleştirmek için temel bilgilerinizi paylaşın.</p>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Ad Soyad</label>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Örn: Ahmet Yılmaz" 
          value={formData.fullname}
          onChange={(e) => handleInputChange('fullname', e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Telefon Numarası</label>
        <input 
          type="tel" 
          className={styles.input} 
          placeholder="+90 5XX XXX XX XX" 
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>E-posta Adresi</label>
        <input 
          type="email" 
          className={styles.input} 
          placeholder="ahmet@example.com" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Almanya'ya neden gitmek istiyorsunuz?</label>
        <div className={styles.optionsGrid}>
          {['Çalışmak', 'İş Aramak', 'Eğitim / Dil Okulu', 'Aile Birleşimi'].map(opt => (
            <div 
              key={opt}
              className={`${styles.optionCard} ${formData.reason === opt ? styles.optionCardSelected : ''}`}
              onClick={() => handleInputChange('reason', opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => goToStep(2)}>
          Sonraki Adım
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.step}>
      <h2 className={styles.title}>Kariyer Profiliniz.</h2>
      <p className={styles.subtitle}>Mesleki deneyiminiz Almanya'daki fırsatları belirleyecektir.</p>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Hangi sektörde hizmet veriyorsunuz?</label>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Örn: Sağlık, Yazılım, İnşaat vb." 
          value={formData.sector}
          onChange={(e) => handleInputChange('sector', e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Toplam iş tecrübeniz:</label>
        <div className={styles.optionsGrid}>
          {['0–2 Yıl', '2–5 Yıl', '5–10 Yıl', '10+ Yıl'].map(opt => (
            <div 
              key={opt}
              className={`${styles.optionCard} ${formData.experience === opt ? styles.optionCardSelected : ''}`}
              onClick={() => handleInputChange('experience', opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Uzmanlık alanınız / Mevcut unvanınız</label>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Örn: Kıdemli Hemşire, Full Stack Developer" 
          value={formData.occupation}
          onChange={(e) => handleInputChange('occupation', e.target.value)}
        />
      </div>

      <div className={styles.formGroup} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label className={styles.label}>Eğitim durumunuz:</label>
          <select 
            className={styles.select} 
            value={formData.education}
            onChange={(e) => handleInputChange('education', e.target.value)}
          >
            <option value="lise">Lise</option>
            <option value="onlisans">Ön Lisans</option>
            <option value="lisans">Lisans</option>
            <option value="yukseklisans">Yüksek Lisans</option>
            <option value="meslek">Meslek Eğitimi</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>Almanca seviyeniz:</label>
          <select 
            className={styles.select} 
            value={formData.lang}
            onChange={(e) => handleInputChange('lang', e.target.value)}
          >
            <option value="yok">Yok</option>
            <option value="A1">A1-A2</option>
            <option value="B1">B1-B2</option>
            <option value="C1">C1+</option>
            <option value="english">Sadece İngilizce</option>
          </select>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => goToStep(3)}>
          Sonraki Adım
        </button>
        <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => goToStep(1)}>
          Geri Dön
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className={styles.step}>
      <h2 className={styles.title}>Süreç ve Planlama.</h2>
      <p className={styles.subtitle}>Son adımda finansal ve zamanlama hedeflerinizi belirleyelim.</p>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Göç süreci için ayırdığınız bütçe:</label>
        <div className={styles.optionsGrid}>
          {['0–2.000€', '2.000€–5.000€', '5.000€–10.000€', '10.000€+'].map(opt => (
            <div 
              key={opt}
              className={`${styles.optionCard} ${formData.budget === opt ? styles.optionCardSelected : ''}`}
              onClick={() => handleInputChange('budget', opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Ne zaman gitmek istiyorsunuz?</label>
        <div className={styles.optionsGrid}>
          {['0–3 Ay', '3–6 Ay', 'Araştırıyorum'].map(opt => (
            <div 
              key={opt}
              className={`${styles.optionCard} ${formData.timing === opt ? styles.optionCardSelected : ''}`}
              onClick={() => handleInputChange('timing', opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formGroup} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label className={styles.label}>Pasaport durumunuz:</label>
          <select 
            className={styles.select} 
            value={formData.passport}
            onChange={(e) => handleInputChange('passport', e.target.value)}
          >
            <option value="var">Var</option>
            <option value="yok">Yok</option>
            <option value="durdu">Süresi Doldu</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>Vize reddi aldınız mı?</label>
          <select 
            className={styles.select} 
            value={formData.refusal}
            onChange={(e) => handleInputChange('refusal', e.target.value)}
          >
            <option value="hayir">Hayır</option>
            <option value="evet">Evet</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Eklemek istediğiniz notlar?</label>
        <textarea 
          className={styles.textarea} 
          rows="3" 
          placeholder="Örn: Ailemle gitmek istiyorum." 
          value={formData.goals}
          onChange={(e) => handleInputChange('goals', e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <button 
          type="button" 
          className={`${styles.btn} ${styles.btnPrimary}`} 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Gönderiliyor...' : 'Değerlendirmeyi Tamamla'}
        </button>
        <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => goToStep(2)}>
          Geri Dön
        </button>
      </div>
    </div>
  );

  const progressPercent = currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%';

  return (
    <div className={styles.formContainer} style={{ '--form-max-width': maxWidth }} ref={formRef}>
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span>ADIM {currentStep} / 3</span>
          <span>{currentStep === 3 ? 'Son Adım' : Math.round((currentStep/3)*100) + '% Tamamlandı'}</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: progressPercent }}></div>
        </div>
      </div>

      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </div>
  );
}
