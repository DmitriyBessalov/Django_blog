from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class SocialUser(AbstractUser):
    email = models.EmailField(verbose_name="Email", unique=True)
    ava = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name="Аватар", blank=True, null=True)
    phone = models.IntegerField(unique=True, verbose_name="Телефон", blank=True, null=True)
    description = models.TextField(max_length=254, verbose_name="Описание", blank=True, null=True)
    date_birthday = models.DateField(verbose_name="Дата рождения", blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Пользователь '
        verbose_name_plural = 'Пользователи'
        ordering = ['email']
