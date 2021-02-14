from django.urls import path, include
from apps.accounts.views import *

urlpatterns = [
    path('', home, name='index'),
    path('html_form', html_form),
    path('add_form', addpage, name='add_page'),
    path('add_model_form', addmodelpage, name='add_model_page'),
    path('mail', email),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('category', CategoryREST.as_view()),
]
