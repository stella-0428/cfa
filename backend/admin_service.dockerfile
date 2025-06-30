FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    build-essential \
    libpq-dev \
    curl \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/* 
RUN adduser --disabled-password --no-create-home --gecos '' backend_user
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY entrypoint.sh /entrypoint.sh
COPY . .
RUN chmod +x /entrypoint.sh
RUN chown backend_user:backend_user /entrypoint.sh
RUN chown -R backend_user:backend_user /app 
USER backend_user
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:8000/health/ || exit 
ENTRYPOINT ["/entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]