from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Mod
from .serializers import ModSerializer

# Create your views here.

class ModViewSet(viewsets.ModelViewSet):
    queryset = Mod.objects.all()
    serializer_class = ModSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Only return mods belonging to the current user
        return Mod.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
