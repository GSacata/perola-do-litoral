from rest_framework import serializers
from .models import CardapioRestaurante, Prato

class PratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prato
        fields = ['id', 'dish_name', 'has_vegetarian', 'veget_variety', 'has_vegan', 'vegan_variety', 'overview', 'warning']

class CardapioRestauranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardapioRestaurante
        fields = ['id', 'dish_collection', 'menu_name', 'notes']