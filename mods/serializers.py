from rest_framework import serializers
from .models import Mod

class ModSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mod
        fields = ['id', 'identifier', 'plant_type', 'growth_method', 'user'] 