from django.db import models

# Modèle pour stocker les informations des projets
class Project(models.Model):
    title = models.CharField(max_length=100)  # Titre du projet
    description = models.TextField()  # Description du projet
    image = models.ImageField(upload_to='projects/')  # Image illustrant le projet
    github_link = models.URLField()  # Lien vers le dépôt GitHub

    def __str__(self):
        return self.title
