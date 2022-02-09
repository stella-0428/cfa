from django.urls import include, path

from . import views
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from .views import UserViewSet


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', views.index, name='index'),
]
