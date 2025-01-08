from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CardapioRestauranteList, CardapioRestauranteDetail

urlpatterns = [
    path('card-rest/', CardapioRestauranteList.as_view()),
    path('card-rest/<int:pk>/', CardapioRestauranteDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)