import React, { useState, useMemo, useEffect } from 'react';

// Loan purpose mapping (card select rate <-> purpose label / stepper chip)
const PURPOSE_RATES = {
  auto: 5.99,
  home: 6.49,
  emergency: 8.99,
  debt: 7.25,
  personal: 9.50,
  other: 9.50
};

const RATE_PURPOSE_LABELS = {
  5.99: 'Auto Loan',
  6.49: 'Home Improvement',
  8.99: 'Emergency Loan',
  7.25: 'Debt Consolidation',
  9.50: 'Personal Loan'
};

function HomeMain({ setPage, loanDraftRef }) {
  // 1. Hero Calculator State
  const [heroAmount, setHeroAmount] = useState(25000);
  const [heroRate, setHeroRate] = useState(5.99);
  const [heroTerm, setHeroTerm] = useState(60);

  // Calculator ki current values Apply form me prefill karne ke liye sync karo
  useEffect(() => {
    if (!loanDraftRef) return;
    loanDraftRef.current = {
      purpose: RATE_PURPOSE_LABELS[heroRate] || 'Auto Loan',
      amount: heroAmount,
      term: heroTerm,
      rate: heroRate
    };
  }, [heroAmount, heroRate, heroTerm, loanDraftRef]);

  // Hero monthly payment calculation
  const heroMonthly = useMemo(() => {
    const P = parseFloat(heroAmount);
    const r = (parseFloat(heroRate) / 100) / 12;
    const n = parseInt(heroTerm, 10);
    if (r === 0) return (P / n).toFixed(2);
    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return monthly.toFixed(2);
  }, [heroAmount, heroRate, heroTerm]);

  // 2. Comparison Table Tab Filter
  const [activeTab, setActiveTab] = useState('all');

  const comparisonData = [
    {
      type: 'Auto Loan',
      cat: 'auto',
      icon: 'directions_car',
      apr: '5.99% – 14.99%',
      amount: '$5,000 – $75,000',
      term: 'Up to 60 mos',
      monthly: '$193.30',
      targetPage: 'auto-loans'
    },
    {
      type: 'Home Improvement',
      cat: 'home',
      icon: 'home_repair_service',
      apr: '6.49% – 15.49%',
      amount: '$5,000 – $100,000',
      term: 'Up to 60 mos',
      monthly: '$195.60',
      targetPage: 'home-improvement'
    },
    {
      type: 'Emergency Loan',
      cat: 'emergency',
      icon: 'emergency',
      apr: '8.99% – 19.99%',
      amount: '$1,000 – $25,000',
      term: 'Up to 36 mos',
      monthly: '$317.90',
      targetPage: 'emergency-loans'
    },
    {
      type: 'Debt Consolidation',
      cat: 'debt',
      icon: 'account_balance_wallet',
      apr: '7.25% – 16.99%',
      amount: '$5,000 – $60,000',
      term: 'Up to 60 mos',
      monthly: '$199.19',
      targetPage: 'debt-consolidation'
    },
    {
      type: 'Personal Loan',
      cat: 'personal',
      icon: 'person',
      apr: '12.99% – 24.99%',
      amount: '$2,000 – $50,000',
      term: 'Up to 60 mos',
      monthly: '$227.50',
      targetPage: 'personal-loans'
    }
  ];

  const filteredComparison = activeTab === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.cat === activeTab);

  // 3. Purpose Chip Selection in Stepper
  const [selectedPurpose, setSelectedPurpose] = useState('auto');

  // 4. Application Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Government-issued photo ID', checked: true },
    { id: 2, text: 'Proof of income (pay stubs / W2)', checked: true },
    { id: 3, text: 'Bank account information', checked: true },
    { id: 4, text: 'Proof of address (utility bill / lease)', checked: false },
    { id: 5, text: 'Social Security information', checked: false },
    { id: 6, text: 'Employment verification', checked: false }
  ]);

  const toggleChecklist = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const completedCount = checklist.filter(item => item.checked).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  // 5. Refinance Savings Calculator State
  const [saveBalance, setSaveBalance] = useState(18500);
  const [saveRate, setSaveRate] = useState(18.5);
  const [savePayment, setSavePayment] = useState(450);
  const [saveTerm, setSaveTerm] = useState(36);
  const [monthlySaved, setMonthlySaved] = useState('112.50');
  const [totalSaved, setTotalSaved] = useState('4,050');

  const calculateSavings = () => {
    const balance = parseFloat(saveBalance) || 18500;
    const currentPay = parseFloat(savePayment) || 450;
    const termMonths = parseInt(saveTerm, 10) || 36;
    
    const newRateMonthly = 0.0799 / 12;
    const newPayment = (balance * newRateMonthly * Math.pow(1 + newRateMonthly, termMonths)) / (Math.pow(1 + newRateMonthly, termMonths) - 1);
    
    const saved = Math.max(0, currentPay - newPayment);
    const tot = saved * termMonths;

    setMonthlySaved(saved.toFixed(2));
    setTotalSaved(Math.round(tot).toLocaleString('en-US'));
  };

  // 6. FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How quickly can I get approved?',
      a: 'Most online applications receive an algorithmic decision in under 3 minutes. Once approved and verification is completed, funds can be deposited directly into your checking account as soon as the next business day.'
    },
    {
      q: 'What are the eligibility requirements?',
      a: 'To qualify, you must be at least 18 years old, a US citizen or permanent resident, have a steady verified source of income, and hold an active personal checking account for direct electronic transfer.'
    },
    {
      q: 'Can I apply with less-than-perfect credit?',
      a: 'Yes. We take into consideration factors beyond your standalone credit score, including debt-to-income ratio, employment tenure, and banking history, to evaluate your whole financial picture.'
    },
    {
      q: 'Are there any hidden fees or prepayment penalties?',
      a: 'No. We pride ourselves on transparent lending. All loan terms, interest rates, and APR schedules are disclosed upfront before you sign. There are zero penalties for paying off your loan balance ahead of schedule.'
    },
    {
      q: 'What loan amounts and terms are available?',
      a: 'Depending on loan purpose and qualification, loan amounts range from $1,000 up to $100,000 with flexible repayment periods from 24 to 60 months.'
    },
    {
      q: 'Is my personal and financial information secure?',
      a: 'Your security is our highest priority. All data transmitted through our portal is guarded with 256-bit SSL encryption, and we never sell your personal information to unapproved third-party brokers.'
    }
  ];

  return (
    <main>
      {/* ============================================
          SECTION 1: HERO & LOAN CALCULATOR
      ============================================ */}
      <section className="relative bg-gradient-to-b from-white via-brand-bg to-brand-bg pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-extrabold uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                SMARTER BORROWING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                Loans Designed <br className="hidden sm:inline"/>
                <span className="text-brand-blue">Around Your Needs</span>
              </h1>

              <p className="text-lg sm:text-xl text-brand-muted max-w-xl leading-relaxed">
                Explore flexible financing options with a simple, secure application experience. Fast decisions and clear terms make getting the funds you need effortless.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button 
                  onClick={() => setPage('apply')}
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all border-0 cursor-pointer"
                >
                  <span>Check Your Rate</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-navy border border-brand-border px-6 py-4 rounded-xl font-bold text-base shadow-sm transition-all no-underline"
                >
                  <span className="material-symbols-outlined text-brand-blue text-[20px]">calculate</span>
                  <span>Calculate Payment</span>
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-brand-muted">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-green text-[20px]">check_circle</span>
                  <span className="font-semibold text-brand-navy">Fast decision process</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-green text-[20px]">check_circle</span>
                  <span className="font-semibold text-brand-navy">Clear terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-green text-[20px]">check_circle</span>
                  <span className="font-semibold text-brand-navy">No hidden fees</span>
                </div>
              </div>
            </div>

            {/* Hero Calculator Card (5 cols) */}
            <div className="lg:col-span-5" id="calculator">
              <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-brand-border relative">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Estimate Your Loan</span>
                    <h2 className="text-xl font-extrabold text-brand-navy">Estimated Monthly Payment</h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blueLight flex items-center justify-center text-brand-blue">
                    <span className="material-symbols-outlined text-[24px]">finance_mode</span>
                  </div>
                </div>

                {/* Form Controls */}
                <div className="space-y-5 pt-6">
                  {/* Amount Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-muted">Loan Amount</label>
                      <span className="text-xl font-extrabold text-brand-navy">${Number(heroAmount).toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="75000" 
                      step="500" 
                      value={heroAmount} 
                      onChange={(e) => {
                        setHeroAmount(Number(e.target.value));
                      }}
                      className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                    <div className="flex justify-between text-xs text-brand-muted mt-1">
                      <span>$2,000</span>
                      <span>$75,000</span>
                    </div>
                  </div>

                  {/* Purpose & Term Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">Select Loan Purpose</label>
                      <select 
                        value={heroRate}
                        onChange={(e) => {
                          setHeroRate(Number(e.target.value));
                        }}
                        className="w-full bg-slate-50 border border-brand-border rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-navy focus:outline-none focus:border-brand-blue cursor-pointer"
                      >
                        <option value="5.99">Auto Loan (5.99%)</option>
                        <option value="6.49">Home Remodel (6.49%)</option>
                        <option value="8.99">Emergency Loan (8.99%)</option>
                        <option value="7.25">Debt Consolidation (7.25%)</option>
                        <option value="9.50">Personal Funding (9.50%)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">Loan Term</label>
                      <select 
                        value={heroTerm}
                        onChange={(e) => {
                          setHeroTerm(Number(e.target.value));
                        }}
                        className="w-full bg-slate-50 border border-brand-border rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-navy focus:outline-none focus:border-brand-blue cursor-pointer"
                      >
                        <option value="36">36 Months</option>
                        <option value="48">48 Months</option>
                        <option value="60">60 Months</option>
                      </select>
                    </div>
                  </div>

                  {/* Monthly Output Box */}
                  <div className="bg-brand-blueLight/60 border border-brand-blue/20 rounded-2xl p-5 flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs font-bold text-brand-muted">
                      <span>Estimated Monthly Payment</span>
                      <span className="px-2 py-0.5 rounded-full bg-brand-greenLight text-brand-green font-bold">
                        {heroRate}% APR Estimated
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl font-extrabold text-brand-navy leading-none">${heroMonthly}</span>
                      <span className="text-sm font-medium text-brand-muted">/month</span>
                    </div>
                    <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                      *Estimated payment based on selected loan amount, term, and sample rate.
                    </p>
                  </div>

                  <button 
                    onClick={() => setPage('apply')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white py-4 rounded-xl font-bold text-base shadow-md transition-all border-0 cursor-pointer"
                  >
                    <span>Get Started with This Estimate</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: 4 PILLARS ("A Simpler Way to Borrow")
      ============================================ */}
      <section className="py-20 bg-white border-y border-brand-border" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Why Choose Zorian</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">A Simpler Way to Borrow</h2>
            <p className="text-base text-brand-muted mt-3">
              We engineered our lending platform to remove institutional obstacles, excessive wait times, and confusing fine print.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 01 */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border/70 hover:border-brand-blue/40 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-blue transition-colors">01</span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">speed</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Fast Process</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Complete a simple online application with algorithmic decisioning in under 3 minutes.
                </p>
              </div>
              <div 
                onClick={() => setPage('about')}
                className="pt-6 mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-blue cursor-pointer"
              >
                <span>Learn About Process</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border/70 hover:border-brand-blue/40 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-blue transition-colors">02</span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">lock</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Secure</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Your information is handled through a secure application experience protected with 256-bit encryption.
                </p>
              </div>
              <div 
                onClick={() => setPage('about')}
                className="pt-6 mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-blue cursor-pointer"
              >
                <span>Learn About Security</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border/70 hover:border-brand-blue/40 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-blue transition-colors">03</span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">tune</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Flexible Options</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Explore loan options based on your needs with fixed schedules and zero prepayment penalties.
                </p>
              </div>
              <div 
                onClick={() => setPage('apply')}
                className="pt-6 mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-blue cursor-pointer"
              >
                <span>See Loan Options</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border/70 hover:border-brand-blue/40 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-blue transition-colors">04</span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">support_agent</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Support</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Get help throughout your application journey with US-based loan specialists ready to guide you.
                </p>
              </div>
              <div 
                onClick={() => setPage('contact')}
                className="pt-6 mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-blue cursor-pointer"
              >
                <span>Speak with Support</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: 4 LARGE LOAN CARDS ("Find the Right Loan for You")
      ============================================ */}
      <section className="py-24 bg-brand-bg" id="loan-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Tailored Financing</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">Find the Right Loan for You</h2>
              <p className="text-base text-brand-muted mt-2">Choose the financing option that best matches your needs.</p>
            </div>
            <a href="#comparison" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-blueHover no-underline">
              <span>Compare all loan features</span>
              <span className="material-symbols-outlined text-[18px]">trending_flat</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Auto */}
            <div className="bg-white rounded-3xl p-7 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between" id="auto-loans">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-blueLight flex items-center justify-center text-brand-blue mb-6">
                  <span className="material-symbols-outlined text-[32px]">directions_car</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold mb-3">From 5.99% APR</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Auto Loans</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Finance your next vehicle with flexible financing options, competitive rates, and direct dealer or private payout.
                </p>
              </div>
              <div>
                <div className="bg-brand-bg p-3 rounded-xl mb-4 text-xs flex justify-between font-semibold">
                  <span className="text-brand-muted">Max Amount:</span>
                  <span className="text-brand-navy font-bold">$75,000</span>
                </div>
                <button 
                  onClick={() => setPage('auto-loans')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-3 rounded-xl text-sm font-bold transition-colors border-0 cursor-pointer"
                >
                  <span>Explore Auto Loans</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Home Improvement */}
            <div className="bg-white rounded-3xl p-7 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between" id="home-loans">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-blueLight flex items-center justify-center text-brand-blue mb-6">
                  <span className="material-symbols-outlined text-[32px]">home_repair_service</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold mb-3">Up to $100,000</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Home Improvement</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Finance projects that make your home work better for you. Remodel kitchens, replace roofs, or install energy fixtures.
                </p>
              </div>
              <div>
                <div className="bg-brand-bg p-3 rounded-xl mb-4 text-xs flex justify-between font-semibold">
                  <span className="text-brand-muted">Starting Rate:</span>
                  <span className="text-brand-navy font-bold">6.49% APR</span>
                </div>
                <button 
                  onClick={() => setPage('home-improvement')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-3 rounded-xl text-sm font-bold transition-colors border-0 cursor-pointer"
                >
                  <span>Explore Home Improvement</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Emergency Loans */}
            <div className="bg-white rounded-3xl p-7 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between" id="emergency-loans">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-blueLight flex items-center justify-center text-brand-blue mb-6">
                  <span className="material-symbols-outlined text-[32px]">emergency</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3">Same-Day Review</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Emergency Loans</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Explore financing options for unexpected expenses, sudden auto repairs, or urgent healthcare bills without delays.
                </p>
              </div>
              <div>
                <div className="bg-brand-bg p-3 rounded-xl mb-4 text-xs flex justify-between font-semibold">
                  <span className="text-brand-muted">Speed:</span>
                  <span className="text-brand-green font-bold">Next-Day Disbursal</span>
                </div>
                <button 
                  onClick={() => setPage('emergency-loans')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-3 rounded-xl text-sm font-bold transition-colors border-0 cursor-pointer"
                >
                  <span>Explore Emergency Loans</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 4: Debt Consolidation */}
            <div className="bg-white rounded-3xl p-7 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between" id="debt-loans">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-blueLight flex items-center justify-center text-brand-blue mb-6">
                  <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold mb-3">Single Payment</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Debt Consolidation</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  Bring multiple eligible debts together into a simpler payment structure with potentially lower interest rates.
                </p>
              </div>
              <div>
                <div className="bg-brand-bg p-3 rounded-xl mb-4 text-xs flex justify-between font-semibold">
                  <span className="text-brand-muted">Max Term:</span>
                  <span className="text-brand-navy font-bold">Up to 60 Months</span>
                </div>
                <button 
                  onClick={() => setPage('debt-consolidation')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-3 rounded-xl text-sm font-bold transition-colors border-0 cursor-pointer"
                >
                  <span>Explore Debt Consolidation</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: TOOLS TO HELP YOU PLAN (4 Cards)
      ============================================ */}
      <section className="py-20 bg-white border-y border-brand-border" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Self-Service Resources</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">Tools to Help You Plan</h2>
            <p className="text-base text-brand-muted mt-2">
              Take control of your finances with interactive estimators and checklists designed for clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#comparison" className="bg-brand-bg hover:bg-brand-blueLight/50 p-6 rounded-2xl border border-brand-border transition-all flex flex-col justify-between group no-underline">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm mb-4">
                <span className="material-symbols-outlined text-[24px]">compare_arrows</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Compare Loan Options</h3>
                <p className="text-xs text-brand-muted leading-relaxed">Side-by-side APRs, terms, and payment thresholds for every product.</p>
              </div>
              <span className="mt-4 text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Comparison Table &rarr;
              </span>
            </a>

            <button onClick={() => setPage('apply')} className="bg-brand-bg hover:bg-brand-blueLight/50 p-6 rounded-2xl border border-brand-border transition-all flex flex-col justify-between group text-left cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm mb-4">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Check Eligibility</h3>
                <p className="text-xs text-brand-muted leading-relaxed">Instant 2-minute soft inquiry that will not affect your credit score.</p>
              </div>
              <span className="mt-4 text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Check Pre-Approval &rarr;
              </span>
            </button>

            <a href="#savings-calculator" className="bg-brand-bg hover:bg-brand-blueLight/50 p-6 rounded-2xl border border-brand-border transition-all flex flex-col justify-between group no-underline">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm mb-4">
                <span className="material-symbols-outlined text-[24px]">calculate</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Payment Calculator</h3>
                <p className="text-xs text-brand-muted leading-relaxed">See how much you could save by consolidating higher-rate balances.</p>
              </div>
              <span className="mt-4 text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Calculate Savings &rarr;
              </span>
            </a>

            <a href="#checklist-section" className="bg-brand-bg hover:bg-brand-blueLight/50 p-6 rounded-2xl border border-brand-border transition-all flex flex-col justify-between group no-underline">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm mb-4">
                <span className="material-symbols-outlined text-[24px]">fact_check</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Document Checklist</h3>
                <p className="text-xs text-brand-muted leading-relaxed">Prepare the 6 required documents to guarantee same-day approval review.</p>
              </div>
              <span className="mt-4 text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Review Checklist &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: INTERACTIVE COMPARISON TABLE WITH TABS
      ============================================ */}
      <section className="py-20 bg-brand-bg" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Transparent Rates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">Compare Loan Options</h2>
            <p className="text-base text-brand-muted mt-2">Evaluate starting rates, terms, and sample payments across our lending suite.</p>
          </div>

          <div className="bg-white rounded-3xl border border-brand-border shadow-md overflow-hidden p-6 sm:p-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-brand-border">
              {[
                { id: 'all', label: 'All Loans' },
                { id: 'auto', label: 'Auto' },
                { id: 'home', label: 'Home Improvement' },
                { id: 'emergency', label: 'Emergency' },
                { id: 'debt', label: 'Debt Consolidation' },
                { id: 'personal', label: 'Personal' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors border-0 cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-brand-navy text-white' 
                      : 'bg-slate-100 text-brand-muted hover:text-brand-navy'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-brand-muted border-b border-brand-border bg-slate-50/50">
                    <th className="py-4 px-6 font-bold">Loan Type</th>
                    <th className="py-4 px-6 font-bold">Estimated APR</th>
                    <th className="py-4 px-6 font-bold">Loan Amount</th>
                    <th className="py-4 px-6 font-bold">Loan Term</th>
                    <th className="py-4 px-6 font-bold">Sample Monthly Payment ($10k)</th>
                    <th className="py-4 px-6 text-right font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {filteredComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-5 px-6 font-bold text-brand-navy flex items-center gap-3">
                        <span className="material-symbols-outlined text-brand-blue">{row.icon}</span>
                        <span>{row.type}</span>
                      </td>
                      <td className="py-5 px-6 font-extrabold text-brand-green">{row.apr}</td>
                      <td className="py-5 px-6 font-medium text-brand-navy">{row.amount}</td>
                      <td className="py-5 px-6 text-brand-muted">{row.term}</td>
                      <td className="py-5 px-6 font-extrabold text-brand-navy">{row.monthly}</td>
                      <td className="py-5 px-6 text-right">
                        <button 
                          onClick={() => setPage(row.targetPage)}
                          className="inline-block bg-brand-blue hover:bg-brand-blueHover text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors border-0 cursor-pointer"
                        >
                          Compare Options
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6 & 8: BENTO OF ELIGIBILITY STEPPER & APPLICATION CHECKLIST
      ============================================ */}
      <section className="py-20 bg-white border-b border-brand-border" id="eligibility">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stepper Card: "See Which Options May Fit Your Needs" (7 cols) */}
            <div className="lg:col-span-7 bg-brand-bg rounded-3xl p-8 border border-brand-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">Instant Pre-Qualification</span>
                  <span className="px-3 py-1 bg-brand-blueLight text-brand-blue rounded-full text-xs font-bold">Step 1 of 4</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">See Which Options May Fit Your Needs</h2>
                <p className="text-sm text-brand-muted mt-2">Answer a few questions to explore potential financing options tailored to your situation.</p>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2 rounded-full mt-6 overflow-hidden">
                  <div className="bg-brand-blue h-full rounded-full transition-all" style={{ width: '25%' }}></div>
                </div>

                {/* Step 1 Content: Loan Purpose Selector */}
                <div className="mt-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">Select Loan Purpose</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'auto', label: 'Auto Loan', icon: 'directions_car' },
                      { id: 'home', label: 'Home Improvement', icon: 'home_repair_service' },
                      { id: 'emergency', label: 'Emergency', icon: 'emergency' },
                      { id: 'debt', label: 'Debt Consolidation', icon: 'account_balance_wallet' },
                      { id: 'personal', label: 'Personal', icon: 'person' },
                      { id: 'other', label: 'Other Purpose', icon: 'more_horiz' }
                    ].map(chip => (
                      <button 
                        key={chip.id}
                        type="button" 
                        onClick={() => {
                          const rate = PURPOSE_RATES[chip.id] ?? heroRate;
                          setSelectedPurpose(chip.id);
                          setHeroRate(rate);
                        }}
                        className={`p-4 rounded-xl text-left font-bold text-sm shadow-sm transition-all flex flex-col gap-2 border-0 cursor-pointer ${
                          selectedPurpose === chip.id 
                            ? 'bg-brand-blue text-white' 
                            : 'bg-white text-brand-navy border border-brand-border hover:border-brand-blue'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[22px] ${selectedPurpose === chip.id ? 'text-white' : 'text-brand-blue'}`}>
                          {chip.icon}
                        </span>
                        <span>{chip.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer of card */}
              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                  <span className="material-symbols-outlined text-brand-green text-[18px]">lock</span>
                  <span>Checking eligibility does not guarantee approval. No credit score impact.</span>
                </div>
                <button 
                  type="button" 
                  onClick={() => setPage('apply')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-md border-0 cursor-pointer"
                >
                  <span>Continue</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Application Checklist Card (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-brand-border shadow-sm flex flex-col justify-between" id="checklist-section">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-brand-navy">Application Checklist</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-blueLight text-brand-blue">
                    {completedCount} of {checklist.length} completed
                  </span>
                </div>
                <p className="text-xs text-brand-muted mb-4">Check off records you have ready to unlock same-day underwriting review.</p>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
                  <div 
                    className="bg-brand-green h-full rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                {/* Interactive checkboxes */}
                <div className="space-y-3 text-sm">
                  {checklist.map(item => (
                    <label 
                      key={item.id} 
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-bg cursor-pointer select-none border border-transparent hover:border-brand-border transition-colors"
                    >
                      <input 
                        type="checkbox" 
                        checked={item.checked} 
                        onChange={() => toggleChecklist(item.id)}
                        className="w-4 h-4 rounded text-brand-blue accent-brand-blue cursor-pointer"
                      />
                      <span className="font-medium text-brand-navy">{item.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button 
                  onClick={() => setPage('apply')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white py-3.5 rounded-xl text-sm font-bold transition-colors border-0 cursor-pointer"
                >
                  <span>Continue Application</span>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: REFINANCING SAVINGS CALCULATOR ("See What You Could Save")
      ============================================ */}
      <section className="py-20 bg-brand-bg" id="savings-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Inputs (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Refinance & Save</span>
                  <h2 className="text-3xl font-extrabold text-brand-navy mt-1">See What You Could Save</h2>
                  <p className="text-sm text-brand-muted mt-2">
                    Replace high-interest credit card debt or expensive vehicle loans with a fixed Zorian refinance term.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">Current Balance</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-brand-muted font-bold text-sm">$</span>
                      <input 
                        type="number" 
                        value={saveBalance} 
                        onChange={(e) => setSaveBalance(Number(e.target.value))}
                        className="w-full pl-8 pr-3 py-2.5 rounded-xl bg-slate-50 border border-brand-border text-sm font-bold text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">Current Interest Rate (%)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.1" 
                        value={saveRate} 
                        onChange={(e) => setSaveRate(Number(e.target.value))}
                        className="w-full pl-3 pr-8 py-2.5 rounded-xl bg-slate-50 border border-brand-border text-sm font-bold text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                      <span className="absolute right-3.5 top-3 text-brand-muted font-bold text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">Current Monthly Payment</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-brand-muted font-bold text-sm">$</span>
                      <input 
                        type="number" 
                        value={savePayment} 
                        onChange={(e) => setSavePayment(Number(e.target.value))}
                        className="w-full pl-8 pr-3 py-2.5 rounded-xl bg-slate-50 border border-brand-border text-sm font-bold text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1">Remaining Term</label>
                    <select 
                      value={saveTerm} 
                      onChange={(e) => setSaveTerm(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-brand-border text-sm font-bold text-brand-navy focus:outline-none focus:border-brand-blue cursor-pointer"
                    >
                      <option value="24">24 Months</option>
                      <option value="36">36 Months</option>
                      <option value="48">48 Months</option>
                      <option value="60">60 Months</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={calculateSavings}
                  className="inline-flex items-center gap-2 bg-brand-bg hover:bg-slate-200 text-brand-navy border border-brand-border px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-brand-blue">sync</span>
                  <span>Calculate Savings</span>
                </button>
              </div>

              {/* Right Output (6 cols) */}
              <div className="lg:col-span-6">
                <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">Estimated Benefit</span>
                      <span className="text-xs text-slate-300">Zorian Refi APR: 7.99%</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                        <span className="text-xs text-slate-300 block mb-1">Potential Monthly Savings</span>
                        <div className="text-3xl font-extrabold text-brand-accent leading-none">${monthlySaved}</div>
                        <span className="text-[11px] text-slate-300 mt-1 block">extra in your pocket monthly</span>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                        <span className="text-xs text-slate-300 block mb-1">Estimated Total Savings</span>
                        <div className="text-3xl font-extrabold text-brand-green leading-none">${totalSaved}</div>
                        <span className="text-[11px] text-slate-300 mt-1 block">over entire loan duration</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 text-xs text-slate-300 leading-relaxed border border-white/10">
                      *Disclaimer: Results are estimates based on credit tier assumptions. Final terms subject to credit approval and verification.
                    </div>

                    <button 
                      onClick={() => setPage('apply')}
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white py-4 rounded-xl font-bold text-sm shadow-md transition-all border-0 cursor-pointer"
                    >
                      <span>Lock In Your Refinancing Rate</span>
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: COMPANY STATS & CEO LEADERSHIP
      ============================================ */}
      <section className="py-24 bg-white border-b border-brand-border" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story & Verified Stats (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Our Foundation</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-1">Built Around a Simpler Borrowing Experience</h2>
                <p className="text-base text-brand-muted mt-3 leading-relaxed">
                  Founded in 2018, Zorian Loan Finance has emerged as a leading provider of fast, reliable, and transparent financial solutions across the United States. We understand that unexpected expenses create stress, so our technology streamlines decisions without bureaucratic delays.
                </p>
              </div>

              {/* Authentic Verified Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy">250K+</div>
                  <div className="text-xs font-semibold text-brand-muted mt-1">Happy Customers</div>
                </div>
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">$500M+</div>
                  <div className="text-xs font-semibold text-brand-muted mt-1">Loans Funded</div>
                </div>
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy">4.8 / 5</div>
                  <div className="text-xs font-semibold text-brand-muted mt-1">Customer Rating</div>
                </div>
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy">2018</div>
                  <div className="text-xs font-semibold text-brand-muted mt-1">Founded in CA</div>
                </div>
              </div>

              {/* Mission & Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm mb-1">
                    <span className="material-symbols-outlined text-brand-blue text-[20px]">flag</span>
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">To provide fast, fair, and transparent financial solutions that empower our customers to achieve their goals.</p>
                </div>
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm mb-1">
                    <span className="material-symbols-outlined text-brand-blue text-[20px]">verified_user</span>
                    <span>Our Values</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">Integrity, transparency, customer-first approach, and responsible lending practices guide everything we do.</p>
                </div>
              </div>
            </div>

            {/* CEO Message Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-brand-border relative">
                <span className="material-symbols-outlined text-white/10 text-[80px] absolute right-6 top-6 pointer-events-none">format_quote</span>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                    MJ
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Michael Johnson</h3>
                    <p className="text-xs text-brand-accent font-semibold">Chief Executive Officer</p>
                    <p className="text-[11px] text-slate-400">Zorian Loan Finance</p>
                  </div>
                </div>

                <blockquote className="text-base text-slate-200 leading-relaxed italic relative z-10 mb-6">
                  "Our vision is to democratize access to financial services and empower every American with the tools they need to achieve financial stability and success."
                </blockquote>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Licensed Lender in all 50 states</span>
                  <span className="text-brand-accent font-bold">NMLS Partner</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 10: CUSTOMER TESTIMONIALS
      ============================================ */}
      <section className="py-20 bg-brand-bg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Real Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-1">What Our Customers Say</h2>
            <p className="text-base text-brand-muted mt-2">Join thousands of satisfied customers who achieved financial peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-base font-semibold text-brand-navy leading-relaxed mb-6">
                  "Got approved in minutes! Fast and reliable service."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-blueLight text-brand-blue font-extrabold flex items-center justify-center text-sm">
                  M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Marcus Williams</h4>
                  <p className="text-xs text-brand-muted">Austin, TX</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-base font-semibold text-brand-navy leading-relaxed mb-6">
                  "Zorian Loan Finance saved me in an emergency. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-blueLight text-brand-blue font-extrabold flex items-center justify-center text-sm">
                  M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Mike Rodriguez</h4>
                  <p className="text-xs text-brand-muted">Phoenix, AZ</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-base font-semibold text-brand-navy leading-relaxed mb-6">
                  "Best loan experience ever. Simple and straightforward."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-blueLight text-brand-blue font-extrabold flex items-center justify-center text-sm">
                  J
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Jessica Park</h4>
                  <p className="text-xs text-brand-muted">Seattle, WA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 11: ACCORDION FAQ
      ============================================ */}
      <section className="py-24 bg-white border-b border-brand-border" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-1">Frequently Asked Questions</h2>
            <p className="text-base text-brand-muted mt-2">Get answers to common inquiries about our borrowing procedures and terms.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-brand-border rounded-2xl overflow-hidden bg-white">
                  <button 
                    type="button" 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-brand-navy hover:text-brand-blue transition-colors bg-transparent border-0 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`material-symbols-outlined text-brand-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-brand-muted">
              Still have questions? Reach our lending team directly at{' '}
              <a href="mailto:quickadvancecash@gmail.com" className="text-brand-blue font-bold hover:underline">
                quickadvancecash@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 12: HIGH-CONVERSION BOTTOM CALLOUT
      ============================================ */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-brand-accent text-xs font-extrabold uppercase tracking-wider mb-6">
            Fast Approval Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Explore Your Options?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Start with a simple eligibility check and explore financing options that may fit your needs. Get funds as soon as the next business day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button 
              onClick={() => setPage('apply')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white px-9 py-4 rounded-xl font-bold text-base shadow-xl transition-all border-0 cursor-pointer"
            >
              <span>Check My Eligibility</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <a 
              href="#calculator" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base transition-all no-underline"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span>Calculate Payment</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">Checking your rates does not impact your credit score.</p>
        </div>
      </section>
    </main>
  );
}

export default HomeMain;
