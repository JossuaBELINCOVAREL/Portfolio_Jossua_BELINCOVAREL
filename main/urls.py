from django.urls import path
from . import views  # Importe les vues

urlpatterns = [
    path('', views.home, name='home'),  # Page d'accueil
    path('projects/', views.projects, name='projects'),  # Page projets
    path('contact/', views.contact, name='contact'),  # Page contact
]
