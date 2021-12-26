from django.shortcuts import render
from os import name
from django.http import response
from rest_framework import serializers
from rest_framework.views import APIView
from .models import Event
from .serializers import EventSerializer
from rest_framework.response import Response
import json
from django.shortcuts import render

# Create your views here.


class Home(APIView):
    def get(self, request):
        arr = Event.objects.all()
        serializer = EventSerializer(arr, many=True)
        context = {"d_data": serializer.data, "range": range(6)}
        return render(request, "in.html", context)

    def delete(self, request):
        var = json.loads(request.body)
        Event.objects.get(id=var["id"]).delete()
        return Response("User Deleted")

    def put(self, request):
        var = json.loads(request.body)
        user = Event.objects.filter(id=var["id"]).first()
        user.is_liked = var["is_liked"]
        user.save()
        return Response("Fields Updated")


class Form(APIView):
    def get(self, request):
        return render(request, "form.html")

    def post(self, request):
        var = json.loads(request.body)
        serializer = EventSerializer(data=var)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
