from django.urls import path
from .api import RegistyAPI
from .views import IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('api/registry', RegistyAPI.as_view(), name='api-registry'),
]