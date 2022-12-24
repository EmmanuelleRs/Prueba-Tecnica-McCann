from statistics import mode
from django.db import models

class RegistyModel(models.Model):
    firstname = models.CharField('FirstName', max_length=25)
    lastname = models.CharField('LastName', max_length=25)
    email = models.EmailField('Email')
    phone = models.CharField('Phone', max_length=12)
    brand = models.CharField('LastName', max_length=25)
    vehicle = models.CharField('LastName', max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    updates_at = models.DateTimeField(auto_now=True)