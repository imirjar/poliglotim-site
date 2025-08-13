docker build -t poliglotim-site .
docker run -p 3000:3000 -e poliglotim-site

API_BASE_URL=https://new-api.example.com 