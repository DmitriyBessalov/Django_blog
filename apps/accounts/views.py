from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import *


# Create your views here.
def home(request):
    """ Вывод главной страницы """
    return render(request, 'base.html')


def html_form(request):
    """ Вывод формы средствами html """
    return render(request, 'forms/static_form.html')


def addpage(request):
    if request.method == 'POST':
        form = AddPostForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
    else:
        form = AddPostForm()
    """ Вывод формы создавая новую форму """

    return render(request, 'forms/addpage.html', {'form': form, 'title': 'Добавление статьи'})


def email(request):
    """ Отправка email письма """
    send_mail('Тема письма', 'Содержимое письма', settings.EMAIL_HOST_USER, ['bez1dn6a@yandex.ru'])

    print('отправлено')

    return render(request, 'base.html')
