# postcrossing
## 1. [окружение](#1)
## 2. [зависимости](#2)
## 3. [Запуск](#3)

---
## 1. окружение <a id=1></a>
если нет окружения:
```bash
    python -m venv venv
```
из дирректори с папкой venv :
```bash
'source venv/scripts/activate'
```
---
если есть - из дирректори с папкой venv:
```bash
    'source venv/scripts/activate'
```
## 2. зависимости <a id=2></a>
```bash
    python -m pip install --upgrade pip
```
из дирректории с requirements: 
```bash
    'pip install -r requirements.txt'
```
из дирректории с manage.py:
```bash
    'python manage.py migrate'
```
## 3. запуск <a id=3></a>
из дирректории с manage.py
```bash
    python manage.py runserver
```