from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    # path('users2', include('apps.users.urls')),
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api', include('apps.urls')),
]
