from rest_framework import serializers
from .models import CardapioRestaurante

class CardapioRestauranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardapioRestaurante
        fields = ['id', 'dish', 'has_vegetarian', 'veget_variety', 'has_vegan', 'vegan_variety', 'notes']