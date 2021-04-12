from django.contrib import admin
from django.urls import path, include, re_path
from apps.mainapp.views import index, git_pull

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api', include('apps.urls')),
    path('gitpull', git_pull),
    re_path('', index)
]
