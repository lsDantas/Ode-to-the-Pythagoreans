FROM python:3

WORKDIR /usr/src/app/

COPY . .

RUN useradd -m appuser

RUN chown appuser .

RUN pip install --user --no-cache-dir -r requirements.txt

RUN pip install twisted

ENV PATH="/home/appuser/.local/bin:${PATH}"

ENV PYTHONPATH=.

CMD ["twistd", "-n", "web", "--wsgi", "app.app", "--port", "tcp:8080"]