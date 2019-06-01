from django.shortcuts import render,render_to_response
from django.http import HttpResponse
import json
# Create your views here.
"""
def home(request):

    return HttpResponse('<h1> Home Page </h1>')
"""

def home(request):
    return render(request, 'iridize/index.html')