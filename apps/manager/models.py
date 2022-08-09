from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=8, unique=True)
    email = models.EmailField()
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = ['email']

    objects = UserManager()
