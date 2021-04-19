from django.contrib import admin
from django.urls import path, include
from apps.base.views import index, git_update

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('git_update', git_update),
    path('auth/', index),
    path('api/auth', include('apps.users.urls')),  # swagger /api/auth
    path('api/article/', include('apps.article.urls')),  # swagger /api/article/docs
]
