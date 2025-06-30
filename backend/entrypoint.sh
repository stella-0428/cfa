#!/bin/bash
set -e

echo "📦 Waiting for database to be ready..."
while ! nc -z db-service 5432; do
  sleep 1
done
echo "✅ Database is up!"

echo "📂 Applying migrations..."
python manage.py migrate --noinput

# Optional: health check route you may want to define
# echo "📥 Collecting static files..."
# python manage.py collectstatic --noinput

echo "🚀 Starting Django server..."
exec "$@"