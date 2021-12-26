from django.urls import path
from .views import Form, Home

urlpatterns = [
    path("", Home.as_view()),
    path("add_event", Form.as_view()),
]
