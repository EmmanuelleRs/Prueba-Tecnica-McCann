import email
from django.db import models

# Create your models here.
class BrandModel(models.Model):
    brand_name = models.CharField('Brand Name', max_length=15)

    def __str__(self):
        return self.brand_name

class VehicleModel(models.Model):
    vehicle_name = models.CharField('Vechicle Name', max_length=15)
    vehicle_brand = models.ForeignKey(BrandModel, related_name='vehicles', on_delete=models.CASCADE)

    def __str__(self):
        return self.vehicle_name