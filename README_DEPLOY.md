```md
# Deploying Fortify Technologies site to GitHub Pages

Replace YOUR_GITHUB_USERNAME below with your actual GitHub username.

## 1) Create repo on GitHub
- Repo name: YOUR_GITHUB_USERNAME.github.io
- Public repo

## 2) Local git (if you prefer CLI)
```bash
# clone empty repo
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
cd YOUR_GITHUB_USERNAME.github.io

# copy all files (index.html, about.html, services.html, case-studies.html, logo.svg, favicon.svg, sitemap.xml, robots.txt, README_DEPLOY.md)
# then:
git add .
git commit -m "Initial Fortify Technologies site"
git push origin main
```

## 3) GitHub Pages
- Go to repository -> Settings -> Pages
- Source: Branch `main` (root)
- Custom domain: fortify-technologies.com (enter and save)
- Ensure DNS is set (A records and CNAME) — you already configured
- Enable "Enforce HTTPS" after certificate issuance

## 4) Quick checks
- Visit https://fortify-technologies.com
- Visit https://fortify-technologies.com/services.html

```
