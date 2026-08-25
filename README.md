# Vasudhabhoomi Seeds LLP

Frontend website for **Vasudhabhoomi Seeds LLP**, Rahuri. English + Marathi. Static only — no backend.

**Tagline:** Sowing Trust, Growing Tomorrow.  
**Product:** Bhimashakti onion seed (भीमाशक्ती कांदा वाण)

Live after Netlify deploy: add your URL here.

---

## What’s on the site

- Home, about, vision & mission
- Bhimashakti product details (yield, storage, season)
- Farm guide from the company PDF (climate, soil, fertilizer, water, harvest)
- Field problems (bolting / yellow leaves)
- Contact: director, GSTIN, address, call, WhatsApp, map
- EN / मराठी language switch
- Mobile-friendly layout

---

## Tech

| Item | Detail |
|---|---|
| Stack | HTML, CSS, JavaScript |
| Hosting | Netlify (static) |
| Backend | None |

Main files:

```
index.html
css/styles.css
js/app.js
assets/img/   ← logo and photos used by the site
```

---

## Run locally

Open `index.html` in a browser, or from this folder:

```bash
python -m http.server 8080
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

---

## Push to GitHub

```bash
git init
git add index.html css js assets/img README.md
git commit -m "Add Vasudhabhoomi Seeds website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Do **not** commit large unused PDFs or extra files in `assets/` unless you need them. The site only needs `assets/img/`.

---

## Deploy on Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com) and log in.
2. **Add new site** → **Import an existing project** → GitHub.
3. Pick this repo.
4. Build settings:
   - **Build command:** leave empty
   - **Publish directory:** `.` (site root)
5. Deploy.

After it is live, you can add a custom domain in **Domain settings**.

Or drag-and-drop the project folder onto [https://app.netlify.com/drop](https://app.netlify.com/drop).

---

## Company

**Vasudhabhoomi Seeds LLP**  
Director: Rajanikant Ramesh Shewale  

Survey No. 332, Opposite to NHAI Office, Taharabad Road, Kangar Bk., Tal. Rahuri, Dist. Ahilyanagar, Maharashtra 413706, India (19.436571, 74.569653)  

Customer care: [9284655695](tel:+919284655695)  
Email: [vasudhabhoomiseeds@gmail.com](mailto:vasudhabhoomiseeds@gmail.com)  
GSTIN: 27ABCFV3356R1ZF
