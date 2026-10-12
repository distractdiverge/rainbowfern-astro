// Astro endpoint that generates llms.txt for AI discoverability
// See: https://llmstxt.org/

export const prerender = true;

export function GET(_context: { url: URL }) {
  const baseUrl = 'https://rainbowfern.com';
  
  const pages = [
    { path: '/', title: 'Rainbow Fern Development', description: 'Remote software architect & consultant in Philadelphia Area. 15+ years in fintech/healthcare. Enterprise architecture, system integration, technical leadership.' },
    { path: '/projects', title: 'Projects | Astrid (Alex) Lapinski | Software Architecture', description: 'Architecture and integration implementations with accessible code. Enterprise systems, fintech solutions, AI/ML prototypes. Real-world projects from 15+ years.' },
    { path: '/experience', title: 'Career Experience | Astrid (Alex) Lapinski | Architect', description: '15+ years as Principal Architect and engineer in regulated fintech and healthcare. Led enterprise architecture, system integrations, cross-team coordination.' },
    { path: '/education', title: 'Education & Skills | Astrid (Alex) Lapinski', description: 'Education and technical skills for a software architect with 15+ years of experience in fintech, healthcare, and enterprise systems.' },
    { path: '/contact', title: 'Contact | Rainbow Fern Development', description: 'Available for architecture consulting, enterprise integration, and technical leadership projects. Remote services for Philadelphia Area and nationwide clients.' },
  ];

  const lines = [
    '# Rainbow Fern Development',
    '',
    `Astrid (Alex) Lapinski is a software architect and consultant with 15+ years of experience specializing in fintech, healthcare, system integration, and technical leadership. Based in the Philadelphia Area, offering remote consulting services nationwide.`,
    '',
    '## Site Navigation',
    '',
  ];

  for (const page of pages) {
    lines.push(`### ${page.title}`);
    lines.push('');
    lines.push(page.description);
    lines.push('');
    lines.push(`**URL:** ${baseUrl}${page.path}`);
    lines.push('');
  }

  const body = lines.join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
