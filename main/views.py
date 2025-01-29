from django.shortcuts import render

def home(request):
    return render(request, 'main/home.html')

def projects(request):
    return render(request, 'main/projects.html')  # Crée un fichier main/projects.html

def contact(request):
    return render(request, 'main/contact.html')  # Crée un fichier main/contact.html
