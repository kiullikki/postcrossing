# postcrossing

запуск бека
если нет окружения:
    python -m venv env
    из дирректори с папкой venv - 'source env/bin/activate'
если есть:
    из дирректори с папкой venv - 'source env/bin/activate'
далее:
    python -m pip install --upgrade pip
    из дирректории с requirements - 'pip install -r requirements.txt'
    из дирректории с manage.py - 'python manage.py migrate'
Запустить проект:
    python manage.py runserver