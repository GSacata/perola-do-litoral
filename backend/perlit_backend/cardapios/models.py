from django.db import models

# Create your models here.
class CardapioRestaurante(models.Model):
    dish = models.CharField(max_length=100)
    has_vegetarian = models.BooleanField(default=False)
    veget_variety = models.TextField(max_length=40, blank=True)
    has_vegan = models.BooleanField(default=False)
    vegan_variety = models.TextField(max_length=60, blank=True)
    notes = models.TextField()

