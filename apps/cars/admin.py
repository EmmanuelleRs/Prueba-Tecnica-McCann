from django.contrib import admin
from .models import VehicleModel, BrandModel
# Register your models here.
admin.site.register(VehicleModel)
admin.site.register(BrandModel)
