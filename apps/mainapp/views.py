from django.shortcuts import render
from django.http import HttpResponse
import os
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'index.html', {})


@csrf_exempt
def git_pull(request):
    os.system('git reset --hard origin/master && git pull https://github.com/DmitriyBessalov/social_network.git')
    return HttpResponse('True')
