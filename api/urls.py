from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
     path('users/', include('api.users.urls')),
     path('auth/', include('djoser.urls')),
     path('auth/token/', obtain_auth_token, name='token'),
]
