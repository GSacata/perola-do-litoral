from django.db import models

# Create your models here.
class Prato(models.Model):
    dish_name = models.CharField(max_length=100)
    has_vegetarian = models.BooleanField(default=False)
    veget_variety = models.TextField(max_length=40, blank=True)
    has_vegan = models.BooleanField(default=False)
    vegan_variety = models.TextField(max_length=60, blank=True)
    overview = models.TextField(blank=True)
    warning = models.TextField(blank=True)

class CardapioRestaurante(models.Model):
    dish_collection = models.ManyToManyField(Prato, blank=True)
    menu_name = models.CharField(max_length=50, null=True)
    notes = models.TextField()

