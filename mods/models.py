from django.db import models
from django.contrib.auth.models import User

class Mod(models.Model):
    identifier = models.CharField(max_length=100, unique=True)
    plant_type = models.CharField(max_length=100)
    growth_method = models.CharField(max_length=50, choices=[('soil', 'Soil'), ('hydroponic', 'Hydroponic')])
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mods')

    def __str__(self):
        return f"{self.identifier} ({self.plant_type}, {self.growth_method})"
