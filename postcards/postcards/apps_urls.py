from apps.user.urls import urlpatterns
from django.urls import include, path

urlpatterns = [
    path('', include(urlpatterns))
]