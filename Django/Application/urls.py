from django.urls import path
from .views import *

urlpatterns = [
    path('index/', index, name="index"),
    path('getUsers/', getUsers, name="getUsers")
]
