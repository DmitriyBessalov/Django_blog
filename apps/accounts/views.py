from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def home(request):
    return render(request, 'base.html')


def email(request):
    send_mail('Тема письма', 'Содержимое письма', settings.EMAIL_HOST_USER,  ['bez1dn6a@yandex.ru'])

    print('отправлено')

    return render(request, 'base.html')
