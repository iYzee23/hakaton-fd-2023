from django.urls import path
from .views import *

urlpatterns = [
    path('index/', index, name="index"),
    path('getUsers/', getUsers, name="getUsers"),
    path('items/', get_items, name="getItems"),
    path('coupons/', get_coupons, name="getCoupons")
]
