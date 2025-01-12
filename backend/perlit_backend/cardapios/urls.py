from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CardapioRestauranteList, CardapioRestauranteDetail, PratoList, PratoDetail

urlpatterns = [
    path('cardapios-rest/', CardapioRestauranteList.as_view()),
    path('cardapios-rest/<int:pk>/', CardapioRestauranteDetail.as_view()),
    path('pratos/', PratoList.as_view()),
    path('pratos/<int:pk>/', PratoDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)