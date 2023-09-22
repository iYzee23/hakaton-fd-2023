from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from .models import *


def index(request: HttpRequest):
    return HttpResponse("Moja kita mrtva!")


def getUsers(request: HttpRequest):
    users = User.objects.all()
    return HttpResponse([user.username + " " for user in users])
