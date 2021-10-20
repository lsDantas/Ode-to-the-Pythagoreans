FROM python:3

WORKDIR /usr/src/app/

RUN useradd -m appuser

COPY --chown=appuser:appuser . .

USER appuser

RUN pip install --user --no-cache-dir -r requirements.txt

ENV PATH="/home/appuser/.local/bin:${PATH}"

ENV FLASK_ENV=development

CMD ["flask", "run", "-h", "0.0.0.0", "-p", "5000"]