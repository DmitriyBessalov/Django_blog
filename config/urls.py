from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('users2', include('apps.users.urls')),
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api', include('apps.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
