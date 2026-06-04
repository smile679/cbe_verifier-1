# CBE Receipt Verifier

A simple React + Tailwind web app to verify Commercial Bank of Ethiopia receipts.

## How it works

Enter the **FT number** and the **last 8 digits** of the recipient's account number.  
Click **Verify receipt** — it builds the URL and opens it in a new tab:

```
https://apps.cbe.com.et:100/?id={FT_NUMBER}{LAST_8_DIGITS}
```

## Setup & Run

```bash
npm install
npm run dev
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done ✓

## Deploy to Netlify

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

## Tech stack

- React 18
- Vite
- Tailwind CSS v3
- DM Sans + DM Mono (Google Fonts)
