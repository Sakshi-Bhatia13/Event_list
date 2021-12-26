from django.db import models

# Create your models here.


class Event(models.Model):
    event_name = models.CharField(max_length=255)
    data = models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    is_liked = models.BooleanField(max_length=255)
    image = models.CharField(max_length=255)
