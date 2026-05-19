# Animated Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project features smooth animations and a clean, professional design to showcase my work and skills.

## 🚀 Features

- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Styled with Tailwind CSS for rapid UI development
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🛠️ Easy to customize and extend

## Contact Form Setup

Create a local `.env` file from `.env.example` and add your Web3Forms key:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

The contact form reads this key from `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`.

## VPS Deployment

This repo is set up to deploy to your VPS from GitHub Actions over SSH.

### App path on the VPS

Clone the repo into:

```bash
~/ksm/animated-portfolio
```

### One-time VPS setup

```bash
cd ~/ksm
git clone git@github.com:YOUR_GITHUB_USER/YOUR_REPO_NAME.git animated-portfolio
cd ~/ksm/animated-portfolio
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

The PM2 app listens on:

```bash
HOST=0.0.0.0
PORT=4173
```

### GitHub Actions deploy flow

On every push to `main`, GitHub Actions will:

- SSH into your VPS
- `cd ~/ksm/animated-portfolio`
- `git pull origin main`
- `npm ci`
- `npm run build`
- restart the PM2 app

Set these repository secrets in GitHub:

```bash
VPS_HOST=your_server_ip_or_hostname
VPS_USER=your_ssh_username
VPS_SSH_KEY=your_private_ssh_key
VPS_PORT=22
```

The workflow is defined in `.github/workflows/deploy.yml`.

### Nginx for kartik-marathe.tech

The Nginx config is included at `nginx/animated-portfolio.conf`.

Install it on the VPS:

```bash
sudo cp nginx/animated-portfolio.conf /etc/nginx/sites-available/animated-portfolio
sudo ln -s /etc/nginx/sites-available/animated-portfolio /etc/nginx/sites-enabled/animated-portfolio
sudo nginx -t
sudo systemctl reload nginx
```

Then issue TLS certificates:

```bash
sudo certbot --nginx -d kartik-marathe.tech -d www.kartik-marathe.tech
```

### DNS

Point both records to the VPS public IP:

```bash
A     kartik-marathe.tech       -> YOUR_VPS_IP
A     www.kartik-marathe.tech   -> YOUR_VPS_IP
```

Do not use registrar forwarding. Let Nginx handle the redirect from `kartik-marathe.tech` to `https://www.kartik-marathe.tech`.


## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) 

## Live Demo

[Live Demo](https://ksm007.github.io/animated_portfolio/)
