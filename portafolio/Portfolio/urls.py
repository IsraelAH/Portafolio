from django.urls import path
from . import views

urlpatterns = [
    path('Portafolio/', views.Portfolio, name='Portfolio')
]