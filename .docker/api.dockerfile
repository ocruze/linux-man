FROM python:3.9-alpine

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "/api/run.py" ]