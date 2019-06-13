from django.shortcuts import render
from django.http import HttpResponseRedirect

from django.views.decorators.csrf import csrf_protect

# Create your views here.

def Ministry(request):
    return render(request, 'home.html')

@csrf_protect
def peopleCall(request):
    if request.method == 'POST':
        idpost = request.GET['data']
        
    else:
        print('error')