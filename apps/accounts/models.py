from datetime import date

from django.db import models
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name="Категория")
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    # content = models.TextField(max_length=255, blank=True)

    content = RichTextUploadingField()

    is_published = models.BooleanField(default=False)

    CHOICES = (
        ('qg', '22'),
        ('33', '44'),
        ('45', '55'),
    )

    CHOICES_EMPTY = (('', 'Выберете'),) + CHOICES
    cat = models.CharField(max_length=6, choices=CHOICES_EMPTY, default='')

    like = models.CharField(max_length=255, choices=CHOICES, default='')

    Countries = models.JSONField(choices=CHOICES, default='{}')

    date1 = models.DateField(default=date.today)
    file = models.FileField(upload_to="photos/%Y/%m/%d/", blank=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('category', kwargs={'cat_id': self.pk})

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['id']
