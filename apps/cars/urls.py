from django.urls import path
#
from .api import VehiclesAPI
urlpatterns = [
    path('api/vehicles/', VehiclesAPI.as_view(), name='api-vehicles')
]