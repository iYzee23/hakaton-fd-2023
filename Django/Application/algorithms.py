from .models import *
from django.db.models import Sum, Case, When, F
from datetime import datetime, timedelta
import random
import json


#returns number of liters that user got
def get_value_liters():
    numbers = [5, 10, 15, 20, 25, 30]
    return random.choice(numbers)


#return logged user id
def get_user_id():
    curr_user_id = 1
    return curr_user_id


def get_most_popular_items():
    today = datetime.today().date()
    two_months_ago = today - timedelta(days=60)
    six_months_ago = today - timedelta(days=180)

    curr_id = get_user_id()
    bills = Bill.objects.filter(id=curr_id)

    if not bills.exists():
        return {}

    most_popular_items = {
        "energy_drink_cnt": 0,
        "protein_bar_cnt": 0,
        "antifriz_cnt": 0,
        "tenost_za_staklo_cnt": 0,
        "coffe_cnt": 0
    }

    for i in range(len(bills)):
        for bill in bills:
            for key in most_popular_items.keys():
                if hasattr(bill, key):
                    most_popular_items[key] += getattr(bill, key) or 0

    return max(most_popular_items, key=most_popular_items.get)


def get_user_tier_coef():
    return 0.9


def cupon_issued(jsonInput):
    username = jsonInput['username']
    hasPlayed = bool(jsonInput['hasPlayed'])
    score = int(jsonInput['score'])
    time = int(jsonInput['time'])

    tier_coef = get_user_tier_coef()
    liters_coef = get_value_liters()

    treshold = 15

    response = {
        "won_award": False,
        "award_id": None
    }

    if not hasPlayed:
        return response

    overall_score = score/time*tier_coef*liters_coef
    if overall_score < treshold:
        return response
    else:
        response = {
            "won_award": True,
            "award_id": 1
        }
        return response