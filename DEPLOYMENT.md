# Deployment Guide for Cognoflux Static Site

This guide explains how to deploy the Cognoflux website as a static site using nginx.

## Prerequisites

- nginx installed on your server
- Domain name configured (cognoflux.com)
- SSL certificate (recommended - use Let's Encrypt)

## Build the Static Site

```bash
# Build the static export
npm run build

# The static files will be in the 'out' directory
```

## Deploy to Server

### 1. Copy Files to Server

```bash
# Copy the 'out' directory to your server
scp -r out/ user@your-server:/var/www/cognoflux/

# Or use rsync for better performance
rsync -avz --delete out/ user@your-server:/var/www/cognoflux/out/
```

### 2. Configure nginx

```bash
# Copy the nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/cognoflux

# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/cognoflux /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 3. Set Up SSL with Let's Encrypt (Recommended)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d cognoflux.com -d www.cognoflux.com

# Certbot will automatically update your nginx config
```

### 4. Set Proper Permissions

```bash
# Set ownership
sudo chown -R www-data:www-data /var/www/cognoflux/

# Set permissions
sudo chmod -R 755 /var/www/cognoflux/
```

## Local Testing with nginx

If you want to test with nginx locally on macOS:

```bash
# Install nginx (if not already installed)
brew install nginx

# Copy the nginx config
sudo cp nginx.conf /usr/local/etc/nginx/servers/cognoflux.conf

# Update the root path in the config to point to your local 'out' directory
# Edit: /usr/local/etc/nginx/servers/cognoflux.conf
# Change: root /var/www/cognoflux/out;
# To: root /Users/rameshpareek/projects/life/cognoflux/out;

# Test nginx configuration
sudo nginx -t

# Start or reload nginx
sudo nginx -s reload
# or
brew services restart nginx

# Add to /etc/hosts for local testing
echo "127.0.0.1 cognoflux.local" | sudo tee -a /etc/hosts

# Access at http://cognoflux.local
```

## Continuous Deployment

For automated deployments, you can create a simple deployment script:

```bash
#!/bin/bash
# deploy.sh

# Build the site
npm run build

# Deploy to server
rsync -avz --delete out/ user@your-server:/var/www/cognoflux/out/

# Reload nginx (optional, usually not needed for static files)
ssh user@your-server 'sudo systemctl reload nginx'

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## GitHub Actions (Optional)

You can also set up automatic deployment on push to main branch. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build static site
        run: npm run build
        
      - name: Deploy to server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          SOURCE: "out/"
          TARGET: "/var/www/cognoflux/out/"
```

## Troubleshooting

### 404 Errors on Routes

If you get 404 errors on routes like `/careers/rust-developer-hft`, make sure:
1. The `try_files` directive in nginx.conf is correct
2. The static files were built correctly (`npm run build`)
3. nginx has been reloaded after config changes

### Favicon Not Showing

1. Clear browser cache (Cmd+Shift+R)
2. Check that `favicon.svg` exists in the `out/` directory
3. Verify nginx is serving SVG files with correct content-type

### Permission Errors

```bash
# Fix permissions
sudo chown -R www-data:www-data /var/www/cognoflux/
sudo chmod -R 755 /var/www/cognoflux/
```

## Performance Optimization

The nginx config includes:
- Gzip compression for faster loading
- Cache headers for static assets (1 year)
- Security headers for better protection
- HTTP/2 support (when SSL is enabled)

## Monitoring

Check nginx logs:
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```
