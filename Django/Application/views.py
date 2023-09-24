from django.http import HttpRequest, HttpResponse, JsonResponse
from .algorithms import *
from django.shortcuts import render
from .models import *
from django.views.decorators.csrf import csrf_exempt


def index(request: HttpRequest):
    return HttpResponse("response")


def getUsers(request: HttpRequest):
    users = User.objects.all()
    return HttpResponse([user.username + " " for user in users])


def get_items(request: HttpRequest):
    item = get_most_popular_items()
    return HttpResponse(item)


@csrf_exempt
def get_coupons(request: HttpRequest):
    if request.method == "POST":
        jsonInput = {
            "username": request.POST.get('username'),
            "hasPlayed": request.POST.get('hasPlayed'),
            "score": request.POST.get('score'),
            "time": request.POST.get('time')
        }
        resp = cupon_issued(jsonInput)
        return JsonResponse(resp)
