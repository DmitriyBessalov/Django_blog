from django.urls import path
from apps.accounts.views import home, email

urlpatterns = [
    path('', home),
    path('mail', email),
]
