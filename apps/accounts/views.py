from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import AddPostForm, AddPostModelForm
from .models import Category
from django.forms.utils import ErrorDict


# Create your views here.
def home(request):
    """ Вывод главной страницы """
    return render(request, 'base.html')


def html_form(request):
    """ Вывод формы средствами html """
    return render(request, 'forms/static_form.html')


def addpage(request):
    if request.method == 'POST':
        form = AddPostForm(request.POST, request.FILES)
        if form.is_valid():
            print(form.cleaned_data)

            """ Сохранение в новой записи в модель """
            _values = form.cleaned_data
            p = Category(**_values)
            p.save()

    else:
        form = AddPostForm()

    return render(request, 'forms/addpage.html', {'form': form, 'title': 'Добавление статьи'})


def addmodelpage(request):
    p_id = ''
    if request.method == 'POST':
        if 'pk' in request.GET:
            """Обновление данных модели"""
            category = Category.objects.get(pk=int(request.GET['pk']))
            form = AddPostModelForm(request.POST, request.FILES, instance=category)
            if form.is_valid():
                form.save()
        else:
            """ Создание новой модель """
            form = AddPostModelForm(request.POST, request.FILES)
            if form.is_valid():
                _values = form.cleaned_data
                p = Category(**_values)
                p.save()
                p_id = '?pk=' + str(p.id)
    else:
        if 'pk' in request.GET:
            """ Отображение существующей модели """
            p = Category.objects.values().get(pk=int(request.GET['pk']))
            form = AddPostModelForm(p)
            p_id = '?pk=' + str(p.get('id'))
            form._errors = ErrorDict()  # отключение валидации полей
        else:
            """ Отображение новой модель """
            form = AddPostModelForm()

    return render(request, 'forms/addpage.html', {'form': form, 'p_id': p_id, 'title': 'Добавление статьи'})


def email(request):
    """ Отправка email письма """
    send_mail('Тема письма', 'Содержимое письма', settings.EMAIL_HOST_USER, ['bez1dn6a@yandex.ru'])

    print('отправлено')

    return render(request, 'base.html')
