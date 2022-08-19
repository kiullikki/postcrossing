# postcrossing
---
запуск бека
если нет окружения:
```bash
    python -m venv env
```
---
из дирректори с папкой venv -
```bash
'source env/bin/activate'
```
---
если есть:
    из дирректори с папкой venv - 
```bash
    'source env/bin/activate'
```
далее:
```bash
    python -m pip install --upgrade pip
```
---
из дирректории с requirements - 
```bash
    'pip install -r requirements.txt'
```
---
из дирректории с manage.py - 
```bash
    'python manage.py migrate'
```
Запустить проект:
```bash
    python manage.py runserver
```
---