from .models import User
from django.views.generic import ListView, DetailView, FormView, View
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from apps.registry.models import RegistyModel
from .forms import LoginForm, SigninForm

class Dashboard(ListView):
    model = RegistyModel
    template_name = 'crm.html'
    context_object_name = 'list'

class SeeCustomer(DetailView):
    model = RegistyModel
    template_name = 'scrm.html'

class SiginView(FormView):
    template_name = 'signin.html'
    form_class = SigninForm
    success_url = '/dashboard/auth/'

    def form_valid(self, form):
        username = form.cleaned_data['username']
        email = form.cleaned_data['email']
        password1 = form.cleaned_data['password1']
        User.objects.create_user(username, email, password1)

        return super(SiginView, self).form_valid(form)


class LoginView(FormView):
    template_name = 'login.html'
    form_class = LoginForm
    success_url = '/dashboard/auth/'

    def form_valid(self, form):
        user = authenticate(
            username = form.cleaned_data['username'],
            password = form.cleaned_data['password']
        )
        login(self.request, user)
        return super(LoginView, self).form_valid(form)

class LogoutView(View):
    def get(self, request, *args, **kargs):
        logout(request)
        return redirect('login')