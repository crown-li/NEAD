from django.urls import path
from . import views

urlpatterns = [
    path('getStart', views.get_start, name='get_start'),
]