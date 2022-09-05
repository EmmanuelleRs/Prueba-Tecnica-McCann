from rest_framework import serializers

from .models import VehicleModel, BrandModel

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleModel
        fields = '__all__'

class BrandSerialzer(serializers.ModelSerializer):
    vehicles = VehicleSerializer(many=True)
    class Meta:
        model = BrandModel
        fields = ('id', 'brand_name', 'vehicles')