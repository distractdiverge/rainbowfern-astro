// Astro endpoint for contact form (mailto redirect)
export const prerender = true;

export function GET(context: { url: URL }) {
  const url = new URL(context.url);
  const firstName = url.searchParams.get('firstName') || '';
  const lastName = url.searchParams.get('lastName') || '';
  const email = url.searchParams.get('email') || '';
  const message = url.searchParams.get('message') || '';

  const emailUser = 'the.astrid.solveig';
  const emailDomain = 'gmail.com';
  const fullEmail = `${emailUser}@${emailDomain}`;

  const subject = `Contact Form Submission from ${firstName} ${lastName}`;
  const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

  const mailtoLink = `mailto:${fullEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return new Response('', {
    status: 302,
    headers: {
      Location: mailtoLink,
    },
  });
}
