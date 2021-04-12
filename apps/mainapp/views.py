from django.shortcuts import render
import os

def index(request):
    return render(request, 'index.html', {})


def git_pull(request):
    os.system('git reset --hard origin/master && git pull https://github.com/DmitriyBessalov/social_network.git')
    return
