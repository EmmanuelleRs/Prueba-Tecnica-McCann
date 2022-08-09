from django.contrib import admin
from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import LoginView, LogoutView, SiginView, Dashboard, SeeCustomer

urlpatterns = [
    path('auth/', login_required(Dashboard.as_view()), name='dashboard'),
    path('auth/<pk>/', login_required(SeeCustomer.as_view())),
    path('', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view()),
    # path('signin/', SiginView.as_view())
]
