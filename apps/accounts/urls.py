from django.urls import path
from apps.accounts.views import *

urlpatterns = [
    path('', home, name='index'),
    path('html_form', html_form),
    path('add_form', addpage, name='add_page'),

    path('mail', email),
]
