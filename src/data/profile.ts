export const profile = {
  name: 'Vinayak Mathur',
  handle: 'viniemm',
  title: 'Software Engineer, building in finance',
  location: 'New York, NY',
  bio: [
    'Software engineer with 3+ years of experience in tech, now building in finance.',
    'Most recently the sole software engineer and team lead at DANTE Solutions, where I owned the roadmap and architecture for simulation software used by Boeing, Bell, Ford, and GM.',
    'Now pursuing an MS in Quantitative Finance at the Zicklin School of Business, Baruch College.',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/viniemm' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viniemm' },
  ],
};

export const experience = [
  {
    company: 'DANTE Solutions, Inc.',
    role: 'Software Engineer & Team Lead',
    place: 'Cleveland, OH',
    dates: 'Feb 2023 – Feb 2026',
    points: [
      'Sole engineer owning roadmap and architecture for enterprise numerical simulation and predictive modeling software serving Boeing, Bell, Ford, and GM.',
      'Built a Rust data engine on Apache Arrow and Parquet, cutting parse and deserialization latency ~70% on datasets up to 10 GB.',
      'Architected a distributed backend on AWS and Supabase for compute job orchestration, async pipelines, and multi-tenant persistence.',
      'Moved the client from a legacy Qt desktop app to Tauri (Rust) and TypeScript, taking heavy computation off the UI thread.',
      'Set engineering standards: technical specs, sprint planning, code review, and automated CI/CD releases to client environments.',
    ],
  },
  {
    company: 'Hesiod Financial LLC',
    role: 'Portfolio Manager & Software Engineer',
    place: 'New York, NY',
    dates: 'Oct 2019 – Jan 2022',
    points: [
      'Ran strategy and execution for $120K AUM across Communication Services, IT, and FX books in a seed-funded, student-run macro fund.',
      'Wrote systematic trading and allocation models in Python: factor screening, backtesting, and Sharpe-optimized rebalancing.',
      'Built data pipelines and screening dashboards on Capital IQ, Koyfin, and YCharts feeds with DCF valuation metrics.',
      'Defended cross-asset and options theses before the executive committee; set position-sizing, drawdown, and risk limits.',
    ],
  },
];

export const education = [
  {
    school: 'Baruch College, Zicklin School of Business',
    degree: 'MS in Quantitative Finance',
    place: 'New York, NY',
    dates: 'Expected May 2028',
    detail: 'Corporate Finance, Quant Tools for Finance, AI in Business',
  },
  {
    school: 'Case Western Reserve University',
    degree: 'BA in Computer Science, Minor in Economics',
    place: 'Cleveland, OH',
    dates: 'Jan 2023',
    detail:
      "Dean's Honors List (2020) · Robert L. Schaefer Prize Fund (2022) · UMB Designer of the Year (2022) · Director of Design, The Observer (2020–2022)",
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'Rust', 'TypeScript', 'JavaScript', 'SQL', 'R'] },
  { group: 'Data & Infra', items: ['Arrow', 'Parquet', 'PostgreSQL', 'AWS', 'Azure CI/CD', 'Docker', 'Supabase'] },
  { group: 'Quant', items: ['NumPy', 'Pandas', 'SciPy', 'PyPortfolioOpt', 'Bloomberg', 'Capital IQ', 'FactSet'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind', 'Tauri'] },
];
