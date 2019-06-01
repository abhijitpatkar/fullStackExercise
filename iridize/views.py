from django.shortcuts import render,render_to_response
from django.http import HttpResponse
import json
# Create your views here.

def home(request):
    jsonData= """{
        "steps": [
            {
                "id": "1",
                "content": "tip on first div",
                "selector": "#id_1",
                "next": "2"
            },
            {
                "id": "2",
                "content": "tip on second div",
                "selector": ".myClass2",
                "next": "3"
            },
            {
                "id": "3",
                "content": "tip on third div.",
                "selector": "div:eq(2)",
                "next": None # null is replaced with None as null is not valied in python
            }
        ]
    }"""
    return render(request, 'iridize/index.html',{'jsonData':json.dumps(jsonData)})