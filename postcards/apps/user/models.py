from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(max_length=150, unique=True,
                              verbose_name='почта')
    username = models.CharField(blank=False, max_length=150, unique=True,
                                verbose_name='имя пользователя')
    first_name = models.CharField(blank=False, max_length=150,
                                  verbose_name='Имя')
    last_name = models.CharField(blank=False, max_length=150,
                                 verbose_name='фамилия')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return self.email
